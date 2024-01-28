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
      className={`p-1 mx-3 rounded-full hover:scale-110 duration-500 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <MoonStars color='stone-900' size={11} /> : <Sun size={11} />}
    </button>
  );
};