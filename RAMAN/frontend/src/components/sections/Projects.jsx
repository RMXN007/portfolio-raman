import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../projects/ProjectCard';
import ietresultImg from '../../assets/images/ietresult.png';
import portfolioImg from '../../assets/images/portfolio.png';
import gamevaultImg from '../../assets/images/GameVault.png';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: 1,
        title: 'Personal Portfolio',
        description: 'A responsive developer portfolio built using React, Vite and Tailwind showcasing projects and skills. Features modern dark-tech aesthetics and smooth animations.',
        techStack: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
        liveUrl: 'https://portfolio-raman-brown.vercel.app/',
        githubUrl: 'https://github.com/RMXN007/portfolio-raman',
        image: portfolioImg
    },
    {
        id: 2,
        title: "GameVault",
        description: "A full stack application where users can create, update and delete tasks with real-time sync.",
        image: gamevaultImg,
        techStack: ["React", "Node", "MongoDB", "Express"],
        liveUrl: "https://gamevault-pink-three.vercel.app/",
        githubUrl: "https://github.com/RMXN007/gamevault"
    },
    {
        id: 3,
                title: "IET DAVV RESULT PORTAL",
                description: "A web application for managing and displaying academic results for students of IET DAVV.",
                image: ietresultImg,
                techStack: ["React", "TailwindCSS", "Recharts"],
                liveUrl: "https://ietresult.vercel.app/",
                githubUrl: "https://github.com/RMXN007/ietresult"
    }
];

const Projects = () => {
    const projectsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.project-card-wrapper', {
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, projectsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={projectsRef} className="py-24 px-4 max-w-6xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 flex items-center gap-4">
                <span className="w-12 h-1 bg-cyan-500 rounded-full block"></span>
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, idx) => (
                    <div key={idx} className="project-card-wrapper">
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            techStack={project.techStack}
                            liveUrl={project.liveUrl}
                            githubUrl={project.githubUrl}
                            image={project.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
