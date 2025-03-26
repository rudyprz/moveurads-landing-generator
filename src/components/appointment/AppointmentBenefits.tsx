
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AppointmentBenefits = () => {
  return (
    <>
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
      
      {/* Image block - only visible on mobile */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-8 lg:hidden">
        <AspectRatio ratio={1} className="bg-accent/5">
          <img
            src="/lovable-uploads/64ae0a20-d3ed-41f5-adbe-68c4b8fb645e.png"
            alt="Marketing consultant ready to help you"
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
    </>
  );
};

export default AppointmentBenefits;
