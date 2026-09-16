import React, { useState } from 'react';
import { clsx } from 'clsx';

const ProjectEstimator = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    type: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    details: ''
  });

  const handleSelect = (field, value) => {
    setSelections(prev => ({ ...prev, [field]: value }));
    // Auto advance for first 3 steps
    if (step < 4) {
      setTimeout(() => setStep(step + 1), 400);
    }
  };

  const projectTypes = [
    "Business Website", "E-commerce", "Web Application", 
    "AI Product", "Automation", "Brand Experience", "Something Else"
  ];

  const budgets = [
    "₹25K – ₹50K", "₹50K – ₹1L", "₹1L – ₹3L", "₹3L+"
  ];

  const timelines = [
    "ASAP", "THIS MONTH", "1–3 MONTHS", "JUST EXPLORING"
  ];

  return (
    <section className="w-full bg-mw-black py-32 px-6 md:px-12 relative z-10 border-t border-mw-dark">
      <div className="max-w-4xl mx-auto">
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-16">
          <span className="text-mw-accent font-mono text-xs tracking-widest font-bold">
            0{step} / 04
          </span>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map(s => (
              <div 
                key={s} 
                className={clsx(
                  "w-12 h-[2px] transition-colors duration-300", 
                  s <= step ? "bg-mw-accent" : "bg-mw-dark"
                )}
              />
            ))}
          </div>
        </div>

        {/* Step 1: Type */}
        <div className={clsx("transition-all duration-500", step === 1 ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-10 absolute pointer-events-none")}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-mw-white mb-12">
            WHAT ARE YOU BUILDING?
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            {projectTypes.map(type => (
              <button 
                key={type}
                onClick={() => handleSelect('type', type)}
                className={clsx(
                  "px-6 py-4 text-left md:text-center text-sm md:text-base font-bold tracking-widest uppercase border rounded transition-all duration-300 w-full md:w-auto",
                  selections.type === type 
                    ? "border-mw-accent text-mw-accent bg-mw-accent/10 scale-105" 
                    : "border-mw-dark text-mw-muted hover:border-mw-accent hover:text-mw-white cursor-hover"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Budget */}
        <div className={clsx("transition-all duration-500", step === 2 ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-10 absolute pointer-events-none")}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-mw-white mb-12">
            WHAT'S YOUR APPROXIMATE BUDGET?
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            {budgets.map(budget => (
              <button 
                key={budget}
                onClick={() => handleSelect('budget', budget)}
                className={clsx(
                  "px-8 py-6 text-left md:text-center text-lg md:text-xl font-bold tracking-widest border rounded transition-all duration-300 w-full md:w-auto",
                  selections.budget === budget 
                    ? "border-mw-accent text-mw-accent bg-mw-accent/10 scale-105" 
                    : "border-mw-dark text-mw-muted hover:border-mw-accent hover:text-mw-white cursor-hover"
                )}
              >
                {budget}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Timeline */}
        <div className={clsx("transition-all duration-500", step === 3 ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-10 absolute pointer-events-none")}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-mw-white mb-12">
            HOW SOON DO YOU WANT TO START?
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            {timelines.map(timeline => (
              <button 
                key={timeline}
                onClick={() => handleSelect('timeline', timeline)}
                className={clsx(
                  "px-8 py-6 text-left md:text-center text-sm md:text-lg font-bold tracking-widest border rounded transition-all duration-300 w-full md:w-auto",
                  selections.timeline === timeline 
                    ? "border-mw-accent text-mw-accent bg-mw-accent/10 scale-105" 
                    : "border-mw-dark text-mw-muted hover:border-mw-accent hover:text-mw-white cursor-hover"
                )}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Details */}
        <div className={clsx("transition-all duration-500", step === 4 ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-10 absolute pointer-events-none")}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-mw-white mb-12">
            TELL US A BIT MORE.
          </h2>
          <form className="flex flex-col gap-6 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="text" 
                placeholder="Name"
                className="flex-1 bg-transparent border-b border-mw-dark pb-2 text-mw-white focus:outline-none focus:border-mw-accent transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="flex-1 bg-transparent border-b border-mw-dark pb-2 text-mw-white focus:outline-none focus:border-mw-accent transition-colors"
              />
            </div>
            <input 
              type="text" 
              placeholder="Company / Brand"
              className="w-full bg-transparent border-b border-mw-dark pb-2 text-mw-white focus:outline-none focus:border-mw-accent transition-colors"
            />
            <textarea 
              placeholder="Project Description (Optional)"
              rows={4}
              className="w-full bg-transparent border-b border-mw-dark pb-2 text-mw-white focus:outline-none focus:border-mw-accent transition-colors resize-none"
            />
            
            <button className="mt-8 px-8 py-4 bg-mw-accent text-mw-black font-bold tracking-widest uppercase hover:bg-mw-white transition-colors self-start cursor-hover">
              GET A PROJECT ESTIMATE →
            </button>
          </form>
        </div>

        {/* Back Button */}
        {step > 1 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="mt-16 text-xs font-bold tracking-widest text-mw-muted uppercase hover:text-mw-white transition-colors"
          >
            ← BACK
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectEstimator;
