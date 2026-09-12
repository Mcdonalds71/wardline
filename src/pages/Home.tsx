import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CoreCapabilities from '../components/CoreCapabilities';
import TrustedHospitals from '../components/TrustedHospitals';
import TeamSection from '../components/TeamSection';

interface HomeProps {
  onOpenModal: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenModal }) => {
  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      
      {/* 2. Built for - Beautiful Image Background with Blur */}
      <section className="relative py-20 border-y border-gray-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hospital_bg.jpg" alt="Hospital Ward" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-brand-dark font-bold tracking-wide uppercase text-sm mb-8"
          >
            Built for teams who manage patient care for a living
          </motion.p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-2xl md:text-3xl font-serif text-brand-dark">
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-bold hover:text-brand-accent transition cursor-default">Ward Nurses</motion.span>
            <span className="hidden md:block text-gray-400 font-light">|</span>
            <div className="md:hidden w-12 h-px bg-gray-300"></div>
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="font-bold hover:text-brand-accent transition cursor-default">Clinical Directors</motion.span>
            <span className="hidden md:block text-gray-400 font-light">|</span>
            <div className="md:hidden w-12 h-px bg-gray-300"></div>
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="font-bold hover:text-brand-accent transition cursor-default">Hospital Admins</motion.span>
          </div>
        </div>
      </section>

      {/* Stats Section - Intentional and Beautiful */}
      <section className="py-16 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800">
            {[
              { label: "Predictions", value: "12.4M+", desc: "Processed monthly" },
              { label: "Active Monitoring", value: "24/7", desc: "No gaps in care" },
              { label: "Response Time", value: "<1s", desc: "Real-time AI inference" },
              { label: "Clinician Time Saved", value: "3h", desc: "Per shift, per nurse" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="pl-8 first:pl-0 flex flex-col items-start group"
              >
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 group-hover:text-brand-accent transition-colors">{stat.label}</div>
                <div className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustedHospitals />

      {/* 3. Three Pillars (UI Mocks) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold mb-4 text-brand-dark">It listens silently</h3>
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shadow-inner text-lg">98%</div>
              <div>
                <div className="font-bold text-sm text-gray-900">Respiration Stable</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">Continuous observation</div>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="text-xl font-bold mb-4 text-brand-dark">It detects trends</h3>
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm"><span className="font-bold text-gray-900">Heart Rate</span><span className="text-brand-accent font-bold bg-red-50 px-2 py-0.5 rounded text-xs">Trending Up</span></div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-brand-accent h-full rounded-full"></motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="text-xl font-bold mb-4 text-brand-dark">It alerts clinicians</h3>
            <div className="bg-red-50 rounded-2xl p-5 border border-red-100 flex items-center gap-4 relative overflow-hidden">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -right-4 -top-4 w-16 h-16 bg-red-500/10 rounded-full blur-xl"></motion.div>
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-black text-xl shadow-inner border border-red-200">!</div>
              <div className="relative z-10">
                <div className="font-bold text-sm text-red-900">Review Required</div>
                <div className="text-xs text-red-700 mt-1 font-medium">Bed 12 - Intervention needed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Problem vs With Product */}
      <section className="py-24 bg-brand-black text-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16">The old way costs lives.<br/><span className="text-brand-accent">Wardline buys you time.</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 md:p-10 border border-gray-800 rounded-3xl bg-gray-900/50 relative overflow-hidden flex flex-col group hover:bg-gray-900 transition-colors">
              <div className="absolute top-0 right-0 bg-red-500/20 text-red-400 font-bold px-4 py-1.5 rounded-bl-xl text-xs tracking-wider uppercase">Manual Process</div>
              <h3 className="text-2xl font-bold mb-8 mt-4 text-white">Periodic Checks</h3>
              <ul className="space-y-6 text-gray-400 font-medium flex-grow">
                <li className="flex gap-4 items-start"><span className="text-red-400 mt-0.5 text-lg">✗</span> <span>Nurses check vitals every 4-6 hours, creating dangerous gaps.</span></li>
                <li className="flex gap-4 items-start"><span className="text-red-400 mt-0.5 text-lg">✗</span> <span>Critical deterioration happens silently between scheduled rounds.</span></li>
                <li className="flex gap-4 items-start"><span className="text-red-400 mt-0.5 text-lg">✗</span> <span>Alarm fatigue from scattered, non-integrated hardware.</span></li>
              </ul>
              <div className="mt-12 text-5xl font-black text-white opacity-20 group-hover:opacity-30 transition-opacity">Hours</div>
            </div>
            
            <div className="p-8 md:p-10 border border-brand-accent/30 rounded-3xl bg-brand-accent/10 relative overflow-hidden flex flex-col group hover:bg-brand-accent/20 transition-colors shadow-[0_0_40px_rgba(225,70,61,0.1)]">
              <div className="absolute top-0 right-0 bg-brand-accent text-white font-bold px-4 py-1.5 rounded-bl-xl text-xs tracking-wider uppercase shadow-lg">With Wardline</div>
              <h3 className="text-2xl font-bold mb-8 mt-4 text-white">Ambient Intelligence</h3>
              <ul className="space-y-6 text-gray-200 font-medium flex-grow">
                <li className="flex gap-4 items-start"><span className="text-brand-accent mt-0.5 text-lg">✓</span> <span>Constant, non-contact sensing 24/7 with zero patient friction.</span></li>
                <li className="flex gap-4 items-start"><span className="text-brand-accent mt-0.5 text-lg">✓</span> <span>AI spots subtle physiological trends long before a crisis hits.</span></li>
                <li className="flex gap-4 items-start"><span className="text-brand-accent mt-0.5 text-lg">✓</span> <span>Nurses only alerted when targeted clinical intervention is required.</span></li>
              </ul>
              <div className="mt-12 text-5xl font-black text-brand-accent group-hover:scale-105 transform origin-left transition-transform duration-500">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How it works (Pipeline) - Beautified */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">How Wardline protects your ward</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">A seamless pipeline from raw patient telemetry to actionable clinical decisions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[2.5rem] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-gray-100 via-brand-accent/30 to-gray-100 z-0"></div>
          
          {/* Mobile Connecting Line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[2.5rem] w-0.5 bg-gradient-to-b from-gray-100 via-brand-accent/30 to-gray-100 z-0"></div>

          {[
            { step: "1", title: "Ambient Sensing", desc: "Sensors monitor room activity, respiration, and movement silently without wearables." },
            { step: "2", title: "AI Extraction", desc: "Machine learning models parse millions of telemetry data points per minute." },
            { step: "3", title: "Human Review", desc: "Clinicians receive targeted, contextual alerts directly on existing EHR dashboards." },
            { step: "4", title: "Clinical Decision", desc: "Nurses intervene early, backed by a full immutable audit log of patient states." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={{
                hidden: { opacity: 0.5, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="relative z-10 flex flex-row md:flex-col items-center md:text-center gap-6 md:gap-0 group"
            >
              <motion.div 
                variants={{
                  hidden: { scale: 1, borderColor: '#f3f4f6', color: '#111827' },
                  visible: { scale: 1.1, borderColor: '#e1463d', color: '#e1463d', transition: { duration: 0.3 } }
                }}
                className="w-20 h-20 shrink-0 rounded-2xl bg-white flex items-center justify-center text-2xl font-black md:mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 transition-colors md:group-hover:scale-110 md:group-hover:border-brand-accent md:group-hover:text-brand-accent"
              >
                {item.step}
              </motion.div>
              <div>
                <motion.h4 
                  variants={{
                    hidden: { color: '#111827' },
                    visible: { color: '#e1463d' }
                  }}
                  className="text-xl font-bold mb-3 transition-colors md:group-hover:text-brand-accent"
                >
                  {item.title}
                </motion.h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Technology & 7. Features */}
      <CoreCapabilities />

      {/* 8. Market Opportunity & Roadmap */}
      <section className="py-32 bg-gray-50 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">African HealthTech Expansion</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              We built Wardline for the realities of Nigerian hospitals—handling power fluctuations, high patient-to-nurse ratios, and complex legacy EHR integrations. We are now expanding critical care across West and East Africa.
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
               <div className="flex justify-between items-end mb-4">
                 <div className="font-bold text-brand-dark text-lg">Current Deployment Capacity</div>
                 <div className="text-brand-accent font-black text-2xl">85%</div>
               </div>
               <div className="w-full bg-gray-100 h-3 rounded-full mb-6 overflow-hidden">
                 <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1.5, ease: "easeOut" }} className="bg-brand-accent h-full rounded-full"></motion.div>
               </div>
               <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-wider">
                 <span className="text-brand-dark flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Nigeria (Live)</span>
                 <span>Kenya (Q4 Launch)</span>
               </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 text-brand-dark">Infrastructure Roadmap</h3>
            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-green-200 shadow-sm cursor-default">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100"><span className="w-3 h-3 rounded-full bg-green-500"></span></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Shipped</div>
                  <div className="text-gray-500 text-sm font-medium">Azure ML Risk Scoring Engine (v2.4)</div>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-blue-200 shadow-sm cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 bottom-0 w-1 bg-blue-500"></div>
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100"><span className="w-3 h-3 rounded-full bg-blue-500 animate-ping absolute"></span><span className="w-3 h-3 rounded-full bg-blue-500 relative"></span></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">In Progress</div>
                  <div className="text-gray-500 text-sm font-medium">Epic & Cerner EHR Native Sync via FHIR</div>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm cursor-default opacity-70">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100"><span className="w-3 h-3 rounded-full bg-gray-300"></span></div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Planned</div>
                  <div className="text-gray-500 text-sm font-medium">Pediatric specialized ML models</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      {/* 13. Final CTA - Pop up instead of Calendly */}
      <section className="py-32 px-6 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-dark tracking-tight">Turn every patient observation into a <span className="text-brand-accent">decision.</span></h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Stop waiting for the next physical round. Give your clinical team the AI-powered ambient intelligence they need to prevent deterioration before it happens.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenModal}
              className="w-full sm:w-auto bg-brand-red text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-600 transition shadow-[0_10px_30px_rgba(225,70,61,0.3)] hover:shadow-[0_15px_40px_rgba(225,70,61,0.4)] hover:-translate-y-1 transform duration-300 flex items-center justify-center gap-3"
            >
              Get Started with Wardline <span className="text-xl">→</span>
            </button>
            <button 
              onClick={onOpenModal}
              className="w-full sm:w-auto bg-white text-brand-dark px-10 py-5 rounded-2xl font-bold text-lg border border-gray-200 hover:border-brand-dark hover:bg-gray-50 transition duration-300"
            >
              Sign In to Dashboard
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm font-medium text-gray-400">
            <span className="flex items-center gap-2"><span className="text-green-500">✓</span> HIPAA & NDPR Compliant</span>
            <span className="flex items-center gap-2"><span className="text-green-500">✓</span> Microsoft Azure Secured</span>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
