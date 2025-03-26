
import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

const BookAppointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // This would normally send data to a server
    console.log({ name, email, company });
    
    // Show success state
    setSubmitted(true);
    toast({
      title: "Appointment requested!",
      description: "We'll contact you soon to confirm your free consultation.",
    });
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setName('');
      setEmail('');
      setCompany('');
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="book-appointment" className="py-24 bg-background relative">
      <div 
        className="absolute right-0 top-0 w-full lg:w-1/2 h-1/3 lg:h-full bg-accent/5 z-0" 
        aria-hidden="true" 
      />
      
      <div 
        ref={sectionRef}
        className="section-container relative z-10 animate-on-scroll"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
              Free Digital Marketing Consultation
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-4">
              Book a Free Appointment
            </h2>
            
            <p className="text-lg text-foreground/80 mb-8 max-w-lg">
              Revolutionize how you optimize your resources by booking with our digital marketing experts. Take the first step toward unprecedented growth and transform your vision into compelling results.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h4 className="font-medium">Flexible Scheduling</h4>
                  <p className="text-sm text-foreground/70">Choose a time that works for your busy schedule</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1" />
                <div>
                  <h4 className="font-medium">30 Minutes, Full Value</h4>
                  <p className="text-sm text-foreground/70">Concise yet comprehensive consultation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-2">Booking Received!</h3>
                <p className="text-foreground/80 mb-6">
                  We'll contact you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="Your Company Ltd"
                  />
                </div>
                
                <button
                  type="submit"
                  className={cn(
                    "w-full py-3 rounded-lg font-medium text-center transition-all flex items-center justify-center gap-2",
                    "bg-accent text-accent-foreground hover:brightness-110"
                  )}
                >
                  Book Your Free Call <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
