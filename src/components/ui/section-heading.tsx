type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
};

export function SectionHeading({ badge, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-slate-500/25 bg-slate-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-300">
        {badge}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
