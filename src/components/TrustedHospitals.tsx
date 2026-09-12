import React from 'react';
import { motion } from 'framer-motion';

const TrustedHospitals: React.FC = () => {
  const hospitals = [
    { name: "Lagos State General", acronym: "LSGH" },
    { name: "National Hospital Abuja", acronym: "NHA" },
    { name: "Reddington Hospital", acronym: "REDDINGTON" },
    { name: "Evercare Hospital", acronym: "EVERCARE" },
    { name: "Kenyatta National", acronym: "KNH" },
    { name: "Euracare Multi-Specialist", acronym: "EURACARE" }
  ];

  // Duplicate array for continuous infinite scroll effect
  const carouselItems = [...hospitals, ...hospitals, ...hospitals];

  return (
    <section className="py-16 md:py-24 border-y border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/3 shrink-0 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark leading-tight">
              Trusted by leading clinical teams across Africa
            </h3>
            <div className="mt-4 w-12 h-1 bg-brand-accent mx-auto md:mx-0 rounded-full"></div>
          </div>

          <div className="md:w-2/3 w-full relative">
            {/* Gradient masks for smooth fade in/out on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex gap-16 items-center shrink-0"
                animate={{ x: [0, -1000] }} // Arbitrary pixel value, but enough to scroll through one set
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 25 // Adjust speed here
                }}
              >
                {carouselItems.map((hospital, index) => (
                  <div key={index} className="flex flex-col items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0 w-[180px]">
                    <div className="text-2xl font-black tracking-tighter font-sans">
                      {hospital.acronym}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 text-center leading-tight">
                      {hospital.name}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedHospitals;
