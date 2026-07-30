import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import GamesSection from '../components/sections/GamesSection';
import Projects from '../components/sections/Projects';
import Freelance from '../components/sections/Freelance';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen text-text-primary w-full overflow-hidden transition-colors duration-300">
            <Hero />
            <About />
            <Skills />
            <GamesSection />
            <Projects />
            <Freelance />
            <Contact />
        </div>
    );
};

export default Home;
