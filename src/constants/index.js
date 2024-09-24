import {
  frontend,
  backend,
  ux,
  database,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  java,
  csharp,
  angular,
  vscode,
  eclipse,
  oracle,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Overview',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Functional and Technical analysis',
    icon: ux,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Database management',
    icon: database,
  },
];

const technologies = [
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'VS Code',
    icon: vscode,
  },
  {
    name: 'Eclipse',
    icon: eclipse,
  },
  {
    name: 'Oracle',
    icon: oracle,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Fullstack Developer',
    company_name: 'Care and Support for Dependency and Promotion of Personal Autonomy Foundation of the Balearic Islands',
    icon: java,
    iconBg: '#333333',
    date: '2010 - Present',
  },
  {
    title: 'HD internship agreement',
    company_name: 'Bizzit',
    icon: frontend,
    iconBg: '#333333',
    date: '2010',
  },
];
export { services, technologies, experiences };
