import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import LoadingScreen from './components/ui/LoadingScreen';
import './index.css';
import Starfield from './components/backgrounds/StarField.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      <Starfield />
      <BrowserRouter>
        {/* Global application wrapper */}
        <div className="flex flex-col min-h-screen transition-colors duration-300">
          <LoadingScreen
            isLoading={isLoading}
            onComplete={() => setIsLoading(false)}
          />

          {/* Main content fades in after loader finishes to prevent layout jumping */}
          <div
            className={`flex flex-col min-h-screen transition-opacity duration-700 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
          >
            <Navbar />
            <main className="flex-grow flex flex-col relative w-full overflow-hidden">
              <AppRoutes />
            </main>
            <Footer />
          </div>
        </div>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
