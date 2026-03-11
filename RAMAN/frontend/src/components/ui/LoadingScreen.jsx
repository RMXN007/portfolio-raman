import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ isLoading, onComplete }) => {
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
      setIsFadingOut(false);
      
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 2000); // Wait 2s before starting fade out

      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
        if (onComplete) onComplete();
      }, 2500); // 2000 + 500ms fade duration

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [isLoading, onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-bg-base transition-opacity duration-500 ease-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Minimalist N Logo SVG Animation */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-8"
        >
          {/* N Left Stem and Diagonal */}
          <path
            d="M30 90 L30 10 L70 90"
            stroke="var(--color-text-primary)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw-path"
          />
          {/* N Right Stem */}
          <path
            d="M70 90 L70 10"
            stroke="var(--color-accent-primary)"
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-draw-path-fade"
          />
          {/* Little elegant design dot at the top right of N */}
          <circle 
            cx="70" 
            cy="10" 
            r="4" 
            fill="var(--color-accent-primary)" 
            className="animate-fade-up-text" 
          />
        </svg>

        {/* PixelNova Text */}
        <div className="text-text-primary font-bold text-xl tracking-widest uppercase animate-fade-up-text">
          Pixel<span className="text-accent-primary opacity-80">Nova</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
