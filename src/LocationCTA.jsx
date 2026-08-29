import React from "react";
import { MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function LocationCTA() {
  return (
    <section className="bg-[#faf6ee]">
      <div className="relative overflow-hidden">
        <div className="relative h-[400px] md:h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2000&auto=format&fit=crop"
            alt="Bengaluru skyline"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#faf6ee]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf6ee] via-[#faf6ee]/55 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-16">
              <Reveal>
                <p className="mb-3 text-[11px] tracking-[0.3em] text-[#b08d4f]">
                  FIND US
                </p>
                <h2 className="mb-6 font-serif text-[36px] leading-[1.15] text-[#221b14] sm:text-[44px]">
                  Richmond Town,
                  <br />
                  Bengaluru.
                </h2>
                <p className="mb-8 max-w-md text-[14px] leading-[1.8] text-[#221b14]/65">
                  MG Road, Brigade Road, UB City, Garuda Mall — all within
                  easy reach. A calm base close to everything.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-[#b08d4f]" />
                    <span className="text-[13px] text-[#221b14]/70">
                      No. 4, Clapham Street, Richmond Town, Bengaluru
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#b08d4f]" />
                    <a
                      href="tel:+919986197711"
                      className="text-[13px] text-[#221b14]/70 hover:text-[#221b14]"
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
