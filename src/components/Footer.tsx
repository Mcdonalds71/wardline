import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-800 pb-16">
        <div className="md:col-span-4">
          <div className="mb-6 -ml-4">
            <img src={`${import.meta.env.BASE_URL}images/logo_extracted.png`} alt="Wardline Logo" className="w-48 h-auto" />
          </div>
          <p className="text-gray-500 mb-6 max-w-sm">
            Ambient clinical intelligence for African healthcare. Built in Nigeria, expanding across Africa and Europe.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="text-white font-bold mb-4">Products</h4>
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li><Link to="/#platform" className="hover:text-white transition">Continuous Monitoring</Link></li>
            <li><Link to="/#platform" className="hover:text-white transition">Predictive AI Alerts</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
            <li><Link to="/security" className="hover:text-white transition">Enterprise SSO</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/about" className="hover:text-white transition">Careers</Link></li>
            <li><Link to="/security" className="hover:text-white transition">Infrastructure</Link></li>
            <li><Link to="/legal" className="hover:text-white transition">Compliance</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
          <h4 className="text-white font-bold mb-6">Contact & Support</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
              <span>14 Victoria Island, Lagos, Nigeria.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-accent shrink-0" />
              <span>+234 800 WARDLINE</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-accent shrink-0" />
              <span>clinical@wardline.ai</span>
            </li>
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-xs text-red-400 font-bold leading-relaxed">
              EMERGENCY: If a patient is experiencing a crisis, bypass clinical AI dashboards and initiate standard hospital emergency protocols immediately.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-xs font-medium text-gray-600 gap-4">
        <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
          <span>&copy; {new Date().getFullYear()} Wardline Technologies Ltd</span>
          <span className="hidden md:inline">•</span>
          <span>CAC/RC: 1234567</span>
          <span className="hidden md:inline">•</span>
          <span className="text-blue-500 font-bold">Built on Microsoft Azure</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/legal" className="hover:text-gray-300 transition">Terms</Link>
          <Link to="/legal" className="hover:text-gray-300 transition">Privacy</Link>
          <Link to="/security" className="hover:text-white transition">Security</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
