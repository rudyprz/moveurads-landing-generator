
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import OurServices from '@/components/OurServices';
import BookAppointment from '@/components/BookAppointment';
import Footer from '@/components/Footer';

const Index = () => {
  // Add metadata for SEO
  useEffect(() => {
    document.title = "Moveurads | Digital Marketing Innovation";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Moveurads transforms digital opportunities into impactful realities for your business with innovative marketing strategies.');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', 'Moveurads transforms digital opportunities into impactful realities for your business with innovative marketing strategies.');
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <OurServices />
        <BookAppointment />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
