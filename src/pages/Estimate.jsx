import React, { useState, useEffect } from 'react';
import Button from '../components/UI/Button';
import { useSearchParams } from 'react-router-dom';

const Estimate = () => {
  const [searchParams] = useSearchParams();
  
  const [formData, setFormData] = useState({
    projectType: searchParams.get('type') || '',
    budget: searchParams.get('budget') || searchParams.get('package') || '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    description: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    document.title = "MW Zawion — Project Estimate";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="w-full bg-mw-white min-h-[80vh] text-mw-black pt-32 pb-48 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-mw-lime text-mw-black rounded-full flex items-center justify-center text-3xl mx-auto mb-8">
            ✓
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6">
            REQUEST RECEIVED.
          </h1>
          <p className="text-mw-muted text-lg font-light mb-12">
            Thank you, {formData.name}. We've received your project details and will be in touch shortly to discuss the next steps.
          </p>
          <Button to="/">RETURN HOME →</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-mw-accent font-bold tracking-widest uppercase block mb-4">
            START A PROJECT
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none mb-6">
            LET'S TALK ABOUT IT.
          </h1>
          <p className="text-mw-muted text-lg md:text-xl font-light">
            Tell us what you're trying to build, improve or solve.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* Step 1 */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tighter uppercase border-b border-mw-border pb-4">01. WHAT ARE YOU BUILDING?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {['Website', 'E-commerce', 'Web Application', 'AI System', 'Automation', 'Digital Experience', 'Custom'].map(type => (
                <label key={type} className={`cursor-pointer p-4 border-2 rounded-xl transition-all ${formData.projectType === type ? 'border-mw-accent bg-mw-softblue text-mw-accent' : 'border-mw-border text-mw-muted hover:border-mw-black hover:text-mw-black'}`}>
                  <input type="radio" name="projectType" value={type} className="hidden" onChange={handleChange} checked={formData.projectType === type} />
                  <span className="font-bold text-sm tracking-widest uppercase">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tighter uppercase border-b border-mw-border pb-4">02. BUDGET RANGE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {['Launch (₹25K+)', 'Growth (₹50K+)', 'Scale (₹1L+)', 'Custom (₹2L+)', 'AI Systems (₹75K+)', 'Not Sure'].map(budget => (
                <label key={budget} className={`cursor-pointer p-4 border-2 rounded-xl transition-all ${formData.budget === budget ? 'border-mw-accent bg-mw-softblue text-mw-accent' : 'border-mw-border text-mw-muted hover:border-mw-black hover:text-mw-black'}`}>
                  <input type="radio" name="budget" value={budget} className="hidden" onChange={handleChange} checked={formData.budget === budget} />
                  <span className="font-bold text-sm tracking-widest uppercase">{budget.split(' (')[0]}</span>
                  {budget.includes('(') && <span className="block text-xs font-mono mt-1 opacity-70">{budget.split(' (')[1].replace(')', '')}</span>}
                </label>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tighter uppercase border-b border-mw-border pb-4">03. TIMELINE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {['ASAP', '2–4 weeks', '1–2 months', '2–3 months', 'Flexible'].map(timeline => (
                <label key={timeline} className={`cursor-pointer p-4 border-2 rounded-xl transition-all ${formData.timeline === timeline ? 'border-mw-accent bg-mw-softblue text-mw-accent' : 'border-mw-border text-mw-muted hover:border-mw-black hover:text-mw-black'}`}>
                  <input type="radio" name="timeline" value={timeline} className="hidden" onChange={handleChange} checked={formData.timeline === timeline} />
                  <span className="font-bold text-sm tracking-widest uppercase">{timeline}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Step 4 */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tighter uppercase border-b border-mw-border pb-4">04. YOUR DETAILS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-mw-muted mb-2">Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-mw-lightgrey border-0 rounded-xl px-4 py-4 text-mw-black focus:ring-2 focus:ring-mw-accent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-mw-muted mb-2">Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-mw-lightgrey border-0 rounded-xl px-4 py-4 text-mw-black focus:ring-2 focus:ring-mw-accent outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold tracking-widest uppercase text-mw-muted mb-2">Company / Organization</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-mw-lightgrey border-0 rounded-xl px-4 py-4 text-mw-black focus:ring-2 focus:ring-mw-accent outline-none transition-all" />
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tighter uppercase border-b border-mw-border pb-4">05. THE PROJECT</h2>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-mw-muted mb-2">Describe what you want to build *</label>
              <textarea required rows="6" name="description" value={formData.description} onChange={handleChange} className="w-full bg-mw-lightgrey border-0 rounded-xl px-4 py-4 text-mw-black focus:ring-2 focus:ring-mw-accent outline-none transition-all resize-none"></textarea>
            </div>
          </div>

          <div className="pt-8">
            <Button type="submit" variant="primary" disabled={status === 'loading'} className="w-full md:w-auto">
              {status === 'loading' ? 'SENDING...' : 'GET MY PROJECT STARTED →'}
            </Button>
          </div>
          
          {status === 'error' && (
             <p className="text-mw-coral text-sm mt-4">There was an error sending your request. Please try again.</p>
          )}

        </form>
      </div>
    </div>
  );
};

export default Estimate;
