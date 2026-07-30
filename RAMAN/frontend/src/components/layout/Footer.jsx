import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white/70 dark:bg-zinc-950/50 border-t border-slate-200/80 dark:border-zinc-800/50 py-8 mt-auto backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-slate-600 dark:text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} Raman Pawar. Built with React & Vite.
                </p>
                <p className="text-slate-500 dark:text-zinc-600 text-xs mt-2 flex justify-center items-center gap-1">
                    Stay futuristic <span className="text-cyan-500 animate-pulse">⚡</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
