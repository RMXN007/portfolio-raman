import React from 'react';
import ProjectCard from '../components/projects/ProjectCard';

import portfolioImg from '../assets/images/portfolio.png';
import gamevaultImg from '../assets/images/GameVault.png';

const projectsList = [
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
        image: "https://ietresult.vercel.app/",
        techStack: ["React", "TailwindCSS", "Recharts"],
        liveUrl: "https://ietresult.vercel.app/",
        githubUrl: "https://github.com/RMXN007/ietresult"
    }
];

const Projects = () => {
    return (
        <div className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full animate-fade-in mt-16">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-text-primary">
                    Featured <span className="neon-text">Projects</span>
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed">
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
