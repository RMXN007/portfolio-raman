// import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import './index.css';
import Starfield from './components/backgrounds/Starfield.jsx';

function App() {

  return (
    <ThemeProvider>
      <Starfield />
      <BrowserRouter>
        {/* Global application wrapper */}
        <div className="flex flex-col min-h-screen transition-colors duration-300">
          <Navbar />
          <main className="flex-grow flex flex-col relative w-full overflow-hidden">
            <AppRoutes />
          </main>
          <Footer />

        </div>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
