import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-slate-950/60">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-sm font-bold tracking-[0.2em] text-slate-900 dark:text-white">
          MUFTEEM DEV
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
