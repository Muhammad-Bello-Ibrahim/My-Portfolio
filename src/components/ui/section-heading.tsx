type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
};

export function SectionHeading({ badge, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <span className="eyebrow inline-flex rounded-full border border-current/15 px-3 py-1.5 text-[#ff5c35]">
        {badge}
      </span>
      <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#130a18] dark:text-white sm:text-6xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-lg text-black/60 dark:text-white/60">{description}</p> : null}
    </div>
  );
}
