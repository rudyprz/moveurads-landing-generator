
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

interface AppointmentFormProps {
  onSubmit?: (formData: { name: string; email: string; company: string }) => void;
}

const AppointmentForm = ({ onSubmit }: AppointmentFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
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
    
    // Call the onSubmit callback if provided
    if (onSubmit) {
      onSubmit({ name, email, company });
    }
    
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

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-display font-medium mb-2">Booking Received!</h3>
        <p className="text-foreground/80 mb-6">
          We'll contact you shortly to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
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
  );
};

export default AppointmentForm;
