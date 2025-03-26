
import React, { useEffect, useRef } from 'react';
import { Layers, Lightbulb, Rocket } from 'lucide-react';

const features = [
  {
    title: "Traditional meets Digital",
    description: "We merge the traditional way of marketing with the modern digital way to create comprehensive strategies that honor proven techniques while embracing innovation.",
    icon: <Layers className="w-8 h-8 text-accent" />,
  },
  {
    title: "Innovation using AI",
    description: "Harness the power of artificial intelligence to gain insights, automate processes, and create cutting-edge marketing solutions that keep you ahead of the competition.",
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
  },
  {
    title: "Strengthen Market Presence",
    description: "Traditional marketing with modern techniques to strengthen market presence, build lasting brand recognition, and create meaningful connections with your audience.",
    icon: <Rocket className="w-8 h-8 text-accent" />,
  },
];

const WhatWeDo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
      
      itemRefs.current.forEach((ref) => {
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
    <section id="what-we-do" className="py-24 bg-background relative overflow-hidden">
      <div className="section-container">
        <div 
          ref={sectionRef} 
          className="text-center max-w-3xl mx-auto animate-on-scroll"
        >
          <h2 className="section-title">What We Do?</h2>
          <p className="section-subtitle">
            We combine expertise, creativity, and technology to deliver exceptional marketing solutions that drive results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className="glass-card p-8 flex flex-col items-start hover-lift animate-on-scroll"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="p-3 rounded-xl bg-secondary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-medium mb-3">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
