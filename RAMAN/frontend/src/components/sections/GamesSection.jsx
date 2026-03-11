import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../ui/Card';
import { Gamepad2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GamesSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.game-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center justify-center gap-4 text-center">
                <span className="text-cyan-500">⚡</span> Game Hub
            </h2>

            <div className="flex justify-center w-full">
                <Card className="game-card p-10 flex flex-col items-center text-center max-w-2xl bg-gradient-to-br from-white to-slate-50 dark:from-zinc-900/80 dark:to-zinc-800/80">
                    <div className="p-5 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 mb-8 border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                        <Gamepad2 size={48} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">React Games Collection</h3>
                    <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 max-w-lg">
                        Challenge yourself with classic games built entirely as modular React components. Test your logic with Sudoku or play a quick match of Tic Tac Toe.
                    </p>
                    <Link to="/games" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white dark:text-zinc-950 bg-cyan-500 hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-105">
                        <Gamepad2 size={20} /> Play Now
                    </Link>
                </Card>
            </div>
        </section>
    );
};

export default GamesSection;
