import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/TeamSection';
import { Heart, Shield, Activity, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
            className="text-brand-accent font-bold tracking-wide uppercase text-sm mb-6"
          >
            Our Origin
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-8 leading-tight"
          >
            Built by clinicians, <br/><span className="text-gray-400">for clinicians.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 font-medium leading-relaxed"
          >
            We are on a mission to eliminate preventable patient deterioration in African healthcare by transforming how wards monitor critical vitals.
          </motion.p>
        </div>
      </section>

      {/* The Story - Side by Side */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
          >
            <div className="absolute inset-0 bg-brand-dark/20 z-10"></div>
            <img src="/images/hospital_bg.jpg" alt="Hospital Ward" className="w-full h-full object-cover" />
            
            {/* Overlay Stat Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl z-20 shadow-lg border border-white/50">
              <div className="text-3xl font-black text-brand-dark mb-1">15:1</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Average Patient-to-Nurse Ratio</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-brand-dark">The reality of the ward</h3>
            <div className="space-y-6 text-gray-600 font-medium leading-relaxed text-lg">
              <p>
                Wardline was founded by a team of Nigerian medical professionals and AI engineers who witnessed the devastating effects of manual patient monitoring in high-volume wards.
              </p>
              <p>
                When a single nurse is responsible for 15+ patients, taking vitals every 4-6 hours is the best they can do. But critical deterioration—respiratory failure, cardiac arrest, sepsis—does not happen on a schedule. It happens in the dangerous, unmonitored hours between rounds.
              </p>
              <p className="font-bold text-brand-dark border-l-4 border-brand-accent pl-6 py-2">
                "We built Wardline to act as an unblinking eye on the ward. By turning ambient sensors into a unified clinical AI, we give nurses the power to intervene before a crisis happens."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Our Clinical Values</h2>
            <p className="text-gray-500 text-lg font-medium">The principles guiding every line of code we write.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart size={32} />, title: "Patient Dignity", desc: "Our ambient sensors monitor vitals without cameras or physical restraints, preserving total patient privacy and comfort." },
              { icon: <Users size={32} />, title: "Clinician First", desc: "We build tools to empower nurses, not replace them. Wardline eliminates alarm fatigue so clinicians can focus on care." },
              { icon: <Shield size={32} />, title: "Zero Trust Security", desc: "Patient data is sacred. We utilize Microsoft Azure's sovereign cloud infrastructure to ensure compliance with NDPR and HIPAA." },
              { icon: <Activity size={32} />, title: "Predictive Precision", desc: "We don't just record data; we interpret it. Our AI models are trained on diverse African datasets to recognize localized deterioration patterns." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-dark/5 text-brand-dark flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-3">{value.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section is imported here */}
      <div className="pt-24">
        <TeamSection />
      </div>

    </div>
  );
};

export default About;
