import React from 'react';

const SceneAISystems = ({ innerRef }) => {
  return (
    <div 
      ref={innerRef}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none opacity-0 scene-ai-container bg-mw-black/80 backdrop-blur-sm"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6 md:px-12 border border-mw-accent/20 bg-mw-dark/30 backdrop-blur-md rounded-2xl p-8 md:p-16 ai-card opacity-0 scale-95">
        <h3 className="text-mw-accent font-mono text-xs tracking-[0.3em] font-bold mb-6">
          AI SYSTEMS
        </h3>
        
        <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-mw-white mb-6">
          TURN REPETITIVE WORK INTO<br />INTELLIGENT WORKFLOWS.
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mb-8">
          {["AI CHATBOTS", "AI CUSTOMER SUPPORT", "LEAD QUALIFICATION", "DOCUMENT PROCESSING", "AI SEARCH", "BUSINESS AUTOMATION", "N8N WORKFLOWS", "CRM AUTOMATION", "AI AGENTS", "INTERNAL AI TOOLS"].map(item => (
            <span key={item} className="text-[10px] md:text-xs font-mono text-mw-muted border border-mw-dark/50 bg-mw-black/50 px-3 py-1 rounded">
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 mt-4">
          <h4 className="text-xl md:text-3xl font-bold text-mw-accent">
            ₹75K – ₹5L+
          </h4>
          <span className="text-[10px] text-mw-muted uppercase tracking-widest max-w-sm">
            Final pricing depends on scope, integrations and complexity.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SceneAISystems;
