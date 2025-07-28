import { ArrowUpRight, ExternalLink, Github, PlayCircle, X } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "@/data";

export const ProjectSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; 
  const [selectedVideo, setSelectedVideo] = useState(null); 

  // Calculate the total number of pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get the projects for the current page
  const currentProjects = useMemo(() => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    return projects.slice(indexOfFirstProject, indexOfLastProject);
  }, [currentPage, projectsPerPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <nav className="flex justify-center mt-8">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight border border-gray-300 rounded-s-lg
                ${currentPage === 1 ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
              `}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map(number => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300
                  ${currentPage === number ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                `}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 rounded-e-lg
                ${currentPage === totalPages ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
              `}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };


  // Function to open the video modal
  const openVideoModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  // Function to close the video modal
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };


  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Projects</span></h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {currentProjects.map((project, idx) => (
            <div key={idx} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src={project.image} alt={project.title}
                  className='w-full h-full object-fit transition-transform duration-500 group-hover:scale-110'
                />
                {project.videoUrl && ( // Conditionally render the video icon if videoUrl exists
                  <button
                    onClick={() => openVideoModal(project.videoUrl)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    aria-label={`Watch video for ${project.title}`}
                  >
                    <PlayCircle size={60} className="text-white hover:text-primary transition-colors" />
                  </button>
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary">{tag}</span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.descritpion}</p>
                <div className="flex justify-between items-center"> 
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target='_blank' rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} target='_blank' rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && renderPaginationButtons()}
        <div className="text-center mt-14">
          <a href="https://github.com/nonti" target="_blank" rel="noopener noreferrer" className="cosy-button w-fit flex items-center mx-auto gap-2">
            Check my github<ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeVideoModal} // Close modal when clicking outside video
        >
          <div
            className="relative bg-card rounded-lg overflow-hidden max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside video container
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-3 right-3 text-white hover:text-gray-300 z-10"
              aria-label="Close video"
            >
              <X size={28} />
            </button>
            <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio (h-0 pb-[56.25%]) */}
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full object-contain rounded-lg" // object-contain to prevent cropping
                onEnded={closeVideoModal} // Optionally close modal when video ends
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};



