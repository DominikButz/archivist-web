"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonStars, Sun } from "react-bootstrap-icons";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className={`p-2 mx-4 rounded-full hover:scale-110 active:scale-100 duration-500 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <MoonStars color='stone-900' size={12} /> : <Sun size={12} />}
    </button>
  );
};