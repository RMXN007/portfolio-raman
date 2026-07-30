import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-element', {
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, contactRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={contactRef} className="py-24 px-4 max-w-6xl mx-auto w-full">
            <div className="text-center mb-16 contact-element">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text-primary">Let's Connect</h2>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-8 contact-element">
                    <a href="mailto:ramanpawar920@gmail.com" className="flex items-center gap-6 p-6 rounded-xl bg-white/80 dark:bg-zinc-900/50 border border-slate-200/90 dark:border-zinc-800 hover:border-cyan-500/50 hover:bg-slate-100/90 dark:hover:bg-zinc-800/80 transition-all group shadow-sm">
                        <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                            <Mail size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-text-primary">Email</h3>
                            <p className="text-text-secondary group-hover:text-slate-800 dark:group-hover:text-zinc-300 transition-colors">ramanpawar920@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://linkedin.com/in/raman-pawar-824483377" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 rounded-xl bg-white/80 dark:bg-zinc-900/50 border border-slate-200/90 dark:border-zinc-800 hover:border-blue-500/50 hover:bg-slate-100/90 dark:hover:bg-zinc-800/80 transition-all group shadow-sm">
                        <div className="p-4 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                            <Linkedin size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-text-primary">LinkedIn</h3>
                            <p className="text-text-secondary group-hover:text-slate-800 dark:group-hover:text-zinc-300 transition-colors">Connect with me</p>
                        </div>
                    </a>

                    <a href="https://github.com/RMXN007" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 rounded-xl bg-white/80 dark:bg-zinc-900/50 border border-slate-200/90 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-white/50 hover:bg-slate-100/90 dark:hover:bg-zinc-800/80 transition-all group shadow-sm">
                        <div className="p-4 rounded-full bg-slate-200 dark:bg-zinc-700/50 text-slate-700 dark:text-white group-hover:scale-110 transition-transform">
                            <Github size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-text-primary">GitHub</h3>
                            <p className="text-text-secondary group-hover:text-slate-800 dark:group-hover:text-zinc-300 transition-colors">Check out my code</p>
                        </div>
                    </a>
                </div>

                {/* Contact Form
                <form className="bg-white/40 dark:bg-zinc-900/40 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800/50 backdrop-blur-sm contact-element shadow-sm dark:shadow-none">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-zinc-400 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-3 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-slate-800 dark:text-slate-200"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-zinc-400 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-slate-800 dark:text-slate-200"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-zinc-400 mb-2">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full px-4 py-3 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-slate-800 dark:text-slate-200 resize-none"
                            placeholder="Your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="w-full py-4 rounded-xl font-bold bg-cyan-500 text-white dark:text-zinc-950 hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
                    >
                        Send Message <Send size={18} />
                    </button>
                </form> */}
            </div>
        </section>
    );
};

export default Contact;
