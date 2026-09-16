import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold tracking-widest uppercase text-xs md:text-sm px-6 md:px-8 py-3 md:py-4 text-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-mw-accent text-mw-white hover:bg-mw-black shadow-lg shadow-mw-accent/20 border-2 border-mw-accent hover:border-mw-black",
    secondary: "bg-mw-lightgrey text-mw-black hover:bg-mw-border",
    outline: "border-2 border-mw-border text-mw-black hover:border-mw-black",
    dark: "bg-mw-dark text-mw-white hover:bg-mw-black border-2 border-mw-dark",
    accent: "bg-mw-lime text-mw-black hover:bg-mw-white border-2 border-mw-lime hover:border-mw-black",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseClasses} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
