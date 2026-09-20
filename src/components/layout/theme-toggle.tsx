"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) {
    return <div className="h-10 w-10 rounded-full border border-slate-500/20" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="interactive grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color mode"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
