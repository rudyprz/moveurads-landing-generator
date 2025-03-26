
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple parallax effect
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY / 700, 0.2);
        const transform = `translateY(${scrollY * 0.3}px)`;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = transform;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary/30 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-background to-secondary/50"
        aria-hidden="true"
      />
      
      {/* Background pattern/grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,220,220,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,220,220,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0" aria-hidden="true" />
      
      <div 
        ref={heroRef}
        className="relative z-10 section-container pt-32 lg:pt-40 flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-center leading-tight md:leading-tight max-w-5xl animate-fade-in">
          Transform Digital Opportunities Into&nbsp;
          <span className="relative inline-block">
            Impact
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent/20"></span>
          </span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-center text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
          In the fast-paced world of digital marketing, we are proud to be at the forefront, innovating with bold strategies that break the mold and redefine success. Our vision is to transform digital opportunities into impactful realities for your business.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <a 
            href="#book-appointment" 
            className="px-7 py-3 rounded-full bg-accent text-accent-foreground font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:brightness-110"
          >
            Book a Free Call <ArrowRight size={18} />
          </a>
          <a 
            href="#services" 
            className="px-7 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/70 transition-all"
          >
            Explore Services
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-8 h-12 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-foreground/40 rounded-full animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
