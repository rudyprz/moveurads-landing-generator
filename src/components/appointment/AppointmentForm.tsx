
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

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
      <div className="space-y-2">
        <Label htmlFor="name">
          Your Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">
          Email Address <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@example.com"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">
          Company Name
        </Label>
        <Input
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Your Company Ltd"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full"
      >
        Book Your Free Call <ArrowRight className="ml-2" />
      </Button>
    </form>
  );
};

export default AppointmentForm;
