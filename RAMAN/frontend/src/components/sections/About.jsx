
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Code2, Terminal, User, MapPin, Sparkles } from 'lucide-react';
import Card from '../ui/Card';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-element', {
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, aboutRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={aboutRef} className="py-24 px-4 max-w-6xl mx-auto">
            <h2 className="about-element text-4xl md:text-5xl font-serif font-bold mb-16 flex items-center gap-4 text-text-primary">
                <span className="w-12 h-1 bg-cyan-500 rounded-full block"></span>
                System Profile
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Bio Card */}
                <div className="lg:col-span-2 about-element">
                    <Card className="p-8 md:p-10 h-full">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                                <User size={28} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-1">Dossier</h3>
                                <h2 className="text-2xl font-bold text-text-primary italic font-mono">Biography</h2>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-text-primary font-medium">
                                I am an <span className="text-cyan-400">Information Technology</span> student at 
                                <span className="text-orange-400 font-bold ml-1">IET DAVV Indore</span>.
                            </p>
                            <p className="text-lg leading-relaxed text-text-secondary">
                                I engineer scalable backends and craft highly interactive frontends. My focus lies in architecting performant systems using the MERN stack and Next.js, treating every application as a mission-critical product.
                            </p>
                            <p className="text-lg leading-relaxed text-text-secondary italic border-l-2 border-orange-500/50 pl-6">
                                "Diligence in mathematical logic meets precision in frontend design. I write robust, modular code that scales."
                            </p>
                        </div>
                    </Card>
                </div>

                {/* Info Grid Sidebar */}
                <div className="grid grid-cols-1 gap-8 about-element">
                    {/* Education Card */}
                    <Card className="p-6 flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                            <GraduationCap size={20} />
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-1">Education</h3>
                            <p className="text-text-primary font-medium leading-tight">B.Tech in IT</p>
                            <p className="text-text-secondary text-xs mt-1">IET DAVV, Indore</p>
                        </div>
                    </Card>

                    {/* Location Card */}
                    <Card className="p-6 flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-orange-400/80 mb-1">Base</h3>
                            <p className="text-text-primary font-medium leading-tight">Indore, India</p>
                            <p className="text-text-secondary text-xs mt-1">Available for Remote</p>
                        </div>
                    </Card>

                    {/* Focus Card */}
                    <Card className="p-6 flex items-center gap-4 bg-gradient-to-br from-white to-orange-50/80 dark:from-zinc-900/50 dark:to-orange-500/5">
                        <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-yellow-500/80 mb-1">Current Focus</h3>
                            <p className="text-text-primary font-medium leading-tight">Advanced DSA</p>
                            <p className="text-text-secondary text-xs mt-1">MERN Optimization</p>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Bottom Traits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 about-element">
                <Card className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                        <Terminal size={24} />
                    </div>
                    <div>
                        <h4 className="text-text-primary font-bold mb-1">Clean Code Advocate</h4>
                        <p className="text-text-secondary text-sm italic">Treating every project like a production-ready system with modularity at its core.</p>
                    </div>
                </Card>
                <Card className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-400">
                        <Code2 size={24} />
                    </div>
                    <div>
                        <h4 className="text-text-primary font-bold mb-1">Full Stack Explorer</h4>
                        <p className="text-text-secondary text-sm italic">Solving algorithmic puzzles using C++ while scaling the depths of the MERN stack.</p>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default About;
