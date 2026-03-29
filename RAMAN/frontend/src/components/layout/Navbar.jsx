import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';
import StaggeredMenu from '../ui/StaggeredMenu';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleScroll = (id) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home section', id: 'home' },
        { label: 'About', ariaLabel: 'Go to about section', id: 'about' },
        { label: 'Skills', ariaLabel: 'Go to skills section', id: 'skills' },
        { label: 'Projects', ariaLabel: 'Go to projects section', id: 'projects' },
        { label: 'Contact', ariaLabel: 'Go to contact section', id: 'contact' }
    ];

    const socialItems = [
        { label: 'GitHub', link: 'https://github.com/RMXN007' },
        { label: 'LinkedIn', link: 'https://linkedin.com/in/raman-pawar-824483377' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            {/* The StaggeredMenu component includes its own fixed header container for the button */}
            <div className="absolute top-0 left-0 w-full flex justify-between h-20 items-center px-4 sm:px-8 z-50 pointer-events-none">
                <div className="flex-shrink-0 flex items-center pointer-events-auto mt-2 gap-4">
                    <button onClick={() => handleScroll('home')} className="text-2xl font-bold tracking-tighter neon-text flex items-center gap-2 cursor-pointer z-[60] relative">
                        <span className="text-cyan-400">⚡</span> RMXN
                    </button>
                    
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full border border-gray-600/50 hover:bg-gray-800/30 transition-all text-gray-200 dark:text-gray-300 shadow-sm backdrop-blur-sm cursor-pointer z-[60]"
                        aria-label="Toggle Navigation Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>

            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#fff"
                openMenuButtonColor="#fff"
                colors={['#080808', '#121212']}
                accentColor="#06b6d4"
                handleScroll={handleScroll}
            />
        </nav>
    );
};

export default Navbar;
