
import React, { useEffect, useRef } from 'react';
import { TrendingUp, FileCode, Cpu, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Trends Up to Date",
    description: "Explore the latest developments in digital marketing with our innovative solutions, designed to position you at the forefront of change and stay ahead of the competition.",
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    delay: 0.1,
  },
  {
    title: "Strategy Creator",
    description: "Transcend the boundaries of traditional content with visionary solutions that drive authentic connection with your audience, allowing every story to become a winning strategy.",
    icon: <FileCode className="w-8 h-8 text-accent" />,
    delay: 0.2,
  },
  {
    title: "Cutting-edge Automation",
    description: "Discover how technology redefines marketing with tools that anticipate every market movement, allowing you to focus on the strategies that transform your business.",
    icon: <Cpu className="w-8 h-8 text-accent" />,
    delay: 0.3,
  },
  {
    title: "Moveurads with AI",
    description: "Discover innovative ways to excel in the digital realm. With our cutting-edge approach, we transform ideas into effective strategies that challenge established norms.",
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    delay: 0.4,
  }
];

const OurServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observeElements = () => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class but don't remove visibility
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      }, options);
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
      
      return observer;
    };
    
    const observer = observeElements();
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-secondary/40 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(220,220,220,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(220,220,220,0.1)_1px,transparent_1px)] bg-[size:40px_40px] z-0" 
        aria-hidden="true" 
      />
      
      <div className="section-container relative z-10">
        <div 
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto animate-on-scroll"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital marketing solutions tailored to your unique business needs and goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => serviceRefs.current[index] = el}
              className="glass-card p-8 flex flex-col hover-lift animate-on-scroll"
              style={{ animationDelay: `${service.delay}s` }}
            >
              <div className="p-3 rounded-xl bg-secondary mb-6 self-start">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-medium mb-3">{service.title}</h3>
              <p className="text-foreground/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
