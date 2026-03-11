import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code2, Github, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import ramanPhoto from '../../assets/Raman photo.jpg';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-element', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" ref={heroRef} className="min-h-screen pt-24 pb-12 flex flex-col justify-center items-center text-center px-4">
            <div className="hero-element mb-6 w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <img src={ramanPhoto} alt="Raman Pawar" className="w-full h-full object-cover" />
            </div>

            <div className="hero-element inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wide">
                Full Stack Developer | MERN Stack
            </div>

            <h1 className="hero-element text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
                Hi, I'm <span className="neon-text">Raman Pawar</span>
            </h1>

            <p className="hero-element text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mb-10">
                I build modern web applications using React, Node.js and MongoDB.
            </p>

            <div className="hero-element flex flex-col sm:flex-row gap-4 mb-10">
                <button onClick={() => handleScroll('projects')} className="flex items-center justify-center gap-2 text-lg px-8 py-3 rounded-xl bg-cyan-500 text-white dark:text-zinc-950 font-semibold hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    <Code2 size={20} /> View Projects
                </button>
                <button onClick={() => handleScroll('contact')} className="flex items-center justify-center gap-2 text-lg px-8 py-3 rounded-xl border border-slate-300 dark:border-zinc-700 bg-slate-200 dark:bg-zinc-800/50 hover:bg-slate-300 dark:hover:bg-zinc-800 hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-105 transition-all">
                    Contact Me <ArrowRight size={20} />
                </button>
            </div>

            <div className="hero-element flex items-center gap-6">
                <a href="https://github.com/RMXN007" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-gray-100 transition-colors">
                    <Github size={28} />
                    <span className="sr-only">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/raman-pawar-824483377" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-zinc-400 hover:text-blue-500 transition-colors">
                    <Linkedin size={28} />
                    <span className="sr-only">LinkedIn</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
