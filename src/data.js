import projectVideo2 from '@/assets/videos/project2.mp4';
import projectVideo1 from '@/assets/videos/tictactoe.mp4';
import projectVideo3 from '@/assets/videos/googlekeep.mp4';


import bpm from '@/assets/certs/BPM.png';
import mq from '@/assets/certs/mq.png';
import mw from '@/assets/certs/mw.png';
import wle1 from '@/assets/certs/wle2.png';
import wle2 from '@/assets/certs/wle7.1.png';
import scjp from '@/assets/certs/scjp.png';

export const navLinks = [
  { name: 'Home', href: '#hero',},
  { name: 'About', href: '#about',},
  { name: 'Skills', href: '#skills',},
  { name: 'Projects', href: '#project',},
  { name: 'Contact', href: '#contact',},
  { name: 'Certificates', href: '#certificates',},
]

export const projects = [
  {
    id:1,
    title: 'Living Memories ',
    descritpion: 'Landing page app using React and Tailwind.',
    image: '/projects/project1.png',
    tags:['React','Tailwind',],
    githubUrl:'',
    demoUrl: '',
    videoUrl:''
  },
  {
    id:2,
    title: 'Ubuntu Web Hosting ',
    descritpion: 'Landing page app using React and Tailwind.',
    image: '/projects/project6.png',
    tags:['React','Tailwind','NodeJS'],
    githubUrl:'',
    demoUrl: '',
    videoUrl:projectVideo2
  },
  {
    id:3,
    title: 'Airbnb Booking',
    descritpion: 'Landing page app using MongoDB, Express, HTML/CSS, React and NodeJS',
    image: '/projects/project8.png',
    tags:['HTML','CSS','React','MongoDB'],
    githubUrl:'',
    demoUrl: '',
    videoUrl:''
  },
  {
    id:4,
    title: 'Amazon Ecommerce ',
    descritpion: 'Landing page app using HTML/CSS, Firebase and React.',
    image: '/projects/project7.png',
    tags:['HTML','CSS','React','Firebase',],
    githubUrl:'',
    demoUrl: '',
    videoUrl:''
  },
  {
    id:5,
    title: 'Google Keep ',
    descritpion: 'Landing page app using HTML, CSS and React.',
    image: '/projects/project3.png',
    tags:['HTML','CSS','React'],
    githubUrl:'',
    demoUrl: '',
    videoUrl:projectVideo3
  },
  {
    id:6,
    title: 'Tic Tac Toe',
    descritpion: 'Landing page app using HTML/CSS and React.',
    image: '/projects/project2.png',
    tags:['HTML','CSS','React'],
    githubUrl:'',
    demoUrl: '',
    videoUrl:projectVideo1
  },
  {
    id:7,
    title: 'Tesla',
    descritpion: 'Landing page app using HTML/CSS.',
    image: '/projects/project5.png',
    tags:['HTML','CSS'],
    githubUrl:'',
    demoUrl: '',
    videoUrl:''
  },
  {
    id:8,
    title: 'Youtube',
    descritpion: 'Landing page app using HTML/CSS.',
    image: '/projects/project1.png',
    tags:['HTML','CSS'],
    githubUrl:'',
    demoUrl: '',
    videoUrl:''
  },
  {
    id:9,
    title: 'Movieflix ',
    descritpion: 'Landing page app using HTML/CSS.',
    image: '/projects/project4.png',
    tags:['HTML','CSS'],
    githubUrl:'',
    demoUrl: '',
    videoUrl:''
  }
]


export const skills = [
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 70, category: 'frontend' },
  { name: 'TypeScript', level: 25, category: 'frontend' },
  { name: 'Tailwind CSS', level: 60, category: 'frontend' },
  { name: 'Bootstrap', level: 50, category: 'frontend'},

  // Backend
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'PostgreSQL', level: 65, category: 'backend' },
  { name: 'MySQL', level: 60, category: 'backend' },
  { name: 'Java', level: 60, category: 'backend'},


  // Tools
  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'Figma', level: 45, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Eclipse', level: 80, category:'tools'},
];


export const cvPath = '/cv/Nontombi-CV.pdf';

export const certificates = [
  { image: bpm, title: 'Certified BPM Application Developer', issuedBy: 'IBM', date:'October 2013 ', description:'IBM Business Process Manager'},
  { image: wle1, title: 'Certified Associate BPM Developer', issuedBy: 'IBM', date:'March 2012 ', description:'Websphere Lombardi Edition'},
  { image: wle2, title: 'Certified BPM Developer', issuedBy: 'oracle', date:'June 2012 ', description:'Websphere Lombardi Edition'},
  { image: mq, title: 'Certified Solution Designer', issuedBy: 'IBM', date:'November 2011 ', description:'Websphere MQ'},
  { image: mw, title: 'Certified java', issuedBy: 'Marlene Ward Training', date:'November 2011 ', description:'asssociate'},
  { image: scjp, title: 'Certified java', issuedBy: 'oracle', date:'July 2010 ', description:'asssociate'},
  // { image: scja, title: 'Certified java', issuedBy: 'oracle', date:'July 2010 ', description:'asssociate'},
  // { image: educo, title: 'Certified java', issuedBy: 'oracle', date:'July 2010 ', description:'asssociate'},
  // { image: diploma, title: 'Certified java', issuedBy: 'oracle', date:'July 2010 ', description:'asssociate'},
]