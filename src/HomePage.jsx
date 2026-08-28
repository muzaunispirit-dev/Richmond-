import React from "react";
import HeroSection from "../HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import AmenitiesSection from "./AmenitiesSection.jsx";
import RoomsSection from "./RoomsSection.jsx";
import TestimonialsSection from "./TestimonialsSection.jsx";
import LocationCTA from "./LocationCTA.jsx";
import Footer from "./Footer.jsx";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <RoomsSection />
      <TestimonialsSection />
      <LocationCTA />
      <Footer />
    </>
  );
}
