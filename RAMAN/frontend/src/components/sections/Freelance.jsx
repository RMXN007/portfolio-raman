import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Freelance = () => {
    const freelanceRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.freelance-element', {
                scrollTrigger: {
                    trigger: freelanceRef.current,
                    start: 'top 85%',
                },
                scale: 0.95,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }, freelanceRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={freelanceRef} className="py-16 px-4 max-w-4xl mx-auto w-full">
            <div className="freelance-element rounded-2xl bg-gradient-to-r from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-800 border-2 border-cyan-500/30 p-8 md:p-12 text-center relative overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <div className="inline-flex items-center justify-center p-3 bg-cyan-500/20 text-cyan-500 dark:text-cyan-400 rounded-full mb-6">
                        <Zap size={32} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Available for Freelance Work
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
                        I am currently open to freelance projects involving full stack web development and backend APIs. Got an idea? Let's build it.
                    </p>

                    <a href="mailto:ramanpawar920@gmail.com" className="inline-block px-8 py-4 rounded-xl font-bold text-white dark:text-zinc-950 bg-cyan-500 hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        ramanpawar920@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Freelance;
