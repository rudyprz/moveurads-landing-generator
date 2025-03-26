
import React, { useEffect, useRef } from 'react';
import { Layers, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "Traditional meets Digital",
    description: "We merge the traditional way of marketing with the modern digital way to create comprehensive strategies that honor proven techniques while embracing innovation.",
    icon: <Layers className="w-8 h-8 text-accent" />,
    image: "/lovable-uploads/5073f672-ecac-43bf-9334-de080f43284c.png"
  },
  {
    title: "Innovation using AI",
    description: "Harness the power of artificial intelligence to gain insights, automate processes, and create cutting-edge marketing solutions that keep you ahead of the competition.",
    icon: <Lightbulb className="w-8 h-8 text-accent" />,
    image: "/lovable-uploads/4aa3e2fa-a92d-462b-a926-7ad63166abb9.png"
  },
  {
    title: "Strengthen Market Presence",
    description: "Traditional marketing with modern techniques to strengthen market presence, build lasting brand recognition, and create meaningful connections with your audience.",
    icon: <Rocket className="w-8 h-8 text-accent" />,
    image: "/lovable-uploads/e7ee42b9-a419-4df1-8fd2-6b55d449dbe0.png"
  },
];

const WhatWeDo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Remove the opacity-0 class by default to ensure elements are visible even without JS
    if (sectionRef.current) {
      sectionRef.current.classList.remove('opacity-0');
    }
    
    itemRefs.current.forEach(ref => {
      if (ref) ref.classList.remove('opacity-0');
    });
    
    const observeElements = () => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class only
            entry.target.classList.add('animate-fade-in');
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
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="section-title">What We Do?</h2>
          <p className="section-subtitle">
            We combine expertise, creativity, and technology to deliver exceptional marketing solutions that drive results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              ref={el => itemRefs.current[index] = el}
              className="overflow-hidden hover-lift border-none"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-secondary mb-4 inline-block -mt-12 relative z-10 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-medium mb-3">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
