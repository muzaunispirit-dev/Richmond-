import React from "react";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-canvas py-20 md:py-28">
      {/* Geometric accents */}
      <div className="absolute -left-16 -top-16 h-36 w-36 rounded-full bg-accent/10" />
      <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-accent/10" />

      <Reveal className="relative mx-auto max-w-site px-5 text-center sm:px-8 lg:px-10">
        <h2 className="text-[28px] font-bold leading-snug text-primary md:text-[34px]">
          Make Richmond Suites
          <br />
          Your Home in Bengaluru
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[14px] leading-[1.8] text-secondary">
          Comfort, convenience and warm hospitality await you in Richmond Town.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://wa.me/919986197711?text=Hello%20Richmond%20Suites%2C%20I%20would%20like%20to%20book%20a%20stay."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-8 py-3.5 text-[13px] font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Book Your Stay
          </a>
          <a
            href="https://wa.me/919986197711?text=Hello%20Richmond%20Suites%2C%20I%20have%20an%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-8 py-3.5 text-[13px] font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
