import React from 'react';

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Dr. Amaka Balogun",
      role: "Chief Medical Officer",
      credibility: "Ex-Clinical Director, LUTH Intensive Care",
      image: `${import.meta.env.BASE_URL}images/amaka.jpg`
    },
    {
      name: "Chinedu Okafor",
      role: "Lead AI Engineer",
      credibility: "Ex-Microsoft Azure ML, HealthTech Specialist",
      image: `${import.meta.env.BASE_URL}images/chinedu.jpg`
    },
    {
      name: "Ngozi Adebayo",
      role: "Head of Operations",
      credibility: "Scaled Evercare operations across West Africa",
      image: `${import.meta.env.BASE_URL}images/ngozi.jpg`
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Built by clinicians and engineers</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">We understand the reality of high-volume African wards because we've worked in them.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500 relative">
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-1">{member.name}</h3>
            <p className="text-brand-accent font-bold text-sm tracking-wide uppercase mb-3">{member.role}</p>
            <p className="text-gray-500 text-center font-medium text-sm px-4 mb-4">{member.credibility}</p>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
