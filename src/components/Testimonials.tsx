import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
          Clinical Outcomes from Nigerian Hospitals
        </h2>
        <p className="text-xl text-gray-500 font-medium">
          See how leading clinical teams are using ambient AI to save lives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div 
          className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            "Wardline noticed the subtle drop in respiration rate hours before the crash cart was needed. It gave our nursing staff the critical lead time to intervene and stabilize the patient."
          </p>
          <div>
            <div className="font-bold text-brand-dark">Dr. Samuel O.</div>
            <div className="text-brand-accent text-sm font-bold">Chief Medical Director, LUTH</div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            "By turning heart rate, temperature, and movement into one unified AI observation, we eliminated alarm fatigue on the ward. Our clinical team only responds when it truly matters."
          </p>
          <div>
            <div className="font-bold text-brand-dark">Nurse Fatima B.</div>
            <div className="text-brand-accent text-sm font-bold">Head of Nursing, National Hospital</div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
            "The ambient sensing works invisibly in the background. Patients feel comfortable, and our nurses have a continuous, unblinking safety net watching over the entire floor."
          </p>
          <div>
            <div className="font-bold text-brand-dark">Dr. Chika E.</div>
            <div className="text-brand-accent text-sm font-bold">Evercare Hospital Lekki</div>
          </div>
        </motion.div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-gray-200 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-5xl font-serif font-bold text-brand-dark mb-4">Over 12.4M</div>
          <div className="text-gray-500 font-bold tracking-wide uppercase text-sm">Predictions</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="text-5xl font-serif font-bold text-brand-dark mb-4">24/7</div>
          <div className="text-gray-500 font-bold tracking-wide uppercase text-sm">Active Monitoring</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="text-5xl font-serif font-bold text-brand-dark mb-4">&lt;1s</div>
          <div className="text-gray-500 font-bold tracking-wide uppercase text-sm">Response Time</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
