import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../ui/Card';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "Task Manager App",
        description: "A full stack application where users can create, update and delete tasks with real-time sync.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
        tags: ["React", "Node", "MongoDB", "Express"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "E-Commerce Dashboard",
        description: "An admin dashboard for managing products, viewing sales metrics, and handling customer orders.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        tags: ["React", "TailwindCSS", "Recharts"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Real-time Chat Application",
        description: "A secure, low-latency chat platform featuring private messaging and group channels.",
        image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&q=80",
        tags: ["Socket.io", "React", "Node"],
        liveUrl: "#",
        githubUrl: "#"
    }
];

const Projects = () => {
    const projectsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.project-card', {
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
                    <Card key={idx} className="project-card flex flex-col h-full group">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                            <p className="text-slate-600 dark:text-zinc-400 mb-6 flex-grow">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-xs font-medium px-2.5 py-1 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full border border-cyan-500/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-zinc-800">
                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                    <Github size={16} /> GitHub
                                </a>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;
