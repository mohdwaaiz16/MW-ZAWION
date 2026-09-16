import React, { useEffect } from 'react';

const Insights = () => {
  useEffect(() => {
    document.title = "MW Zawion — Insights";
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    { title: "Building Headless E-Commerce in 2026", category: "Technology", date: "SEPT 12, 2026" },
    { title: "The Value of Custom Internal Tools", category: "Business", date: "AUG 28, 2026" },
    { title: "Integrating AI Agents into Enterprise Workflows", category: "AI", date: "AUG 15, 2026" },
    { title: "Why We Use Next.js for B2B Dashboards", category: "Engineering", date: "JULY 30, 2026" },
    { title: "The End of Generic SaaS Templates", category: "Design", date: "JULY 12, 2026" }
  ];

  return (
    <div className="w-full bg-mw-white min-h-screen text-mw-black pt-32 pb-48">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 mb-32">
        <h1 className="text-5xl md:text-[6vw] font-bold tracking-tighter uppercase leading-none mb-6">
          INSIGHTS
        </h1>
        <p className="text-mw-muted text-lg md:text-2xl font-light max-w-2xl">
          Thoughts on technology, design, and building better digital businesses.
        </p>
      </div>

      {/* Article List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col border-t border-mw-border">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-mw-border group cursor-hover">
              
              <div className="md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase group-hover:text-mw-accent transition-colors mb-2 md:mb-0">
                  {article.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-8 md:w-1/3 justify-between md:justify-end mt-4 md:mt-0 w-full">
                <span className="text-xs font-mono tracking-widest text-mw-muted uppercase">{article.category}</span>
                <span className="text-xs font-mono tracking-widest text-mw-black uppercase">{article.date}</span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Insights;
