import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-[#0E3746]/90 px-4 text-white shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-6">
        <Link href="#home" className="display-font text-sm font-black text-white sm:text-base">
          MUFTEEM<span className="text-[#BE2623]">.</span>DEV
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/70 transition hover:text-[#EAE8DC]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden items-center gap-1.5 rounded-xl bg-[#BE2623] px-4 py-2 text-sm font-bold text-white sm:inline-flex">Let&apos;s talk <ArrowUpRight className="h-4 w-4" /></a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
