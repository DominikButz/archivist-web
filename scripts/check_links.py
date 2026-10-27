#!/usr/bin/env python3
"""Check local links, assets, anchors and basic page metadata."""

from __future__ import annotations

import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
SKIP_SCHEMES = ("http://", "https://", "mailto:", "tel:", "data:", "javascript:", "//")


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.urls: list[tuple[str, str]] = []
        self.ids: set[str] = set()
        self.title = ""
        self.in_title = False
        self.has_description = False
        self.has_refresh = False
        self.lang = ""
        self.img_without_alt: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key: value or "" for key, value in attrs}

        if tag == "html":
            self.lang = values.get("lang", "")

        if "id" in values:
            self.ids.add(values["id"])

        if tag == "title":
            self.in_title = True

        if tag == "meta":
            if values.get("name", "").lower() == "description":
                self.has_description = True
            if values.get("http-equiv", "").lower() == "refresh":
                self.has_refresh = True
                content = values.get("content", "")
                if "url=" in content.lower():
                    url = content.lower().split("url=", 1)[1].strip()
                    self.urls.append((url, "meta refresh"))

        if tag in {"a", "link"}:
            href = values.get("href", "")
            if href:
                self.urls.append((href, tag))

        if tag == "img":
            src = values.get("src", "")
            if src:
                self.urls.append((src, "img src"))
            srcset = values.get("srcset", "")
            if srcset:
                self.urls.append((srcset, "img srcset"))
            if "alt" not in values:
                self.img_without_alt.append(src or "(inline image)")

        if tag == "source":
            srcset = values.get("srcset", "")
            if srcset:
                self.urls.append((srcset, "source srcset"))

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title += data


def parse(path: Path) -> PageParser:
    parser = PageParser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


def collect_ids(path: Path, cache: dict[Path, set[str]]) -> set[str]:
    if path not in cache:
        cache[path] = parse(path).ids
    return cache[path]


def check_url(
    source: Path,
    raw_url: str,
    kind: str,
    errors: list[str],
    cache: dict[Path, set[str]],
) -> int:
    count = 0
    candidates = [part.strip().split()[0] for part in raw_url.split(",") if part.strip()]

    for url in candidates:
        url = url.strip()
        if not url or url.startswith(SKIP_SCHEMES):
            continue

        if url.startswith("/"):
            errors.append(f"{source.relative_to(ROOT)}: absolute path breaks project pages: {url}")
            continue

        parsed = urlparse(url)
        path_part = parsed.path
        fragment = parsed.fragment

        if path_part == "":
            target = source
        else:
            target = (source.parent / path_part).resolve()
            if path_part.endswith("/") or target.is_dir():
                target = target / "index.html"

        if not target.exists():
            errors.append(f"{source.relative_to(ROOT)}: missing target for {url} ({kind})")
            continue

        count += 1

        if fragment:
            if target.suffix.lower() not in {".html", ".htm"}:
                errors.append(f"{source.relative_to(ROOT)}: fragment on non-HTML target: {url}")
                continue
            if fragment not in collect_ids(target, cache):
                errors.append(f"{source.relative_to(ROOT)}: missing anchor #{fragment} in {target.relative_to(ROOT)}")

    return count


def main() -> int:
    pages = sorted(ROOT.rglob("*.html"))
    errors: list[str] = []
    cache: dict[Path, set[str]] = {}
    total_links = 0

    for page in pages:
        parser = parse(page)
        relative = page.relative_to(ROOT)

        if not parser.lang:
            errors.append(f"{relative}: missing html lang attribute")
        if not parser.title.strip():
            errors.append(f"{relative}: missing title")
        if not parser.has_description:
            errors.append(f"{relative}: missing meta description")
        if parser.img_without_alt:
            errors.append(f"{relative}: image without alt attribute: {', '.join(parser.img_without_alt)}")

        for url, kind in parser.urls:
            total_links += check_url(page, url, kind, errors, cache)

    og = ROOT / "assets" / "img" / "og.png"
    if not og.exists():
        errors.append("assets/img/og.png: missing social preview image")

    print(f"Checked {len(pages)} HTML pages and {total_links} local links.")

    if errors:
        print("\nErrors:")
        for error in errors:
            print(f"  - {error}")
        return 1

    print("No errors.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
