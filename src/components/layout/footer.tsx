export function Footer() {
  return (
    <footer className="border-t border-slate-500/20 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <p>© {new Date().getFullYear()} Muhammad Bello Ibrahim.</p>
        <p>Think Bold, Build Smart.</p>
      </div>
    </footer>
  );
}
