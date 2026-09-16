import React, { useState } from 'react';
import clsx from 'clsx';

const ProjectEstimator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    description: ''
  });

  const types = ["Business Website", "E-commerce", "Web Application", "AI Product", "Automation", "Brand Experience", "Other"];
  const budgets = ["₹25K–₹50K", "₹50K–₹1L", "₹1L–₹3L", "₹3L+"];
  const timelines = ["ASAP", "THIS MONTH", "1–3 MONTHS", "EXPLORING"];

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => setStep(prev => prev + 1), 300); // auto advance
  };

  return (
    <div className="w-full min-h-screen bg-mw-black pt-32 pb-32 flex flex-col items-center justify-center relative">
      <div className="max-w-4xl w-full mx-auto px-6 md:px-12 relative z-10">
        
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-mw-white uppercase mb-16">WHAT ARE YOU BUILDING?</h2>
            <div className="flex flex-wrap gap-4">
              {types.map(t => (
                <button 
                  key={t}
                  onClick={() => handleSelect('type', t)}
                  className={clsx(
                    "text-xl md:text-3xl font-bold tracking-tighter uppercase px-8 py-6 transition-colors border",
                    formData.type === t ? "bg-mw-white text-mw-black border-mw-white" : "text-mw-muted border-mw-dark hover:border-mw-muted hover:text-mw-white"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-mw-white uppercase mb-16">APPROXIMATE BUDGET?</h2>
            <div className="flex flex-col gap-4">
              {budgets.map(b => (
                <button 
                  key={b}
                  onClick={() => handleSelect('budget', b)}
                  className={clsx(
                    "text-2xl md:text-5xl font-mono tracking-tighter uppercase py-8 text-left border-b transition-colors",
                    formData.budget === b ? "text-mw-white border-mw-white" : "text-mw-muted border-mw-dark hover:text-mw-white"
                  )}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-mw-white uppercase mb-16">WHEN DO YOU WANT TO START?</h2>
            <div className="flex flex-col gap-4">
              {timelines.map(t => (
                <button 
                  key={t}
                  onClick={() => handleSelect('timeline', t)}
                  className={clsx(
                    "text-2xl md:text-5xl font-bold tracking-tighter uppercase py-8 text-left border-b transition-colors",
                    formData.timeline === t ? "text-mw-white border-mw-white" : "text-mw-muted border-mw-dark hover:text-mw-white"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 w-full">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-mw-white uppercase mb-16">LET'S GET TO IT.</h2>
            <form className="flex flex-col gap-12 w-full">
              <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-mw-dark py-4 text-xl md:text-3xl font-bold tracking-tighter text-mw-white placeholder-mw-muted focus:outline-none focus:border-mw-white transition-colors" />
              <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-mw-dark py-4 text-xl md:text-3xl font-bold tracking-tighter text-mw-white placeholder-mw-muted focus:outline-none focus:border-mw-white transition-colors" />
              <input type="text" placeholder="COMPANY (OPTIONAL)" className="w-full bg-transparent border-b border-mw-dark py-4 text-xl md:text-3xl font-bold tracking-tighter text-mw-white placeholder-mw-muted focus:outline-none focus:border-mw-white transition-colors" />
              <textarea placeholder="PROJECT DESCRIPTION" rows="4" className="w-full bg-transparent border-b border-mw-dark py-4 text-xl md:text-3xl font-bold tracking-tighter text-mw-white placeholder-mw-muted focus:outline-none focus:border-mw-white transition-colors resize-none"></textarea>
              
              <button type="submit" className="self-start mt-8 text-mw-black bg-mw-white hover:bg-mw-lightgrey transition-colors font-bold tracking-widest uppercase text-sm md:text-lg px-12 py-6">
                GET A PROJECT ESTIMATE →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectEstimator;
