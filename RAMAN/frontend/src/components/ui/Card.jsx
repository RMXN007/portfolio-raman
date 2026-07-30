import React from 'react';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div className={`
            bg-[color:var(--color-card-bg)] backdrop-blur-md rounded-xl border border-[color:var(--color-border)] overflow-hidden shadow-sm dark:shadow-none
            ${hoverEffect ? 'transition-all duration-300 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:bg-white/95 dark:hover:bg-zinc-800/60 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10' : ''}
      ${className}
    `}>
            {children}
        </div>
    );
};

export default Card;
