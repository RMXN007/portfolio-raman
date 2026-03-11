import React from 'react';
import ProjectCard from '../components/projects/ProjectCard';

const projectsList = [
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
    return (
        <div className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full animate-fade-in mt-16">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Featured <span className="neon-text">Projects</span>
                </h1>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    A showcase of systems, applications, and architectures I've engineered. Dive into my latest works below.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsList.map((project, idx) => (
                    <div 
                        key={project.id} 
                        className="animate-fade-up-text" 
                        style={{ animationDelay: `${idx * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}
                    >
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
        </div>
    );
};

export default Projects;
