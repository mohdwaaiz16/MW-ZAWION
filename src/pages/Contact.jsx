import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success

  useEffect(() => {
    document.title = "MW Zawion — Start a Project";
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '', email: '', company: '', projectType: '', budget: '', timeline: '', message: ''
      });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-24">
        <h1 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none mb-6">
          LET'S BUILD<br />SOMETHING USEFUL.
        </h1>
        <p className="text-mw-muted text-lg md:text-2xl font-light">
          Tell us what you're trying to build, improve or solve.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Left: Contact Info */}
        <div className="md:col-span-4 flex flex-col gap-12">
          <div>
            <h3 className="text-sm font-mono tracking-widest text-mw-muted uppercase mb-4">LOCATION</h3>
            <p className="font-bold tracking-widest uppercase">Bangalore, India</p>
          </div>
          <div>
            <h3 className="text-sm font-mono tracking-widest text-mw-muted uppercase mb-4">SOCIAL</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-bold tracking-widest uppercase hover:text-mw-accent transition-colors">Instagram</a>
              <a href="#" className="font-bold tracking-widest uppercase hover:text-mw-accent transition-colors">LinkedIn</a>
              <a href="#" className="font-bold tracking-widest uppercase hover:text-mw-accent transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="md:col-span-8">
          {status === 'success' ? (
            <div className="bg-mw-lightgrey border border-mw-border p-12 text-center">
              <div className="w-16 h-16 bg-mw-lime rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-mw-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold tracking-tighter uppercase mb-2">PROJECT RECEIVED</h3>
              <p className="text-mw-muted font-light">We will review your requirements and get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-xs font-bold tracking-widest uppercase border-b border-mw-black pb-1 hover:text-mw-accent transition-colors"
              >
                SUBMIT ANOTHER INQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-mw-muted uppercase">Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-mw-border py-4 focus:outline-none focus:border-mw-black transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-mw-muted uppercase">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-mw-border py-4 focus:outline-none focus:border-mw-black transition-colors" placeholder="jane@company.com" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono tracking-widest text-mw-muted uppercase">Company</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-transparent border-b border-mw-border py-4 focus:outline-none focus:border-mw-black transition-colors" placeholder="Company Name" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-mw-muted uppercase">Project Type</label>
                  <select required name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-transparent border-b border-mw-border py-4 focus:outline-none focus:border-mw-black transition-colors appearance-none rounded-none">
                    <option value="" disabled>Select Type</option>
                    <option value="Website">Website</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Web Application">Web Application</option>
                    <option value="AI System">AI System</option>
                    <option value="Automation">Automation</option>
                    <option value="Digital Experience">Digital Experience</option>
                    <option value="Custom Software">Custom Software</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-mw-muted uppercase">Budget</label>
                  <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-transparent border-b border-mw-border py-4 focus:outline-none focus:border-mw-black transition-colors appearance-none rounded-none">
                    <option value="" disabled>Select Budget</option>
                    <option value="25-50k">₹25K – ₹50K</option>
                    <option value="50-1L">₹50K – ₹1L</option>
                    <option value="1L-3L">₹1L – ₹3L</option>
                    <option value="3L+">₹3L+</option>
                    <option value="Discuss">Let's Discuss</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono tracking-widest text-mw-muted uppercase">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-transparent border-b border-mw-border py-4 focus:outline-none focus:border-mw-black transition-colors resize-none" placeholder="Tell us about your project goals..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="mt-8 self-start bg-mw-black text-mw-white hover:bg-mw-accent transition-colors font-bold tracking-widest uppercase text-sm px-12 py-5 disabled:opacity-50 flex items-center gap-4"
              >
                {status === 'loading' ? 'SENDING...' : 'SEND PROJECT →'}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;
