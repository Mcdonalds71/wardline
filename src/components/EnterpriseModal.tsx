import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  onClose: () => void;
}

const EnterpriseModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-brand-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div 
        className="relative bg-white p-8 md:p-10 rounded-3xl max-w-md w-full shadow-2xl border border-gray-100"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
        >
          <X size={20} />
        </button>

        <h2 className="text-3xl font-serif font-bold mb-3 text-brand-dark pr-8">Enterprise Access</h2>
        <p className="mb-8 text-gray-500 font-medium leading-relaxed">
          Sign in with your enterprise credentials to access Wardline Clinical AI.
        </p>
        
        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center w-full py-4 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition shadow-sm hover:shadow group">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><path d="m10 0h-10v10h10zm11 0h-10v10h10zm-11 11h-10v10h10zm11 0h-10v10h10z" fill="#f25022"/><path d="m10 0h-10v10h10z" fill="#00a4ef"/><path d="m21 0h-10v10h10z" fill="#7fba00"/><path d="m10 11h-10v10h10z" fill="#ffb900"/></svg>
            <span className="font-bold text-gray-700 group-hover:text-black">Microsoft Entra ID</span>
          </button>
          <button className="flex items-center justify-center w-full py-4 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition shadow-sm hover:shadow group">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
            <span className="font-bold text-gray-700 group-hover:text-black">Google Workspace</span>
          </button>
        </div>
        
        <div className="mt-8 border-t border-gray-100 pt-8 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Or</div>
          
          <label className="block text-sm font-bold text-gray-700 mb-2 pl-1">Work Email</label>
          <input 
            type="email" 
            className="w-full border border-gray-200 bg-gray-50 rounded-xl px-4 py-4 mb-4 focus:bg-white focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition font-medium placeholder-gray-400" 
            placeholder="dr.okafor@hospital.ng" 
          />
          <button className="w-full bg-brand-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg hover:-translate-y-0.5 transform duration-200">
            Continue with Email
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EnterpriseModal;
