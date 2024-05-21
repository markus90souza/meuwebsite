import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'

import {
  SiAdonisjs,
  SiExpress,
  SiFastify,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export const skills = {
  title: 'Minhas Skills',
  description: 'Um pouco minhas habilidades ',
  skills: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS3',
    },

    {
      icon: <FaJs />,
      name: 'JS',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
    },

    {
      icon: <FaReact />,
      name: 'ReactJS',
    },

    {
      icon: <SiNextdotjs />,
      name: 'NextJS',
    },
    {
      icon: <SiTailwindcss />,
      name: 'TailwindCSS',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
    {
      icon: <FaNodeJs />,
      name: 'NodeJS',
    },
    {
      icon: <SiNestjs />,
      name: 'NestJS',
    },
    {
      icon: <SiExpress />,
      name: 'ExpressJS',
    },
    {
      icon: <SiAdonisjs />,
      name: 'AdonisJS',
    },
    {
      icon: <SiFastify />,
      name: 'Fastify',
    },
  ],
} as const
