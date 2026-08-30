import React from "react";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import SuitesSection from "./SuitesSection.jsx";
import AmenitiesSection from "./AmenitiesSection.jsx";
import TestimonialsSection from "./TestimonialsSection.jsx";
import GallerySection from "./GallerySection.jsx";
import CTASection from "./CTASection.jsx";
import Footer from "./Footer.jsx";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SuitesSection />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
