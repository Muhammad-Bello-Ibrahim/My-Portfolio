"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) {
    return <div className="h-10 w-10 rounded-full border border-slate-500/20" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="interactive h-10 w-10 rounded-full border border-slate-500/25 bg-white/80 text-sm backdrop-blur dark:bg-slate-900/80"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color mode"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
