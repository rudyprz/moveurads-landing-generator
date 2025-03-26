
import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 py-16 relative">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-display font-medium mb-4">Moveur<span className="text-accent">ads</span></h3>
            <p className="text-foreground/70 max-w-md mb-6">
              Transforming digital opportunities into impactful realities for businesses through innovative marketing strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-secondary text-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-foreground/70 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary text-foreground/70 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@moveurads.com" className="p-2 rounded-full bg-secondary text-foreground/70 hover:text-accent transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/50 mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Moveurads. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2 text-foreground/40">|</span>
            <a href="#" className="text-sm text-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
