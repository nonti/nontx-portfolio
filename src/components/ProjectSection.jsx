import { ArrowUpRight, ExternalLink, Github } from "lucide-react";


const projects = [
  {
    id:1,
    title: 'Living Memories ',
    descritpion: 'Landing page app using React and Tailwind.',
    image: '/projects/project1.png',
    tags:['React','Tailwind',],
    githubUrl:'',
    demoUrl: ''
  },
  {
    id:2,
    title: 'Ubuntu Web Hosting ',
    descritpion: 'Landing page app using React and Tailwind.',
    image: '/projects/project6.png',
    tags:['React','Tailwind','NodeJS'],
    githubUrl:'',
    demoUrl: ''
  },
  {
    id:3,
    title: 'Airbnb Booking',
    descritpion: 'Landing page app using MongoDB, Express, HTML/CSS, React and NodeJS',
    image: '/projects/project8.png',
    tags:['HTML','CSS','React'],
    githubUrl:'',
    demoUrl: ''
  },
  {
    id:4,
    title: 'Amazon Ecommerce ',
    descritpion: 'Landing page app using HTML/CSS, Firebase and React.',
    image: '/projects/project7.png',
    tags:['HTML','CSS','React','Firebase',],
    githubUrl:'',
    demoUrl: ''
  },
  {
    id:5,
    title: 'Google Keep ',
    descritpion: 'Landing page app using HTML, CSS and React.',
    image: '/projects/project3.png',
    tags:['HTML','CSS','React'],
    githubUrl:'',
    demoUrl: ''
  },
  {
    id:6,
    title: 'Tic Tac Toe',
    descritpion: 'Landing page app using HTML/CSS and React.',
    image: '/projects/project2.png',
    tags:['HTML','CSS','React'],
    githubUrl:'',
    demoUrl: ''
  },
  {
    id:7,
    title: 'Tesla',
    descritpion: 'Landing page app using HTML/CSS.',
    image: '/projects/project5.png',
    tags:['HTML','CSS'],
    githubUrl:'',
    demoUrl: ''
  },
  {
    id:8,
    title: 'Youtube',
    descritpion: 'Landing page app using HTML/CSS.',
    image: '/projects/project1.png',
    tags:['HTML','CSS'],
    githubUrl:'',
    demoUrl: ''
  },
  {
    id:9,
    title: 'Movieflix ',
    descritpion: 'Landing page app using HTML/CSS.',
    image: '/projects/project4.png',
    tags:['HTML','CSS'],
    githubUrl:'',
    demoUrl: ''
  }
]
export const ProjectSection = () => {
  return(
    <section id='project' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Projects</span></h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, perfomance, and user experience.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          { projects.map((project, idx) => (
            <div key={idx} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src={project.image} alt={project.title} 
                  className='w-full h-full object-fit transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary">{tag}</span>
                  ))}
                </div>
              
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.descritpion}</p>
              <div className="flex-justify-between items-center">
                <div className="flex space-x-3">
                  <a href={project.demoUrl} target='_blank' className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <ExternalLink size={20}/>
                  </a>
                  <a href={project.githubUrl} target='_blank' className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github size={20}/>
                  </a>
                </div>
              </div>

              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="" className="cosy-button w-fit flex items-center mx-auto gap-2">
            Check my github<ArrowUpRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  )
}