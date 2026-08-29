import React from "react";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section className="bg-[#faf6ee]">
      {/* Wide image band */}
      <div className="relative h-[50vh] min-h-[360px] overflow-hidden md:h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop"
          alt="Richmond Suites lobby"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf6ee] via-[#faf6ee]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf6ee] to-transparent" />

        <div className="relative flex h-full items-end px-6 pb-12 md:items-center md:px-16">
          <Reveal className="max-w-xl">
            <p className="mb-3 text-[11px] tracking-[0.3em] text-[#c9a96e]">
              ABOUT US
            </p>
            <h2 className="font-serif text-[32px] leading-[1.2] text-white sm:text-[40px] md:text-[48px]">
              A more settled way
              <br />
              to stay in Bengaluru.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-7">
              <p className="text-[15px] leading-[1.9] text-[#221b14]/75">
                Welcome to Richmond Suites — your comfortable serviced
                apartment in the heart of Richmond Town, Bengaluru. Ideally
                located in one of Central Bengaluru's most sought-after
                neighbourhoods, we offer the perfect blend of comfort, privacy,
                and homely living.
              </p>
              <p className="mt-6 text-[15px] leading-[1.9] text-[#221b14]/75">
                Whether you are visiting for business, a family stay, a
                holiday, or an extended period, our suites are designed to
                make you feel relaxed and at home.
              </p>
            </Reveal>

            <Reveal className="md:col-span-5" stagger>
              <div className="border-t border-[#221b14]/10 pt-8">
                <p className="mb-1 text-[10px] tracking-[0.3em] text-[#b08d4f]">
                  OUR LOCATION
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-[#221b14]/60">
                  Close to MG Road, Brigade Road, UB City, Garuda Mall,
                  restaurants, cafés, parks, hospitals, and major business
                  districts.
                </p>
              </div>
              <div className="border-t border-[#221b14]/10 pt-8">
                <p className="mb-1 text-[10px] tracking-[0.3em] text-[#b08d4f]">
                  FOR EVERY TRIP
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-[#221b14]/60">
                  From work trips and family visits to city breaks and longer
                  arrangements — we make room for the way you travel.
                </p>
              </div>
              <div className="border-t border-[#221b14]/10 pt-8">
                <p className="mb-1 text-[10px] tracking-[0.3em] text-[#b08d4f]">
                  OUR APPROACH
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-[#221b14]/60">
                  Hospitality that feels considered, not complicated. A calm
                  base, thoughtful support, and a stay that feels personal.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
