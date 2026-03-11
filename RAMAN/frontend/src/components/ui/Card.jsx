import React from 'react';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div className={`
      bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md rounded-xl border border-slate-200 dark:border-zinc-800/50 overflow-hidden shadow-sm dark:shadow-none
      ${hoverEffect ? 'transition-all duration-300 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:bg-white/80 dark:hover:bg-zinc-800/60 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10' : ''}
      ${className}
    `}>
            {children}
        </div>
    );
};

export default Card;
