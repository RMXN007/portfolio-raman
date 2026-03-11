import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Database, Server, Layout } from 'lucide-react';
import FlowingMenu from '../ui/FlowingMenu';
import Card from '../ui/Card';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillsRef = useRef(null);

    const flowingItems = [
        { link: '#', text: 'React.js', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'Node.js', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'TailwindCSS', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'MongoDB', image: 'https://picsum.photos/600/400?random=4' },
        { link: '#', text: 'Next.js', image: 'https://picsum.photos/600/400?random=5' },
    ];

    const skills = [
        { category: 'Frontend', icon: <Layout size={24} />, items: ['React', 'Tailwind CSS', 'Next.js', 'Vite'] },
        { category: 'Backend', icon: <Server size={24} />, items: ['Node.js', 'Express', 'REST APIs', 'WebSockets'] },
        { category: 'Database', icon: <Database size={24} />, items: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Prisma'] },
        { category: 'Tools', icon: <Terminal size={24} />, items: ['Git', 'Docker', 'Linux', 'Vercel'] },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.skill-element', {
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.2)'
            });
        }, skillsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={skillsRef} className="py-24 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center justify-center gap-4 text-center">
                Skills & Technologies
            </h2>

            <div className="skill-element mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <span className="text-cyan-400">&gt;</span> Technical Flow
                </h2>
                <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800/50">
                    <FlowingMenu items={flowingItems} />
                </div>
            </div>

            <div className="skill-element">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <span className="text-cyan-400">&gt;</span> Technical Arsenal
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex items-center gap-3 mb-4 text-cyan-500 dark:text-cyan-400">
                                {skill.icon}
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{skill.category}</h3>
                            </div>
                            <ul className="space-y-2">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="text-slate-600 dark:text-zinc-400 flex items-center gap-2 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 block"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
