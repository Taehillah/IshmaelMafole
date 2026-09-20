"use client";

import { useEffect, useRef, useState } from "react";

type ThemeMode = "dark" | "light";

const STORAGE_KEY = "theme-mode";
const THEME_CHANGE_EVENT = "theme-mode-change";

const getPreferredTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: ThemeMode, animate = true) => {
  const root = document.documentElement;

  if (animate) {
    root.classList.add("theme-transition");
  }

  root.dataset.theme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);

  if (animate) {
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 400);
  }
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(getPreferredTheme);
  const hasAppliedInitialTheme = useRef(false);

  useEffect(() => {
    applyTheme(theme, hasAppliedInitialTheme.current);
    hasAppliedInitialTheme.current = true;
  }, [theme]);

  useEffect(() => {
    const handleStoredThemeChange = () => {
      setTheme(getPreferredTheme());
    };

    window.addEventListener("storage", handleStoredThemeChange);
    window.addEventListener(THEME_CHANGE_EVENT, handleStoredThemeChange);

    return () => {
      window.removeEventListener("storage", handleStoredThemeChange);
      window.removeEventListener(THEME_CHANGE_EVENT, handleStoredThemeChange);
    };
  }, []);

  const isDark = theme === "dark";
  const nextThemeLabel = isDark ? "light" : "dark";
  const handleThemeChange = () => {
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleThemeChange}
      aria-label={`Switch to ${nextThemeLabel} mode`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? (
          <svg viewBox="0 0 24 24" role="img">
            <path
              d="M21.75 15.19A9.09 9.09 0 0 1 8.81 2.25a9.11 9.11 0 1 0 12.94 12.94Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" role="img">
            <path
              d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0-5.2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm9-8a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2ZM5 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm13.66-6.66a1 1 0 0 1 1.42 0l1.42 1.42a1 1 0 1 1-1.42 1.42l-1.42-1.42a1 1 0 0 1 0-1.42Zm-14.14 12.72a1 1 0 0 1 1.42 0l1.42 1.42a1 1 0 1 1-1.42 1.42l-1.42-1.42a1 1 0 0 1 0-1.42Zm14.14 1.42a1 1 0 0 1 0-1.42l1.42-1.42a1 1 0 1 1 1.42 1.42l-1.42 1.42a1 1 0 0 1-1.42 0Zm-14.14-14.14a1 1 0 0 1 0-1.42l1.42-1.42a1 1 0 0 1 1.42 1.42L5.94 5.34a1 1 0 0 1-1.42 0Z"
              fill="currentColor"
            />
          </svg>
        )}
      </span>
      <span className="theme-toggle__label">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
