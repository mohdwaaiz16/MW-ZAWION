import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-mw-black text-mw-white">
      <h1 className="text-8xl font-bold tracking-tighter mb-4">404</h1>
      <p className="text-xl mb-8 uppercase tracking-widest font-mono text-mw-muted">This page doesn't exist.</p>
      <Link to="/" className="border border-mw-border px-8 py-4 uppercase tracking-widest text-sm hover:bg-mw-white hover:text-mw-black transition-colors">
        BACK HOME →
      </Link>
    </div>
  );
};

export default NotFound;
