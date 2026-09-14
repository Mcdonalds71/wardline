import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-sm border-b border-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center -ml-4">
            <img src={`\${import.meta.env.BASE_URL}images/logo_extracted.png`} alt="Wardline Logo" className="w-40 md:w-56 h-auto drop-shadow-md" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-300">
            <Link to="/#platform" className="hover:text-white transition">Platform</Link>
            <Link to="/pricing" className="hover:text-white transition">Pricing</Link>
            <Link to="/security" className="hover:text-white transition">Security</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={onOpenModal} className="font-bold text-sm text-gray-300 hover:text-white transition">
            Log in
          </button>
          <button onClick={onOpenModal} className="bg-brand-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-900 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200 border border-white/10">
            Sign up
          </button>
        </div>

        <button 
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white fixed inset-0 top-20 z-40 p-6 flex flex-col gap-6"
          >
            <Link to="/" className="text-xl font-bold border-b pb-4">Platform</Link>
            <Link to="/pricing" className="text-xl font-bold border-b pb-4">Pricing</Link>
            <Link to="/security" className="text-xl font-bold border-b pb-4">Security</Link>
            <Link to="/about" className="text-xl font-bold border-b pb-4">About</Link>
            <div className="mt-auto pb-20 flex flex-col gap-4">
              <button onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }} className="w-full font-bold text-center py-4 border border-gray-200 rounded-xl">
                Log in
              </button>
              <button onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }} className="w-full bg-brand-black text-white py-4 rounded-xl font-bold text-center border border-gray-800">
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
