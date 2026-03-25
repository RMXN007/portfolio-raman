import React from 'react';

const SoftAuroraBackground = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-hidden transition-colors duration-300">
            {/* Top Left Glow */}
            <div
                className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-cyan-400/20 dark:bg-cyan-900/30 blur-[120px] pointer-events-none select-none"
                aria-hidden="true"
            />

            {/* Bottom Right Glow */}
            <div
                className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-violet-400/20 dark:bg-violet-900/30 blur-[120px] pointer-events-none select-none"
                aria-hidden="true"
            />

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default SoftAuroraBackground;
