import ocrScribeImg from '../assets/OCRScribe.png'
import sandwichImg from '../assets/sandwich.jpg'
import astarImg from '../assets/astar.png'
import queensImg from '../assets/8Queens.png'
import fastfoodImg from '../assets/fastfood.webp'
import unccImg from '../assets/UNCC.png'

const projects = [
  {
    title: 'OCRScribe',
    image: ocrScribeImg,
    description:
      'Collaborative project with the National Security Agency (NSA) integrating Python, AI, and machine learning. Pioneered a patented process using Optical Character Recognition (OCR) to convert handwritten text into machine-readable format. Led a team of students within an agile framework to deliver project milestones.',
    tags: ['React Native', 'Python', 'Flask', 'OCR', 'Agile'],
    codeUrl: 'https://github.com/SeanCanterbury/OCRScribe',
  },
  {
    title: 'Sandwich Shop API',
    image: sandwichImg,
    description:
      'Full-stack application built using Scrum methodology with FastAPI and MySQL. Demonstrated proficiency in Git-based collaboration, CRUD operations, and building scalable RESTful APIs with asynchronous capabilities.',
    tags: ['FastAPI', 'MySQL', 'Python', 'Agile'],
    codeUrl: 'https://github.com/SeanCanterbury/ResturantOrderFINAL',
  },
  {
    title: 'A* Search Algorithm',
    image: astarImg,
    description:
      'Implementation of the A* search algorithm using the Manhattan distance heuristic in Java. Randomly generates a 15x15 grid with obstacles, then visually draws the optimal path from a user-selected start to goal node.',
    tags: ['Java', 'OOP', 'A* Search', 'AI'],
    codeUrl: 'https://github.com/SeanCanterbury/3153_AI_Assignments/tree/main/Assignment_2',
  },
  {
    title: '8 Queens Solver',
    image: queensImg,
    description:
      'Developed an 8-Queens problem-solving algorithm in Java using a Hill-Climbing algorithm with random restarts. Demonstrates skills in object-oriented programming and intelligent agent design.',
    tags: ['Java', 'OOP', 'Hill Climbing', 'AI'],
    codeUrl: 'https://github.com/SeanCanterbury/3153_AI_Assignments/tree/main/Assignment_1',
  },
  {
    title: 'Fast Food Kitchen Simulation',
    image: fastfoodImg,
    description:
      'Final project for Intro to Computer Science II. A fast food kitchen simulation built with Java using object-oriented programming to create a modular and scalable system.',
    tags: ['Java', 'OOP'],
    codeUrl: 'https://github.com/SeanCanterbury/ResturantOrderFINAL',
  },
  {
    title: 'React Portfolio',
    image: unccImg,
    description:
      'Personal portfolio website built with React to showcase projects and skills in a clean, organized, and user-friendly experience. Each project links to its respective GitHub repository.',
    tags: ['React', 'JavaScript', 'CSS'],
    codeUrl: 'https://github.com/SeanCanterbury/ReactPortfolio',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.codeUrl} className="project-link" target="_blank" rel="noopener noreferrer">
            Source Code &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
