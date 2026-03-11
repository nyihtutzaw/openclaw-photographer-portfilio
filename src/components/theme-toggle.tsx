"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey);
    const nextTheme: Theme = savedTheme === "dark" ? "dark" : "light";

    setTheme(nextTheme);
    applyTheme(nextTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition hover:border-stone-950 hover:text-stone-950 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-stone-300 dark:hover:text-white"
    >
      {mounted ? (theme === "light" ? "🌙 Dark mode" : "☀️ Light mode") : "Theme"}
    </button>
  );
}
