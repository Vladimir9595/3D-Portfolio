import {
  javascript,
  mysql,
  html,
  css,
  docker,
  figma,
  git,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  php,
  android,
  bash,
  bootstrap,
  insomnia,
  laravel,
  linux,
  photoshop,
  python,
  sass,
  virtualbox,
  vmware,
  windows,
  office365,
  ccs,
  sonnenhof,
  glaubitz,
  service,
  pitagora,
  ccicampus,
  ifcaad,
} from '../assets'

export const navLinks = [
  {
    id: 'technologies',
    external: true,
    title: 'Techs',
  },
  {
    id: 'projects',
    external: true,
    title: 'Projects',
  },
  {
    id: 'news',
    external: true,
    title: 'News',
  },
  {
    id: 'contact',
    external: false,
    title: 'Contact',
  },
]

export const footLinks = [
  {
    id: 'mentions',
    external: true,
    title: 'Legal Mentions',
  },
]

const programming = [
  //   {
  //     name: 'HTML 5',
  //     icon: html,
  //   },
  //   {
  //     name: 'CSS 3',
  //     icon: css,
  //   },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Python',
    icon: python,
  },
  //   {
  //     name: 'Android',
  //     icon: android,
  //   },
]

const framework = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  //   {
  //     name: 'Bootstrap',
  //     icon: bootstrap,
  //   },
  //   {
  //     name: 'Sass',
  //     icon: sass,
  //   },
]

const back = [
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
]

const devops = [
  //   {
  //     name: 'Linux',
  //     icon: linux,
  //   },
  //   {
  //     name: 'Windows',
  //     icon: windows,
  //   },
  //   {
  //     name: 'Bash',
  //     icon: bash,
  //   },
  //   {
  //     name: 'Docker',
  //     icon: docker,
  //   },
  //   {
  //     name: 'VirtualBox',
  //     icon: virtualbox,
  //   },
  //   {
  //     name: 'VMWare',
  //     icon: vmware,
  //   },
]

const softwares = [
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Git',
    icon: git,
  },
  //   {
  //     name: 'Photoshop',
  //     icon: photoshop,
  //   },
  {
    name: 'Insomnia',
    icon: insomnia,
  },
  //   {
  //     name: 'Office365',
  //     icon: office365,
  //   },
]

