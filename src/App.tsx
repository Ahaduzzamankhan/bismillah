import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

// ScrollToTop helper component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div id="restaurant-app-root" className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-brand-gold/30 selection:text-brand-green-dark">
          
          {/* Global Sticky Navigation Header */}
          <Navbar />

          {/* Main Route Content Panel */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback redirection route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Global Footer Area */}
          <Footer />

        </div>
      </Router>
    </LanguageProvider>
  );
}
