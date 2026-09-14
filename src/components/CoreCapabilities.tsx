import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const capabilities = [
  {
    title: "Continuous Monitoring",
    description: "Wardline’s ambient sensors continuously monitor patient vital signs without physical contact, ensuring nurses have real-time visibility into the health status of every patient on the ward."
  },
  {
    title: "Predictive AI Alerts",
    description: "Our machine learning models analyze subtle trends in respiration and heart rate, alerting clinical staff to potential deterioration hours before critical intervention is required."
  },
  {
    title: "Clinical Workflow Integration",
    description: "Seamlessly integrates with your existing EHR and nursing station dashboards. No new hardware screens to monitor; insights are pushed directly to the tools your team already uses."
  },
  {
    title: "Hospital Scale Security",
    description: "Built for enterprise. Full compliance with data privacy regulations, encrypted data transit, and seamless SSO integration for massive hospital networks across Africa."
  }
];

const CoreCapabilities: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="platform" className="py-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="lg:w-1/2">
        <motion.div 
          className="sticky top-32 bg-brand-accent text-white p-12 rounded-[2rem] shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Wardline Core Capabilities</h2>
          
          <div className="flex flex-col gap-4">
            {capabilities.map((cap, index) => (
              <div key={index} className="border-b border-white/20 last:border-0 pb-4 last:pb-0">
                <button 
                  onClick={() => setOpenIndex(index)}
                  className="w-full flex items-center justify-between py-4 text-left font-display text-xl font-bold hover:text-brand-black transition"
                >
                  {cap.title}
                  {openIndex === index ? <Minus /> : <Plus />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white text-brand-dark p-6 rounded-2xl mb-4 mt-2 font-medium leading-relaxed">
                        {cap.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="lg:w-1/2 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-6">
          <motion.div 
            className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex items-center justify-center p-0 bg-cover bg-center group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img src={`\${import.meta.env.BASE_URL}images/nurse_dashboard.jpg`} alt="Nurse observing patient dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div 
            className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex items-center justify-center p-0 mt-12 bg-cover bg-center group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img src={`\${import.meta.env.BASE_URL}images/wardline_sensor.jpg`} alt="Wardline sensor in hospital room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
