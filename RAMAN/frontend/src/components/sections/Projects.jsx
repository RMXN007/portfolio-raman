import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../projects/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: 1,
        title: 'Personal Portfolio',
        description: 'A responsive developer portfolio built using React, Vite and Tailwind showcasing projects and skills. Features modern dark-tech aesthetics and smooth animations.',
        techStack: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
        liveUrl: 'https://portfolio-raman-brown.vercel.app/',
        githubUrl: 'https://github.com/RMXN007/portfolio-raman',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        title: "Task Manager App",
        description: "A full stack application where users can create, update and delete tasks with real-time sync.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
        techStack: ["React", "Node", "MongoDB", "Express"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "E-Commerce Dashboard",
        description: "An admin dashboard for managing products, viewing sales metrics, and handling customer orders.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        techStack: ["React", "TailwindCSS", "Recharts"],
        liveUrl: "#",
        githubUrl: "#"
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
            <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4">
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
