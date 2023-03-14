import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  mysql,
  html,
  css,
  reactjs,
  php,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ccs,
  sonnenhof,
  glaubitz,
  service,
  pitagora,
  ccicampus,
  ifcaad,
  carrent,
  jobit,
  tripguide,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'news',
    title: 'News',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
]

const technologies = [
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
    name: 'PHP',
    icon: php,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Service Civique',
    company_name: 'Service Civique',
    icon: service,
    iconBg: '#383E56',
    date: 'Oct 2014 - July 2015',
    dateColor: '#373737',
    points: [
      'Participation in the Service Civique project as a volunteer.',
      'Accompaniment to a public of disabled people in their daily life within different living groups of the IME of the Sonnenhof Foundation.',
      'Main role : propose and organize various activities throughout the volunteer service.',
      'Develop skills in social support and teamwork.',
    ],
  },
  {
    title: 'Medical and Psychological Assistance',
    company_name: 'Fondation Sonnenhof',
    icon: sonnenhof,
    iconBg: '#E6DEDD',
    date: 'Oct 2015 - April 2018',
    points: [
      'Have practiced this profession after graduation working with several different groups.',
      'Accompany children and adolescents with disabilities in their daily lives.',
      'Assist children and adolescents with various tasks and provide emotional and psychological support.',
      'Write individual personal projects for each of them, respecting the norms and procedures in force.',
    ],
  },
  {
    title: 'Specialized Educator',
    company_name: 'Adèle de Glaubitz',
    icon: glaubitz,
    iconBg: '#383E56',
    date: 'April 2018 - Sept 2021',
    points: [
      'Work with two different groups: a group of 12 children aged 5-12 and a group of 13 teenage girls aged 11-17.',
      'Participate in the daily life of these groups by accompanying them in their academic, social and emotional life.',
      'Setting up personalized projects adapted to the individual needs of the children and teenagers.',
      'Accompaniment for the teenagers in their professional orientation by bringing them an educational and psychological support to help them to build themselves and to project themselves towards their future.',
    ],
  },
  {
    title: 'IT Technical Support',
    company_name: 'CCS',
    icon: ccs,
    iconBg: '#E6DEDD',
    date: 'Sept 2021 - Present',
    points: [
      'Work-study contract within the SAT-Client belonging to the CCS of the Crédit Mutuel Alliance Fédérale group in Strasbourg.',
      'Main role: provide assistance to professional users for their remote banking space.',
      'Ensure the follow-up of remote banking files (classic transfers, confidential transfers, direct debits).',
      'Helping users to navigate their online banking space and ensuring the rapid and secure transmission of their financial data.',
    ],
  },
]

const schools = [
  {
    title: "Bachelor's degree",
    company_name: 'ITES Pitagora',
    icon: pitagora,
    iconBg: '#383E56',
    date: 'Sept 2009 - July 2014',
    points: [
      'Italian language and literature.',
      'English language and literature.',
      'French language and literature.',
      'History.',
      'Mathematics.',
      'Law and Economics.',
      'Information technology for business.',
      'Business Administration.',
      'Political Economy.',
    ],
  },
  {
    title: 'Medical and Psychological Assistance',
    company_name: 'IFCAAD Schiltigheim',
    icon: ifcaad,
    iconBg: '#E6DEDD',
    date: 'October 2015 - May 2017',
    points: [
      'Accompany the person in the essential acts of daily life.',
      'Respect for the person and the rules of hygiene and safety.',
      'Accompaniment in social and relational life.',
      'Positioning as a social worker in the context of intervention.',
      'Work in a multi-professional team, risk management and processing of information related to the support.',
    ],
  },
  {
    title: 'Superior Technical Bachelor',
    company_name: 'CCI Campus Strasbourg',
    icon: ccicampus,
    iconBg: '#383E56',
    date: 'Sept 2021 - Present',
    points: [
      'Expression and communication in English',
      'Mathematics for computer science and applied algorithms',
      'Economic, legal and managerial culture for IT',
      'Software Solutions and Business Applications',
      'Design and develop an application solution',
      'Managing data',
      'Ensure the cybersecurity of an application solution and its development',
      'Analyze connections (logs)',
      'Take security into account in a development project',
      'Programming languages: HTML, CSS, JS, PHP, MYSQL, KOTLIN',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'CCI APPRO',
    description:
      'We have produced a technical documentation explaining all the technical parts concerning the CCI APPRO project of our AP3. This documentation is intended for users who wish to install the project for technical and functional use.',
    tags: [
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'white-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://cdn.vladimir-portfolio.com/shared/images/logo_ccicampus_appro.png',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/cci-campus_doc_utilisateur.pdf',
  },
  {
    name: 'Word Press article',
    description:
      'HTML form with PHP processing in a Word Press article for the BTS SIO 21-23 Blog. During our second year of BTS, we realized articles present in the BTS blog. I realized an article which speaks about an HTML form with a treatment in PHP. I invite you to click the link below',
    tags: [
      {
        name: '',
        color: 'green-text-gradient',
      },
      {
        name: '',
        color: 'white-text-gradient',
      },
      {
        name: '',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://ih1.redbubble.net/image.541875930.4233/st,small,507x507-pad,600x600,f8f8f8.u6.jpg',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'green-text-gradient',
      },
      {
        name: 'supabase',
        color: 'white-text-gradient',
      },
      {
        name: 'css',
        color: 'red-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, schools, testimonials, projects }
