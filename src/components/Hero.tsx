import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative w-full h-[100dvh] min-h-[550px] flex items-center overflow-hidden pt-20">
      
      {/* Full-width Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Triangular Blurred Frame (Starts from the RIGHT edge of the screen, restricted to bottom right) */}
      <div 
        className="absolute bottom-0 right-0 w-[95vw] md:w-[70vw] lg:w-[55vw] h-[45vh] md:h-[60vh] bg-white/10 backdrop-blur-md pointer-events-none z-10"
        style={{ clipPath: 'polygon(100% 20%, 100% 100%, 0 100%)' }}
      ></div>

      {/* Content Container with Margins */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 flex flex-col pt-4 md:pt-12 pb-4 md:pb-6">
        
        {/* Top Typography - Strict 2-line layout, reduced font size for breathing room */}
        <div className="w-full flex flex-col gap-2 mt-4 md:mt-12 pointer-events-none">
          <motion.div 
            className="w-full text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-serif font-black text-white uppercase tracking-tighter leading-tight md:leading-none">
              SOMETHING CHANGED
            </h1>
          </motion.div>

          <motion.div 
            className="w-full text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[4.5rem] font-serif font-black text-white uppercase tracking-tighter leading-tight md:leading-none text-gray-200 mt-2 md:mt-0">
              WARDLINE NOTICED FIRST
            </h1>
          </motion.div>
        </div>

        {/* Subtitle - Reduced font size and margins to save vertical space */}
        <motion.p 
          className="text-sm md:text-base lg:text-lg text-gray-300 max-w-xl mt-8 md:mt-12 font-medium leading-relaxed border-l-4 border-brand-accent pl-4 md:pl-6 self-start md:ml-12"
          initial={{ opacity: 0, opacity: 0 }}
          animate={{ opacity: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          We turn heart rate, respiration, temperature, and movement into one unified AI observation, giving nurses the critical minutes they need before a crisis happens.
        </motion.p>

        {/* Bottom Right CTA Button (Positioned inside the visual triangle) */}
        <motion.div 
          className="mt-auto self-end mb-4 md:mb-8 md:mr-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <button 
            onClick={onOpenModal}
            className="bg-brand-red text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-red-600 transition shadow-[0_4px_14px_0_rgb(225,70,61,0.39)] hover:shadow-[0_6px_20px_rgba(225,70,61,0.23)] hover:-translate-y-0.5 transform duration-200"
          >
            Get started
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
