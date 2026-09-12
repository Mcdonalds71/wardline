import React from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Transparent pricing for clinical teams</h1>
        <p className="text-xl text-gray-500 font-medium">Billed annually. Start turning every patient observation into a clinical decision today.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter */}
        <motion.div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-2xl font-bold mb-2">Clinic Starter</h3>
          <p className="text-gray-500 mb-6 font-medium">For small clinics and private practices</p>
          <div className="mb-6"><span className="text-5xl font-black text-brand-dark">$499</span><span className="text-gray-500 font-medium">/mo</span></div>
          <ul className="mb-8 space-y-4 text-gray-700 font-medium flex-grow">
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> 500 patient beds monitored</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> $1.50 per additional bed</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> Basic risk scoring AI</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> 7-day data retention</li>
          </ul>
          <button className="w-full py-4 rounded-xl border-2 border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white transition">Start 14-day trial</button>
        </motion.div>

        {/* Growth */}
        <motion.div className="bg-brand-dark p-8 rounded-3xl border border-brand-dark shadow-xl text-white flex flex-col relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Most Popular</div>
          <h3 className="text-2xl font-bold mb-2">Hospital Growth</h3>
          <p className="text-gray-400 mb-6 font-medium">For mid-market hospitals and regional networks</p>
          <div className="mb-6"><span className="text-5xl font-black">$1,499</span><span className="text-gray-400 font-medium">/mo</span></div>
          <ul className="mb-8 space-y-4 text-gray-300 font-medium flex-grow">
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> 2,500 patient beds monitored</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> $0.80 per additional bed</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> Advanced predictive AI alerts</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> Native EHR integration</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> 90-day data retention</li>
          </ul>
          <button className="w-full py-4 rounded-xl bg-brand-accent text-white font-bold hover:bg-orange-600 transition shadow-lg">Start 14-day trial</button>
        </motion.div>

        {/* Enterprise */}
        <motion.div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
          <p className="text-gray-500 mb-6 font-medium">For national healthcare networks and HMOs</p>
          <div className="mb-6"><span className="text-5xl font-black text-brand-dark">Custom</span></div>
          <ul className="mb-8 space-y-4 text-gray-700 font-medium flex-grow">
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> Unlimited beds</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> Custom AI model training</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> Dedicated Azure infrastructure</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> Microsoft Entra ID SSO</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent">✓</span> 7-year immutable audit log</li>
          </ul>
          <button className="w-full py-4 rounded-xl border-2 border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white transition">Contact Sales</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
