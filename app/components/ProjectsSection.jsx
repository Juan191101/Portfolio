"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Portfolio",
        description: "Pagina web para mi Portfolio personal utilizando NextJS",
        image: "/images/projects/Portfolio.png",
        tag: ["Todos", "Frontend"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Celular Xpress",
        description: "Backend y base de datos para e-commerce de celulares",
        image: "/images/projects/CellXpress.png",
        tag: ["Todos", "Backend"],
        gitUrl: "https://github.com/Gambuli8/CellXpress-Frontend/tree/developer",
        previewUrl: "https://pf-cell-xpress-frontend.vercel.app/"
    },
    {
        id: 3,
        title: "PokeAPI Project",
        description: "Proyecto integrador Bootcamp SoyHenry, servidor con Nodejs, Express y PostgreSQL y cliente con ReactJS, React-Redux",
        image: "/images/projects/PokeAPI.png",
        tag: ["Todos", "Backend", "Frontend"],
        gitUrl: "https://github.com/Juan191101/Deploy-Pokemon",
        previewUrl: "https://github.com/Juan191101/Deploy-Pokemon"
    },
    {
        id: 4,
        title: "Galeria Personal",
        description: "(Actualmente en proceso...) Practica personal para implementacion de cloudinary, mongoose y autenticacion propia.",
        image: "/images/projects/Galeria.png",
        tag: ["Todos", "Backend", "Frontend"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Homelo chino",
        description: "Es como homero pero... chino",
        image: "/images/projects/Homero.png",
        tag: ["Todos", "Backend", "Frontend"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("Todos")

    const handleTagChange = (newTag) =>{
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project)=>
        project.tag.includes(tag)
    )

  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>Mis Proyectos</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 text py-6 '>
            <ProjectTag 
            onClick={handleTagChange} 
            name="Todos" 
            isSelected={tag === "Todos"}
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name="Frontend"
            isSelected={tag === "Frontend"}
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name="Backend" 
            isSelected={tag === "Backend"}
            />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project)=> (
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
            ))}
        </div>
        </>
  )
}

export default ProjectsSection