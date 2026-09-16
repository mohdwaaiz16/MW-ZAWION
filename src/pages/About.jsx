import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = "MW Zawion — About";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-32">
        <h1 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none mb-6">
          ABOUT MW ZAWION.
        </h1>
        <p className="text-mw-muted text-lg md:text-2xl font-light max-w-3xl leading-relaxed">
          MW Zawion is a digital product and technology studio based in Bangalore, India. We bring together design, software engineering and emerging technologies to create digital products and systems for ambitious businesses.
        </p>
      </div>

      {/* Founder Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-mw-border pt-16 flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/3">
            <div className="w-32 h-32 bg-mw-lightgrey mb-6 rounded-full overflow-hidden border border-mw-border">
              {/* Placeholder for portrait */}
              <div className="w-full h-full bg-mw-muted/20"></div>
            </div>
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-2">MOHAMMED WAAIZ</h2>
            <span className="text-xs font-mono tracking-widest text-mw-muted uppercase">Founder / Builder</span>
          </div>
          
          <div className="md:w-2/3 flex flex-col gap-12">
            <div>
              <h3 className="text-sm font-mono tracking-widest text-mw-muted uppercase mb-4">BACKGROUND</h3>
              <p className="text-lg font-light leading-relaxed">
                Focused on bridging the gap between high-end design and robust engineering, Mohammed leads the technical and creative direction at MW Zawion, ensuring every project is both beautiful and functional at scale.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-mono tracking-widest text-mw-muted uppercase mb-4">TECHNOLOGY & STACK</h3>
              <div className="flex flex-wrap gap-4">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'AI / LLMs', 'Automation', 'Supabase', 'PostgreSQL'].map(tech => (
                  <span key={tech} className="border border-mw-border px-4 py-2 text-sm font-mono tracking-widest uppercase bg-mw-lightgrey">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default About;
