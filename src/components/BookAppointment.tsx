
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AppointmentBenefits from './appointment/AppointmentBenefits';
import AppointmentForm from './appointment/AppointmentForm';

const BookAppointment = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Remove the opacity-0 class by default to ensure elements are visible even without JS
    if (sectionRef.current) {
      sectionRef.current.classList.remove('opacity-0');
    }
    
    const observeSection = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            sectionRef.current?.classList.add('animate-fade-in');
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      return observer;
    };
    
    const observer = observeSection();
    return () => observer.disconnect();
  }, []);

  return (
    <section id="book-appointment" className="py-24 bg-background relative">
      <div 
        className="absolute right-0 top-0 w-full lg:w-1/2 h-1/3 lg:h-full bg-accent/5 z-0" 
        aria-hidden="true" 
      />
      
      <div 
        ref={sectionRef}
        className="section-container relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AppointmentBenefits />
          </div>
          
          <div className="relative">
            {/* Adjusted positioning for the circular image */}
            <div className="hidden lg:block absolute -left-28 -top-20 w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white z-10 animate-pulse-soft">
              <img
                src="/lovable-uploads/64ae0a20-d3ed-41f5-adbe-68c4b8fb645e.png"
                alt="Marketing consultant ready to help you"
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="glass-card p-8 md:p-10">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