const mentions = [
  {
    title: 'Editor and owner of the website',
    content:
      'Mr. Vladimir SACCHETTO\n Editorial manager : Vladimir SACCHETTO\n Email : vladisac@hotmail.it\n Website : www.vladimir-portfolio.com',
  },
  {
    title: 'Hosting',
    content:
      'Host : SAS OVH\n 2 rue Kellermann\n BP 80157, 59100 Roubaix\n Website: www.ovh.com\n Telephone: +33 (0) 899 701 761 (1.349 € incl. tax per call, and 0.337 € incl. tax/min)\n Fax : + 33 (0) 3 20 20 09 58',
  },
  {
    title: 'Terms and conditions of use',
    content:
      'This site www.vladimir-portfolio.com is proposed in different web languages (ReactJs - ThreeJs - TailwindCSS). For a better comfort of use and a more pleasant graphics, it is recommended to use modern browsers such as Microsoft Edge, Safari, Firefox, Google Chrome, Brave, etc...\n Mr. Vladimir SACCHETTO uses all the means at his disposal to ensure reliable information and a reliable update of his website. However, errors or omissions may occur. Mr. Vladimir SACCHETTO is in no way responsible for the use made of this information, and for any direct or indirect damage that may result from it.',
  },
  {
    title: 'Intellectual Property Rights',
    content:
      'All the content of this site, including texts, animations, logos and icons, as well as their layout, are the exclusive property of Mr. Vladimir SACCHETTO. Any reproduction, distribution, modification, adaptation, retransmission or publication, even partial, of these different elements is strictly forbidden without the express written consent of Mr. Vladimir SACCHETTO.\n This representation or reproduction, by any means whatsoever, constitutes an infringement punishable by articles L.335-2 and following of the Intellectual Property Code.\n Failure to comply with this prohibition constitutes an infringement that may incur the civil and criminal liability of the infringer. In addition, the owners of the copied contents could take legal action against you.',
  },
  {
    title: 'Disputes',
    content:
      'The present conditions of the site are governed by the French laws and any dispute or litigation which could arise from the interpretation or the execution of these will be of the exclusive competence of the courts. The reference language for the settlement of any disputes is French.',
  },
  {
    title: 'Personal information',
    content:
      'In general, you are not required to provide us with your personal data when you visit the www.vladimir-portfolio.com website.\n You can refuse to provide your personal data. In this case, you will not be able to use the services of the site, in particular that of requesting information.\n We may automatically collect certain information about you when you simply browse this website, including: information about your use of the site, such as the areas you visit and the services you access, your IP address, your browser type, your access times.\n Such information is used exclusively for internal statistical purposes. The databases are protected by the provisions of the law of July 1, 1998 transposing the directive 96/9 of March 11, 1996 on the legal protection of databases.',
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

const schoolProjects = [
  {
    name: 'CCI Restiloc - Technical Documentation',
    description:
      'I have produced a technical documentation explaining all the technical parts concerning the CCI Restiloc project of our AP4. This documentation is intended for users who wish to install the project for technical and functional use.',
    tags: [
      {
        name: 'kotlin',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'white-text-gradient',
      },
      {
        name: 'laravel',
        color: 'red-text-gradient',
      },
    ],
    image: 'https://cdn.vladimir-portfolio.com/shared/images/restiloc_logo.png',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/cci-restiloc_doc_technique.pdf',
    project_code_link: 'https://github.com/Restiloc',
  },
  {
    name: 'CCI Restiloc - User Documentation',
    description:
      'I have created a user documentation explaining all the functionalities of the CCI Restiloc platform of our AP4. This documentation is intended for users who wish to interact with the web application.',
    tags: [
      {
        name: 'kotlin',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'white-text-gradient',
      },
      {
        name: 'laravel',
        color: 'red-text-gradient',
      },
    ],
    image: 'https://cdn.vladimir-portfolio.com/shared/images/restiloc_logo.png',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/cci-restiloc_doc_utilisateur.pdf',
    project_code_link: 'https://github.com/Restiloc',
  },
  {
    name: 'CCI APPRO - Technical Documentation',
    description:
      'I have produced a technical documentation explaining all the technical parts concerning the CCI APPRO project of our AP3. This documentation is intended for users who wish to install the project for technical and functional use.',
    tags: [
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'white-text-gradient',
      },
      {
        name: 'laravel',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://cdn.vladimir-portfolio.com/shared/images/logo_ccicampus_appro.png',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/cci-campus_doc_technique.pdf',
    project_code_link: 'https://github.com/CCI-Campus',
  },
  {
    name: 'CCI APPRO - User Documentation',
    description:
      'I have created a user documentation explaining all the functionalities of the CCI APPRO platform of our AP3. This documentation is intended for users who wish to interact with the web application.',
    tags: [
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'white-text-gradient',
      },
      {
        name: 'laravel',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://cdn.vladimir-portfolio.com/shared/images/logo_ccicampus_appro.png',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/cci-campus_doc_utilisateur.pdf',
    project_code_link: 'https://github.com/CCI-Campus',
  },
  {
    name: 'Word Press article',
    description:
      'HTML form with PHP processing in a Word Press article for the BTS SIO 21-23 Blog. During our second year of BTS, we realized articles present in the BTS blog. I realized an article which speaks about an HTML form with a treatment in PHP. I invite you to click the link below',
    tags: [
      {
        name: 'wordpress',
        color: 'green-text-gradient',
      },
      {
        name: 'seo',
        color: 'white-text-gradient',
      },
      {
        name: 'blog',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://ih1.redbubble.net/image.541875930.4233/st,small,507x507-pad,600x600,f8f8f8.u6.jpg',
    source_code_link:
      'https://btssio-ccicampus-strasbourg.fr/formulaire_html_et_traitement_en_php/',
    project_code_link:
      'https://btssio-ccicampus-strasbourg.fr/formulaire_html_et_traitement_en_php/',
  },
  {
    name: 'Word Press article',
    description:
      'We have made articles in the WordPress web page of our SIO 21 class. Here I show the article that I personally created. This article is about a general introduction to HTML and CSS programming languages. I invite you to click on the link in order to see my article as well as the website of my class. Have a nice reading.',
    tags: [
      {
        name: 'wordpress',
        color: 'green-text-gradient',
      },
      {
        name: 'seo',
        color: 'white-text-gradient',
      },
      {
        name: 'blog',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://btssio-ccicampus-strasbourg.fr/wp-content/uploads/2022/04/HTML5.png',
    source_code_link:
      'https://btssio-ccicampus-strasbourg.fr/quest-ce-que-le-bts-sio/',
    project_code_link:
      'https://btssio-ccicampus-strasbourg.fr/quest-ce-que-le-bts-sio/',
  },
  {
    name: 'Business Continuity Plan',
    description:
      'This work consisted in the realization of a situation around the BCP (Business Continuity Plan). Under the responsibility of the system and network administrator, I have to participate in the design, installation, parameter setting and exploitation of the information system of the company.',
    tags: [
      {
        name: 'work',
        color: 'green-text-gradient',
      },
      {
        name: 'redaction',
        color: 'white-text-gradient',
      },
      {
        name: 'plan',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://www.wysiwyg.fr/wp-content/uploads/2021/12/F36-1-768x535.png',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/SACCHETTO_Vladimir_TP_Solution_PCA.pdf',
    project_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/SACCHETTO_Vladimir_TP_Solution_PCA.pdf',
  },
  {
    name: 'BCP & DRP',
    description:
      'This work consisted in the realization of a research work around the main concepts of a BCP (Business Continuity Plan) and DRP (Disaster Recovery Plan). To organize and realize this research work, I relied on the 5W method (Who - What - Where - When - Why). This was done in order to understand the meaning and the differences between a BCP and a DRP.',
    tags: [
      {
        name: 'work',
        color: 'green-text-gradient',
      },
      {
        name: 'redaction',
        color: 'white-text-gradient',
      },
      {
        name: 'plan',
        color: 'red-text-gradient',
      },
    ],
    image: 'https://myosotis.fr/wp-content/uploads/2017/04/pca-pra-1.png',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/SACCHETTO_Vladimir_TP_Solutions_PCA_PRA.pdf',
    project_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/SACCHETTO_Vladimir_TP_Solutions_PCA_PRA.pdf',
  },
  {
    name: 'Firewall Pf_Sense',
    description:
      'During my first year of BTS, I acquired skills in installing and configuring the Pf_Sense open source firewall. As part of a personal assignment during the cybersecurity course, we redirected a Windows Server virtual machine to the IP address range configured in the Pf_Sense server. A documentation summarizing this experiment is available.',
    tags: [
      {
        name: 'work',
        color: 'green-text-gradient',
      },
      {
        name: 'firewall',
        color: 'white-text-gradient',
      },
      {
        name: 'server',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://adeo-informatique.fr/wp-content/uploads/2018/11/pfSense-logo_ok.png',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/SACCHETTO_Vladimir_TP_PF_Sense.pdf',
    project_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/SACCHETTO_Vladimir_TP_PF_Sense.pdf',
  },
  {
    name: 'Laravel Portfolio',
    description:
      'During my both years of BTS, I made my first version portfolio. This portfolio was made with Laravel framework. I used the Laravel framework to make the back-end and the Scss framework to make the front-end. I also used the Tailwind CSS framework to make some the design of the website. I invite you to click on the link in order to see my portfolio. Have a nice reading.',
    tags: [
      {
        name: 'portfolio',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'white-text-gradient',
      },
      {
        name: 'laravel',
        color: 'red-text-gradient',
      },
    ],
    image: 'https://cdn.vladimir-portfolio.com/shared/images/laravel_logo.png',
    source_code_link:
      'https://github.com/Vladimir9595/CCI-SIO21-Portfolio/blob/main/README.md',
    project_code_link: 'https://github.com/Vladimir9595/CCI-SIO21-Portfolio',
  },
]

const workProjects = [
  {
    name: 'Remote Banking',
    description:
      'Remote Banking Technical Assistance (RBA) is a technical assistance service offered by banks to help their customers solve problems related to the use of their online banking services, such as payment transactions, fund transfers and account inquiries.',
    tags: [
      {
        name: 'work',
        color: 'green-text-gradient',
      },
      {
        name: 'BAD',
        color: 'white-text-gradient',
      },
      {
        name: 'bank',
        color: 'red-text-gradient',
      },
    ],
    image: 'https://cdn.vladimir-portfolio.com/shared/images/CM_CIC.jpg',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/Assistance technique pour la Banque à distance (BAD).pdf',
    project_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/Assistance technique pour la Banque à distance (BAD).pdf',
  },
  {
    name: 'Software solution HBS',
    description:
      'The Help and Accompaniment in the HBS software solution aims at offering a technical and operational support to the users of this software. The professionals in charge of this assistance must be able to solve the problems related to the functioning of the software, as well as to bring advice and tips to optimize its use.',
    tags: [
      {
        name: 'work',
        color: 'green-text-gradient',
      },
      {
        name: 'HBS',
        color: 'white-text-gradient',
      },
      {
        name: 'logiciel',
        color: 'red-text-gradient',
      },
    ],
    image: 'https://i.ytimg.com/vi/-5MWtSwYZK0/maxresdefault.jpg',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/Aide et accompagnement dans la solution logicielle HBS.pdf',
    project_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/Aide et accompagnement dans la solution logicielle HBS.pdf',
  },
  {
    name: 'Professional interview',
    description:
      'Carried out in the company. The individual professional interview is an annual meeting where an employee meets his or her manager to discuss his or her achievements, acquired skills, aspirations and career development prospects. The goal is to define a personalized action plan for the coming year.',
    tags: [
      {
        name: 'work',
        color: 'green-text-gradient',
      },
      {
        name: 'meeting',
        color: 'white-text-gradient',
      },
      {
        name: 'individual',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYRS-wpAG0tfAlhQSBlvVfmmSntuWoQ7TUg&usqp=CAU',
    source_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/Entretien professionnel individuel.pdf',
    project_code_link:
      'https://cdn.vladimir-portfolio.com/shared/pdf/Entretien professionnel individuel.pdf',
  },
]

const personalProjects = [
  {
    name: 'Portfolio 3D',
    description:
      'My 3D portfolio project is a realization with Reactjs and Threejs. It presents my skills in web development by offering an immersive and interactive user experience. The project allows visitors to navigate in a 3D environment and discover my professional and personal projects in the form of 3D models.',
    tags: [
      {
        name: 'reactjs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'white-text-gradient',
      },
      {
        name: 'threejs',
        color: 'red-text-gradient',
      },
    ],
    image:
      'https://images.takeshape.io/4d46e476-8704-42c4-8d0d-06ebdd0e3c93/dev/dc827c73-0d21-4602-baaf-7f2ee4ec60f0/ThreeJS%20%2B%20React2.png?auto=compress%2Cformat',
    source_code_link:
      'https://github.com/Vladimir9595/3D-Portfolio/blob/main/README.md',
    project_code_link: 'https://github.com/Vladimir9595/3D-Portfolio',
  },
  {
    name: 'CDN',
    description:
      'The CDN (Content Delivery Network) project consists of setting up a content delivery network infrastructure. The objective is to optimize the performance of web content delivery by distributing files to several servers located in different geographical areas. Users can thus access content quickly.',
    tags: [
      {
        name: 'cdn',
        color: 'green-text-gradient',
      },
      {
        name: 'php',
        color: 'white-text-gradient',
      },
      {
        name: 'documentation',
        color: 'red-text-gradient',
      },
    ],
    image: 'https://cdn.vladimir-portfolio.com/shared/images/logo_cdn.png',
    source_code_link: 'https://github.com/Vladimir9595/CDN/blob/main/README.md',
    project_code_link: 'https://github.com/Vladimir9595/CDN',
  },
]

const news = [
  {
    name: 'Laravel Eloquent ORM',
    description:
      'The Eloquent ORM included with Laravel provides a beautiful, simple ActiveRecord implementation for working with your database. Each database table has a corresponding "Model" which is used to interact with that table.',
    image:
      'https://grafikart.fr/uploads/attachments/2023/laravel-eloquent-6426f92444ea0127887452.jpg',
    source_link: 'https://stitcher.io/blog/eloquent-mysql-views',
    published_at: 'Aug 27, 2018',
    read: 'Read more...',
  },
  {
    name: 'How to use GitHub',
    description:
      'GitHub is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management.',
    image:
      'https://www.lebigdata.fr/wp-content/uploads/2021/03/DataLab_-_Chapitre_0_-_Fabriquer_sa_station_de_mesure_connect_e_github-logo-640x320-1.png',
    source_link: 'https://www.lebigdata.fr/github-tout-savoir',
    published_at: 'Mar 9, 2022',
    read: 'Read more...',
  },
  {
    name: 'Rsync documentation',
    description:
      'Rsync (for remote synchronization) is a file synchronization software. It is frequently used to set up remote backup systems or system restore points',
    image: 'https://unihost.com/help/wp-content/uploads/using-rsync-linux.jpg',
    source_link: 'https://doc.ubuntu-fr.org/rsync',
    published_at: 'Fev 20, 2023',
    read: 'Read more...',
  },
  {
    name: 'Preferences Visual Studio Code',
    description:
      'In this tutorial, Grafikart proposes to discover its configuration on Visual Studio Code. It edits in particular the settings.json file to customize the interface and the features of the editor.',
    image: 'https://biolibre.fr/images/articles/visual_studio_code.jpeg',
    source_link: 'https://grafikart.fr/tutoriels/vscode-settings-2096',
    published_at: 'Nov, 2022',
    read: 'Read more...',
  },
  {
    name: 'PHP Object Oriented Programming',
    description:
      'In this article, we will learn how to program in PHP in an object-oriented way. We will see the concepts of classes, objects, inheritance, interfaces, abstract classes, etc.',
    image:
      'https://blog.nicolashachet.com/wp-content/uploads/2013/02/Php-POO.jpg',
    source_link: 'https://www.bgmp.fr/la-programmation-orientee-objet-en-php/',
    published_at: 'Jul 8, 2020',
    read: 'Read more...',
  },
  {
    name: 'Setting up a CRUD',
    description:
      'In this article, we will learn how to setting up a CRUD. CRUD is a computer acronym related to the operation of stored data. It encompasses four basic operations : Create, Read, Update and Delete.',
    image:
      'https://i0.wp.com/datascientest.com/wp-content/uploads/2022/10/CRUD.png?fit=800%2C439&ssl=1',
    source_link:
      'https://appmaster.io/fr/blog/operations-de-crud-quest-ce-que-le-crud',
    published_at: 'Mar 21, 2023',
    read: 'Read more...',
  },
  {
    name: 'SSL certificate',
    description:
      'An SSL certificate is a data file that links a cryptographic key to an organisation\'s information. The certificate activates the padlock and the "https" protocol to ensure a secure connection between the web server and the browser.',
    image: 'https://www.znetlive.com/blog/wp-content/uploads/2019/01/SSL.png',
    source_link:
      'https://www.verisign.com/en_US/website-presence/online/ssl-certificates/index.xhtml',
    published_at: 'Feb 17, 2021',
    read: 'Read more...',
  },
  {
    name: 'What is a Firewall',
    description:
      'A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.',
    image:
      'https://static.vecteezy.com/ti/vettori-gratis/p3/600578-icona-del-firewall-di-rete-illustrazione-su-sfondo-bianco-vettoriale.jpg',
    source_link:
      'https://www.axis-solutions.fr/quest-ce-quun-pare-feu-et-quel-est-son-role/',
    published_at: 'Aug 19, 2022',
    read: 'Read more...',
  },
  {
    name: 'DNS (Domain Name System)',
    description:
      'A DNS (Domain Name System) is a service that translates domain names into IP addresses. It is a hierarchical, distributed database that stores information associated with domain names in a network.',
    image:
      'https://img-0.journaldunet.com/JWF_xPKNOuVujcIak_mazUDk8Ns=/540x/smart/f5abd03528314fea91c760664a8783e6/ccmcms-jdn/39476110.jpg',
    source_link: 'https://www.cloudflare.com/fr-fr/learning/dns/what-is-dns/',
    published_at: 'Feb 01, 2023',
    read: 'Read more...',
  },
  {
    name: 'Vite.js Tutorial',
    description:
      'Vite.js is a fast development tool for modern web projects. It focuses on speed and performance by improving the development experience.',
    image:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/getting-started-with-vite.png',
    source_link: 'https://www.freecodecamp.org/news/get-started-with-vite/',
    published_at: 'Avr 6, 2022',
    read: 'Read more...',
  },
  {
    name: 'React.js Routing',
    description:
      'The article I checked out on React.js Routing is a handy resource for understanding the basics of setting up routes in a web application with React.js. It discusses the different routing methods and their respective benefits.',
    image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--_cPqsQW---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kzhqskruy0lrpso8vaoj.png',
    source_link:
      'https://reactrouter.com/en/main/routers/create-browser-router',
    published_at: 'Sep 8, 2022',
    read: 'Read more...',
  },
  {
    name: 'Install React in Laravel 9 with Vite',
    description:
      'In this article, we will learn how to install React js 3 in laravel 9.19 with vite. This article shows how to install React in laravel 9. You will be able to create a React and Laravel 9.19 application powered by vite.',
    image:
      'https://dm86im8vci8bx.cloudfront.net/blog/banner/30261657708842.jpg',
    source_link:
      'https://techvblogs.com/blog/how-to-install-react-in-laravel-9-with-vite',
    published_at: 'Sep, 2022',
    read: 'Read more...',
  },
]

export {
  programming,
  framework,
  back,
  devops,
  softwares,
  experiences,
  mentions,
  schools,
  schoolProjects,
  workProjects,
  personalProjects,
  news,
}
