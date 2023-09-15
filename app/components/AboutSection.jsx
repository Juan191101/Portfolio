"use client"
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills", 
        content: (
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>MySQL</li>
                <li>Mongodb</li>
                <li>Javascript</li>
                <li>HTML, CSS</li>
                <li>React JS</li>
                <li>Redux</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title: "Educacion",
        id: "educacion", 
        content: (
            <ul>
                <li>Soy HENRY : Fullstack Web Developer (Stack PERN).</li>
                <li>UNSJ : Estudiante, Licenciatura en Sistemas.</li>
            </ul>
        )
    },
    {
        title: "Experiencia",
        id: "experiencia", 
        content: (
            <ul>
                <li>Como desarrollador autodidacta y alumno de la academia Henry, he realizado diversos
                    proyectos en solitario y en conjunto(modalidad SCRUM) para aplicar conocimientos tanto
                    en areas de frontend como en backend, aunque con mas enfoque en backend y base de datos. 
                </li>
            </ul>
        )
    }
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills")
    const [ isPending, startTransition ] = useTransition()

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id)
        })
    }

  return (
    <section className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
        <Image src={"/images/image.png"} width={500} height={500} alt="image"></Image>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>
                Sobre mi
            </h2>
            <p className='text-base md:text-lg '>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aliquam labore non possimus.
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton selecTab={()=>handleTabChange("skills")} active={tab==="skills"}>
                    {" "}Skills{" "} 
                    </TabButton>
                <TabButton selecTab={()=>handleTabChange("educacion")} active={tab==="educacion"}>
                    {" "}Educacion{" "} 
                    </TabButton>
                <TabButton selecTab={()=>handleTabChange("experiencia")} active={tab==="experiencia"}>
                    {" "}Experiencia{" "} 
                    </TabButton>
             </div>
             <div className='mt-8'>{TAB_DATA.find((t)=> t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection