import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../ui/Card';

const ProjectCard = ({ title, description, image, techStack, liveUrl, githubUrl }) => {
    return (
        <Card className="flex flex-col h-full group overflow-hidden">
            {image && (
                <div className="h-48 lg:h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10 w-full h-full pointer-events-none"></div>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow relative z-20">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors text-slate-100">{title}</h3>
                <p className="text-zinc-400 mb-6 flex-grow leading-relaxed">{description}</p>

                {techStack && techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {techStack.map((tech, idx) => (
                            <span key={idx} className="text-xs font-medium px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap items-center gap-3 mt-auto pt-5 border-t border-zinc-800/50">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 bg-cyan-500/10 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg shadow-cyan-500/5 border border-cyan-500/30 hover:border-cyan-500"
                        >
                            <ExternalLink size={16} /> Visit Live Site
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 bg-zinc-800/40 text-slate-300 rounded-lg hover:bg-zinc-700 hover:text-white transition-all border border-zinc-700/50 hover:border-zinc-600"
                        >
                            <Github size={16} /> Source
                        </a>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;
