type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyanaccent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
