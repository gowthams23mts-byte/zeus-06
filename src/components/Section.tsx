import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 ${className}`.trim()}>
      {children}
    </section>
  );
}
