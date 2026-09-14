import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnterpriseModal from './components/EnterpriseModal';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Security from './pages/Security';
import About from './pages/About';
import Legal from './pages/Legal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <Router>
      <div className="bg-brand-light min-h-screen font-sans selection:bg-brand-accent selection:text-white overflow-x-hidden">
        <ScrollToTop />
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/security" element={<Security />} />
            <Route path="/about" element={<About />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>

        <Footer />
        
        {isModalOpen && <EnterpriseModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;
