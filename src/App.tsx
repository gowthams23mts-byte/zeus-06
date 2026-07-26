import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Github,
  Mail,
  Menu,
  Moon,
  Phone,
  Pin,
  Sparkles,
  Sun,
  Trophy,
  X,
  Linkedin,
  BookOpen,
  Cpu,
  Wrench,
} from 'lucide-react';
import { Section } from './components/Section';
import { SectionHeading } from './components/SectionHeading';
import { ProjectCard } from './components/ProjectCard';
import {
  achievements,
  certifications,
  contactDetails,
  educationTimeline,
  heroWords,
  industrialTraining,
  navigation,
  projects,
  softwareSkills,
  technicalSkills,
} from './data/content';
import type { Project } from './data/content';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      setShowBackToTop(scrollTop > 400);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentWord = heroWords[wordIndex];
    const typeSpeed = isDeleting ? 60 : 110;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.slice(0, typedText.length + 1));
        if (typedText === currentWord) {
          window.setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setTypedText(currentWord.slice(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % heroWords.length);
        }
      }
    }, typeSpeed);

    return () => window.clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyanaccent/40 border-t-cyanaccent" />
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Preparing portfolio</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_30%),linear-gradient(135deg,_#07111f,_#0f172a)] text-slate-900 transition-colors duration-300 dark:text-slate-100">
      <div className="fixed inset-x-0 top-0 z-40 h-1.5 bg-slate-200/60 dark:bg-slate-800/60">
        <div className="h-full rounded-full bg-cyanaccent" style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.25em] text-white">
            GOWTHAM S.
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-cyanaccent">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition hover:border-cyanaccent/50 hover:text-cyanaccent"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition hover:border-cyanaccent/50 hover:text-cyanaccent lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden"
            >
              <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-2xl px-3 py-2 transition hover:bg-white/10 hover:text-cyanaccent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="home" className="overflow-hidden">
        <Section id="home" className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyanaccent/30 bg-cyanaccent/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-cyanaccent">
                <Sparkles className="h-4 w-4" /> Final-Year B.E. Mechatronics Engineering Student
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
                Hi, I’m <span className="text-cyanaccent">Gowtham S.</span>
              </h1>
              <div className="mt-5 min-h-[2.2rem] text-xl font-medium text-slate-300 sm:text-2xl">
                <span className="mr-2">{typedText}</span>
                <span className="text-cyanaccent">|</span>
              </div>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Passionate about robotics, industrial automation, PLC programming, embedded systems, automotive engineering, PCB design, home automation, and sustainable engineering. I enjoy solving engineering problems through practical, forward-thinking hardware and software solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-cyanaccent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyanaccent hover:text-cyanaccent"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-cyanaccent hover:text-cyanaccent"
                >
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-glow backdrop-blur-2xl"
            >
              <div className="rounded-[1.5rem] border border-cyanaccent/20 bg-slate-950/70 p-6">
                <div className="mb-6 flex items-center gap-3 text-cyanaccent">
                  <BrainCircuit className="h-8 w-8" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Portfolio Snapshot</p>
                    <h2 className="text-2xl font-semibold text-white">Engineering curiosity, applied</h2>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['Robotics', 'PLC & Automation'],
                    ['Embedded Systems', 'PCB Design'],
                    ['Sustainable Engineering', 'Research & Prototyping'],
                    ['Home Automation', 'IoT'],
                  ].map(([title, detail]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-sm font-semibold text-cyanaccent">{title}</p>
                      <p className="mt-2 text-sm text-slate-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        <Section id="about" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <SectionHeading
                  eyebrow="About"
                  title="A practical engineer with a strong interest in intelligent systems"
                  description="I’m currently pursuing a B.E. in Mechatronics Engineering at Kongu Engineering College and enjoy turning ideas into functional engineering solutions through robotics, automation, and embedded systems."
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {[
                  ['Education', 'Final-Year B.E. Mechatronics Engineering'],
                  ['College', 'Kongu Engineering College'],
                  ['Academic Period', '2023–2027'],
                  ['Interests', 'Robotics, PLC, Embedded Systems, Automation, Sustainable Engineering'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">{label}</p>
                    <p className="mt-3 text-base text-slate-200">{value}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </Section>

        <Section id="education" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Education"
              title="Academic foundation and continuous learning"
              description="My education combines strong engineering fundamentals, practical project exposure, and a growing interest in automation and intelligent systems."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3 text-cyanaccent">
                    <GraduationCap className="h-6 w-6" />
                    <span className="text-sm font-semibold uppercase tracking-[0.3em]">{item.period}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-lg text-slate-300">{item.institution}</p>
                  <p className="mt-4 text-base leading-7 text-slate-400">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Technical Skills"
              title="Building capability across design, automation, and control"
              description="The portfolio reflects a strong foundation in CAD, PLC programming, embedded development, simulation, and industrial processes."
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 text-cyanaccent">
                  <Cpu className="h-6 w-6" />
                  <h3 className="text-2xl font-semibold text-white">Core technical stack</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {technicalSkills.map((skill) => (
                    <span key={skill} className="rounded-full border border-cyanaccent/20 bg-cyanaccent/10 px-4 py-2 text-sm font-medium text-cyanaccent">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 text-cyanaccent">
                  <Code2 className="h-6 w-6" />
                  <h3 className="text-2xl font-semibold text-white">Software and tools</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {softwareSkills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/15 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        <Section id="projects" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Projects"
              title="A portfolio of applied engineering concepts"
              description="Each project reflects curiosity, design thinking, and a practical approach to building intelligent systems."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeFilter === category ? 'bg-cyanaccent text-slate-950' : 'border border-white/10 bg-white/10 text-slate-200 hover:border-cyanaccent hover:text-cyanaccent'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProjectCard project={project} onViewDetails={setSelectedProject} />
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl sm:p-10">
            <SectionHeading
              eyebrow="Industrial Training"
              title="Hands-on exposure to manufacturing and production systems"
              description="The industrial training experience helped me connect classroom concepts with real-world plant workflows and operational discipline."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 rounded-[2rem] border border-cyanaccent/20 bg-slate-950/80 p-8"
            >
              <div className="flex items-center gap-3 text-cyanaccent">
                <BriefcaseBusiness className="h-6 w-6" />
                <h3 className="text-2xl font-semibold text-white">{industrialTraining.company}</h3>
              </div>
              <ul className="mt-6 space-y-4 text-slate-300">
                {industrialTraining.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyanaccent" />
                    <span className="leading-7">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>

        <Section id="achievements" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Achievements"
              title="Recognition that reflects curiosity, effort, and participation"
              description="These experiences reflect both technical engagement and a willingness to contribute beyond the classroom."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3 text-cyanaccent">
                    <Trophy className="h-6 w-6" />
                    <h3 className="text-xl font-semibold text-white">Achievement {index + 1}</h3>
                  </div>
                  <p className="mt-4 text-lg leading-8 text-slate-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="certifications" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl sm:p-10">
            <SectionHeading
              eyebrow="Certifications"
              title="Short-form credentials and learning milestones"
              description="These certifications and workshop experiences highlight a consistent effort to build practical engineering skills."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span key={cert} className="rounded-full border border-cyanaccent/20 bg-cyanaccent/10 px-4 py-2 text-sm font-medium text-cyanaccent">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section id="resume" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl sm:p-10">
            <SectionHeading
              eyebrow="Resume"
              title="Downloadable profile and resume preview"
              description="The resume is available for download directly from the portfolio and can also be previewed below."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyanaccent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-cyanaccent hover:text-cyanaccent"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80">
              <iframe src="/resume.pdf" title="Resume Preview" className="h-[70vh] w-full" />
            </div>
          </div>
        </Section>

        <Section id="contact" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl"
            >
              <SectionHeading
                eyebrow="Contact"
                title="Let’s connect"
                description="Use the contact details below or send a message with your inquiry. Replace the placeholders to add your real contact links and profile information."
              />
              <div className="mt-8 space-y-4">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => event.preventDefault()}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-left transition hover:border-cyanaccent/40 hover:text-cyanaccent"
                  >
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">{item.label}</p>
                      <p className="mt-1 text-base text-slate-200">{item.value}</p>
                    </div>
                    <span className="text-cyanaccent">
                      {item.label === 'Email' ? <Mail className="h-5 w-5" /> : null}
                      {item.label === 'Phone' ? <Phone className="h-5 w-5" /> : null}
                      {item.label === 'LinkedIn' ? <Linkedin className="h-5 w-5" /> : null}
                      {item.label === 'GitHub' ? <Github className="h-5 w-5" /> : null}
                      {item.label === 'Location' ? <Pin className="h-5 w-5" /> : null}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-glow backdrop-blur-xl"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-200">
                  Name
                  <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-0 focus:border-cyanaccent" placeholder="Your name" />
                </label>
                <label className="text-sm font-medium text-slate-200">
                  Email
                  <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-0 focus:border-cyanaccent" placeholder="Your email" />
                </label>
              </div>
              <label className="mt-5 block text-sm font-medium text-slate-200">
                Subject
                <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-0 focus:border-cyanaccent" placeholder="Project discussion" />
              </label>
              <label className="mt-5 block text-sm font-medium text-slate-200">
                Message
                <textarea className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none ring-0 focus:border-cyanaccent" placeholder="Share a short message" />
              </label>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyanaccent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </motion.form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Designed and Developed by Gowtham S.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#home" className="transition hover:text-cyanaccent">Home</a>
            <a href="#projects" className="transition hover:text-cyanaccent">Projects</a>
            <a href="#contact" className="transition hover:text-cyanaccent">Contact</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 rounded-full bg-cyanaccent p-3 text-slate-950 shadow-glow transition hover:scale-105"
            aria-label="Back to top"
          >
            <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
