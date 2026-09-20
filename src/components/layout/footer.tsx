export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0E3746] px-5 py-8 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 text-sm text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Muhammad Bello Ibrahim.</p>
        <p>Think Bold, Build Smart.</p>
      </div>
    </footer>
  );
}
