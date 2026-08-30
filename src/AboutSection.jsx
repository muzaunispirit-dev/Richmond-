import React from "react";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section className="bg-canvas" id="about">
      {/* Body */}
      <div className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-site">
          <Reveal className="text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
              About Us
            </p>
            <h2 className="text-[28px] font-bold leading-[1.15] text-primary md:text-[40px]">
              A more settled way
              <br />
              to stay in Bengaluru.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-12 md:mt-16 md:gap-16">
            <Reveal className="md:col-span-7">
              <p className="text-[15px] leading-[1.9] text-secondary">
                Welcome to Richmond Suites — your comfortable serviced
                apartment in the heart of Richmond Town, Bengaluru. Ideally
                located in one of Central Bengaluru's most sought-after
                neighbourhoods, we offer the perfect blend of comfort, privacy,
                and homely living.
              </p>
              <p className="mt-6 text-[15px] leading-[1.9] text-secondary">
                Whether you are visiting for business, a family stay, a
                holiday, or an extended period, our suites are designed to
                make you feel relaxed and at home.
              </p>
            </Reveal>

            <Reveal className="md:col-span-5" stagger>
              <div className="border-t border-border pt-8">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                  Our Location
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-secondary">
                  Close to MG Road, Brigade Road, UB City, Garuda Mall,
                  restaurants, cafés, parks, hospitals, and major business
                  districts.
                </p>
              </div>
              <div className="border-t border-border pt-8">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                  For Every Trip
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-secondary">
                  From work trips and family visits to city breaks and longer
                  arrangements — we make room for the way you travel.
                </p>
              </div>
              <div className="border-t border-border pt-8">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                  Our Approach
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-secondary">
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