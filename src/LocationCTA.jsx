import React from "react";
import { MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function LocationCTA() {
  return (
    <section className="bg-[#12110f]">
      <div className="relative overflow-hidden">
        <div className="relative h-[400px] md:h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2000&auto=format&fit=crop"
            alt="Bengaluru skyline"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#12110f]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12110f] via-[#12110f]/50 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-16">
              <Reveal>
                <p className="mb-3 text-[11px] tracking-[0.3em] text-[#c9a96e]">
                  FIND US
                </p>
                <h2 className="mb-6 font-serif text-[36px] leading-[1.15] text-white sm:text-[44px]">
                  Richmond Town,
                  <br />
                  Bengaluru.
                </h2>
                <p className="mb-8 max-w-md text-[14px] leading-[1.8] text-white/50">
                  MG Road, Brigade Road, UB City, Garuda Mall — all within
                  easy reach. A calm base close to everything.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-[#c9a96e]/60" />
                    <span className="text-[13px] text-white/60">
                      Richmond Town, Bengaluru, Karnataka
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#c9a96e]/60" />
                    <a
                      href="tel:+919986197711"
                      className="text-[13px] text-white/60 hover:text-white"
                    >
                      +91 99861 97711
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
