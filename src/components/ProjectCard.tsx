import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/content';

type ProjectCardProps = {
  project: Project;
  onViewDetails: (project: Project) => void;
};

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="group flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.08)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/70"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-2xl bg-cyanaccent/10 p-3 text-cyanaccent">
          <Icon className="h-6 w-6" />
        </div>
        <span className="rounded-full border border-cyanaccent/30 bg-cyanaccent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyanaccent">
          {project.category}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onViewDetails(project)}
        className="mt-8 inline-flex items-center gap-2 self-start rounded-full border border-cyanaccent/40 bg-cyanaccent/10 px-4 py-2 text-sm font-semibold text-cyanaccent transition hover:bg-cyanaccent hover:text-slate-950"
      >
        View Details <ArrowRight className="h-4 w-4" />
      </button>
    </motion.article>
  );
}
