import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    services: [] as string[],
    budget: '',
    timeline: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Calculate Progress
  const requiredFields = ['name', 'business', 'email', 'description'];
  const filledRequired = requiredFields.filter(field => !!formData[field as keyof typeof formData]).length;
  const hasServices = formData.services.length > 0;
  const hasBudget = !!formData.budget;
  const hasTimeline = !!formData.timeline;
  
  const totalScore = filledRequired + (hasServices ? 1 : 0) + (hasBudget ? 1 : 0) + (hasTimeline ? 1 : 0);
  const maxScore = requiredFields.length + 3; // 4 + 3 = 7
  const progressPercentage = Math.round((totalScore / maxScore) * 100);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (progressPercentage < 50) return; // Basic validation
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <main ref={containerRef} className="w-full bg-mw-black pt-24 min-h-screen text-mw-offwhite">
      
      {/* 03 HERO */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-widest text-mw-orange mb-8 uppercase"
        >
          CONTACT / 05
        </motion.div>
        
        <div className="max-w-6xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-[9rem] font-bold uppercase tracking-tighter leading-[0.85]"
          >
            Got <br />
            Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mw-orange via-mw-pink to-mw-purple">To Build?</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-12 text-white/60 max-w-xl text-lg md:text-xl font-light leading-relaxed"
          >
            Tell us what you're building, what you're trying to solve and where you want to take it. We'll figure out the digital side.
          </motion.p>
        </div>
        
        <motion.div 
          animate={{ 
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-mw-orange/20 to-mw-pink/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
        />
      </section>

      {/* 04 DIRECT CONTACT BAR */}
      <section className="py-24 px-6 md:px-12 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tighter text-white/40">
            Prefer Talking?
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 w-full md:w-auto">
            <a href="https://wa.me/917200895492" target="_blank" rel="noreferrer" data-cursor="hover" className="flex flex-col gap-2 group">
              <span className="text-xs font-bold tracking-widest uppercase text-mw-green group-hover:text-white transition-colors">WhatsApp</span>
              <span className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-mw-green transition-colors flex items-center gap-4">
                Let's Chat <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
              </span>
            </a>
            <div className="hidden sm:block w-px h-24 bg-white/10" />
            <a href="mailto:mwzawion@gmail.com" data-cursor="hover" className="flex flex-col gap-2 group">
              <span className="text-xs font-bold tracking-widest uppercase text-mw-purple group-hover:text-white transition-colors">Email</span>
              <span className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-mw-purple transition-colors flex items-center gap-4">
                mwzawion <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 05 MAIN PROJECT FORM */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto">
          
          <AnimatePresence mode="wait">
            {submitStatus === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24"
              >
                <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter text-mw-green mb-8">
                  Idea Received. 🚀
                </h2>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-16">
                  Thanks for reaching out. We've got the details. We'll review your project and get back to you.
                </p>
                <div className="flex justify-center gap-6">
                  <a href="/" className="bg-white text-black font-bold px-8 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-mw-green transition-colors">
                    BACK TO HOME →
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-24"
              >
                <div className="flex flex-col gap-4">
                  <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                    Tell Us <br />
                    <span className="text-mw-orange">About The Project.</span>
                  </h2>
                  <p className="text-white/50 text-lg">
                    Don't worry about having everything figured out. Give us the basics and we'll take it from there.
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="sticky top-24 z-20 bg-mw-black/80 backdrop-blur-md py-4 border-b border-white/10 -mx-6 px-6 md:mx-0 md:px-0">
                  <div className="flex justify-between text-xs font-bold tracking-widest uppercase mb-4">
                    <span className="text-white/40">Project Brief</span>
                    <span className={progressPercentage === 100 ? "text-mw-green" : "text-mw-orange"}>{progressPercentage}% Complete</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${progressPercentage === 100 ? 'bg-mw-green' : 'bg-gradient-to-r from-mw-orange to-mw-pink'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Text Inputs */}
                <div className="flex flex-col gap-16">
                  {[
                    { id: 'name', label: '01 — Your Name', placeholder: 'What should we call you?', type: 'text', required: true },
                    { id: 'business', label: '02 — Business / Brand', placeholder: 'Your company, brand or project', type: 'text', required: true },
                    { id: 'email', label: '03 — Email', placeholder: 'you@example.com', type: 'email', required: true },
                    { id: 'phone', label: '04 — Phone / WhatsApp (Optional)', placeholder: '+91 XXXXX XXXXX', type: 'tel', required: false },
                  ].map(field => (
                    <div key={field.id} className="flex flex-col gap-6">
                      <label htmlFor={field.id} className="text-sm font-bold tracking-widest uppercase text-white/60">
                        {field.label} {field.required && <span className="text-mw-orange">*</span>}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        value={formData[field.id as keyof typeof formData] as string}
                        onChange={(e) => setFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="bg-transparent border-b border-white/20 pb-4 text-2xl md:text-4xl font-display outline-none focus:border-mw-orange transition-colors placeholder:text-white/10 text-white w-full rounded-none"
                      />
                    </div>
                  ))}
                </div>

                {/* Services Selection */}
                <div className="flex flex-col gap-8">
                  <label className="text-sm font-bold tracking-widest uppercase text-white/60">
                    05 — What are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['Web Design', 'Web Development', 'UI/UX Design', 'E-commerce', 'Branding', 'AI & Automation', 'Maintenance', 'Something Else'].map(service => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-6 py-4 rounded-full border text-sm font-bold tracking-widest uppercase transition-all ${
                          formData.services.includes(service)
                            ? 'bg-mw-purple border-mw-purple text-white'
                            : 'bg-transparent border-white/20 text-white/60 hover:border-white/60 hover:text-white'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection */}
                <div className="flex flex-col gap-8">
                  <label className="text-sm font-bold tracking-widest uppercase text-white/60">
                    06 — Project Budget
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['₹5K – ₹15K', '₹15K – ₹30K', '₹30K – ₹50K', '₹50K – ₹1L', '₹1L+', 'NOT SURE YET'].map(budget => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, budget }))}
                        className={`px-6 py-4 rounded-full border text-sm font-bold tracking-widest uppercase transition-all ${
                          formData.budget === budget
                            ? 'bg-mw-pink border-mw-pink text-white'
                            : 'bg-transparent border-white/20 text-white/60 hover:border-white/60 hover:text-white'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-6">
                  <label htmlFor="description" className="text-sm font-bold tracking-widest uppercase text-white/60">
                    08 — Tell Us About It <span className="text-mw-orange">*</span>
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="What's the idea? What are you trying to build? What problem are you trying to solve?"
                    required
                    rows={4}
                    className="bg-transparent border-b border-white/20 pb-4 text-xl md:text-3xl font-display outline-none focus:border-mw-orange transition-colors placeholder:text-white/10 text-white w-full rounded-none resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-12">
                  <button
                    type="submit"
                    disabled={isSubmitting || progressPercentage < 50}
                    className="group relative w-full overflow-hidden rounded-full bg-white px-8 py-8 md:py-12 text-center text-mw-black disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-mw-orange to-mw-pink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                    <span className="relative z-10 font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter flex items-center justify-center gap-4 group-hover:text-white transition-colors">
                      {isSubmitting ? 'Sending Your Idea...' : 'Send The Idea →'}
                    </span>
                  </button>
                  {submitStatus === 'error' && (
                    <p className="text-red-500 mt-4 text-center font-medium">Something went wrong. Please try again.</p>
                  )}
                </div>

              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 16 FAQ SECTION */}
      <section className="py-32 px-6 md:px-12 bg-mw-black border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-16">
            Frequently <br /> <span className="text-mw-purple">Asked.</span>
          </h2>
          <div className="flex flex-col border-t border-white/10">
            {[
              { q: 'How does a project start?', a: 'We start by understanding your goals, audience, requirements and scope before defining the right approach.' },
              { q: 'What kind of projects do you work on?', a: 'We work across websites, digital products, e-commerce, branding, UI/UX, AI and automation, and ongoing digital experiences.' },
              { q: 'Do you work with startups?', a: 'Yes. The process can adapt depending on the stage, scope and goals of the project.' },
              { q: 'Can you redesign an existing website?', a: 'Yes. We can review the existing experience and improve its design, usability, performance and technical implementation where appropriate.' },
            ].map((faq, i) => (
              <details key={i} className="group border-b border-white/10 py-8 cursor-pointer">
                <summary className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tighter list-none flex justify-between items-center group-hover:text-mw-purple transition-colors">
                  {faq.q}
                  <span className="text-3xl font-light opacity-50 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-6 text-white/60 text-lg leading-relaxed max-w-2xl">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
