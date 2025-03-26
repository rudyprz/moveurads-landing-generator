
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Services', href: '#services' },
    { label: 'Book Now', href: '#book-appointment' },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" 
        : "py-5 bg-transparent"
    )}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-display font-medium tracking-tight">
            Moveur<span className="text-accent">ads</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book-appointment"
            className="px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium transition-all hover:shadow-md hover:brightness-110"
          >
            Book a Free Call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-background flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 ease-in-out md:hidden z-40",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book-appointment"
            className="mt-4 px-5 py-3 rounded-full bg-accent text-accent-foreground text-base font-medium text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Free Call
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
