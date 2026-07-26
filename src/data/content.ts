import { ArrowRight, BrainCircuit, Cpu, Microscope, Rocket, Sparkles, Wrench } from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  bullets: string[];
  icon: typeof BrainCircuit;
};

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const heroWords = [
  'Mechatronics Engineer',
  'Robotics Enthusiast',
  'Automation Learner',
  'Embedded Systems Developer',
];

export const technicalSkills = [
  'SolidWorks',
  'Siemens TIA Portal',
  'PLC basics',
  'Arduino',
  'ESP32',
  'ESP8266',
  'ROS 2',
  'MATLAB',
  'Proteus',
  'Eagle PCB',
  'KiCad',
  'RoboGuide',
  'Sensors and Actuators',
  'Pneumatics',
  'Hydraulics',
  'Manufacturing Processes',
];

export const softwareSkills = ['SolidWorks', 'TIA Portal', 'MATLAB', 'Arduino IDE', 'VS Code', 'Proteus', 'KiCad'];

export const educationTimeline = [
  {
    period: '2023–2027',
    title: 'B.E. Mechatronics Engineering',
    institution: 'Kongu Engineering College',
    detail: 'CGPA: 7.61',
  },
  {
    period: 'Higher Secondary',
    title: 'Higher Secondary',
    institution: 'Jaycees Matriculation Higher Secondary School',
    detail: 'Percentage: 73%',
  },
];

export const projects: Project[] = [
  {
    title: 'Steam-Treated Banana Leaf for Sustainable Food Packaging',
    description:
      'Research and analysis project evaluating steam-treated banana leaves as a biodegradable food-packaging material with extensive mechanical and thermal characterisation.',
    technologies: ['Research', 'Material Testing', 'ASTM Standards'],
    category: 'Research',
    bullets: [
      'Evaluated tensile strength and tear resistance',
      'Studied thickness, water absorption, and permeability',
      'Assessed contact angle, thermal behaviour, biodegradability, and shelf-life potential',
    ],
    icon: Microscope,
  },
  {
    title: 'Wireless Home Automation with Overload Protection',
    description:
      'Developed an ESP32-based home-automation system with remote appliance control, current monitoring, cloud connectivity, and overload cutoff.',
    technologies: ['ESP32', 'Firebase', 'IoT'],
    category: 'IoT',
    bullets: [
      'Enabled remote appliance control',
      'Monitored current consumption and overload state',
      'Integrated cloud connectivity for monitoring',
    ],
    icon: Cpu,
  },
  {
    title: 'Four-Axis Serial Robotic Manipulator',
    description:
      'Developed a four-axis robotic manipulator using ESP8266, servo motors, serial commands, and an OLED display.',
    technologies: ['ESP8266', 'Arduino', 'Robotics'],
    category: 'Robotics',
    bullets: [
      'Built a compact serial-command manipulator',
      'Controlled servo motors for motion execution',
      'Used an OLED interface for status display',
    ],
    icon: Rocket,
  },
  {
    title: 'Tunnel Monitoring System',
    description:
      'Developed a tunnel booster-fan monitoring concept for the Smart India Hackathon college-level competition.',
    technologies: ['IoT', 'Monitoring', 'Hackathon'],
    category: 'Automation',
    bullets: [
      'Designed monitoring of tunnel booster fans',
      'Explored sensor-based monitoring concepts',
      'Prepared for college-level Smart India Hackathon evaluation',
    ],
    icon: Wrench,
  },
  {
    title: 'Water Surface Cleaning Bot',
    description:
      'Developed a robotic concept for removing floating waste from water surfaces.',
    technologies: ['Robotics', 'Automation', 'Concept Design'],
    category: 'Robotics',
    bullets: [
      'Proposed a floating waste removal platform',
      'Focused on sustainable surface cleaning',
      'Illustrated a practical self-contained robotic concept',
    ],
    icon: Sparkles,
  },
  {
    title: 'Energy Harvesting Using Piezoelectric Roads',
    description:
      'Developed an energy-harvesting concept using piezoelectric elements to generate electrical energy from vehicle movement and received third prize at an SRM Infotech competition.',
    technologies: ['Piezoelectric', 'Energy', 'Research'],
    category: 'Research',
    bullets: [
      'Translated an energy-harvesting concept into a practical demonstration',
      'Highlighted generation from moving vehicles',
      'Received third prize in the SRM Infotech project competition',
    ],
    icon: BrainCircuit,
  },
  {
    title: 'Climate Chamber for Peat Shelf-Life Study',
    description:
      'Developed a controlled chamber using ESP32, temperature and humidity sensing, heating, cooling, humidification, and load-cell measurement.',
    technologies: ['ESP32', 'Sensors', 'Automation'],
    category: 'Automation',
    bullets: [
      'Implemented environmental control for shelf-life monitoring',
      'Combined sensing and actuation in a compact setup',
      'Used load-cell measurement for controlled testing',
    ],
    icon: Cpu,
  },
];

export const certifications = ['SolidWorks', 'MATLAB', 'PLC Basics', 'Robotics Workshops', 'Autonomous Vehicle Workshop'];

export const achievements = [
  'Third Prize – SRM Infotech Project Competition',
  'Smart India Hackathon College-Level Participant',
  'Presented a paper titled “Automatic Metal Stamping Machine”',
  'Active member of the Robotics Society',
];

export const industrialTraining = {
  company: 'Vinayaga Electro Alloys',
  bullets: [
    'Observed foundry and manufacturing operations',
    'Studied gas-cutting processes',
    'Analysed oxygen and LPG consumption',
    'Learned industrial safety and production workflow',
  ],
};

export const contactDetails = [
  { label: 'Email', value: 'Add your email', href: '#' },
  { label: 'Phone', value: 'Add your phone number', href: '#' },
  { label: 'LinkedIn', value: 'Add your LinkedIn profile', href: '#' },
  { label: 'GitHub', value: 'Add your GitHub profile', href: '#' },
  { label: 'Location', value: 'Add your city or country', href: '#' },
];
