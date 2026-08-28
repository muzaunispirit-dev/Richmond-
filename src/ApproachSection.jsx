import React from "react";
import { ArrowRight } from "lucide-react";

const TRIPS = [
  "Work Trips",
  "Family Visits",
  "City Breaks",
  "Couple Stays",
  "Extended Living",
];

export default function ApproachSection() {
  return (
    <section className="relative bg-[#1a1613] px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Left column */}
          <div>
            <p className="mb-4 text-[12px] tracking-[0.3em] text-[#C7A25C]">
              OUR APPROACH
            </p>
            <h2 className="mb-6 font-serif text-[34px] leading-[1.2] text-white sm:text-[40px]">
              Hospitality that feels
              <br />
              considered, not
              <br />
              complicated.
            </h2>
            <div className="mb-8 h-[2px] w-14 bg-[#C7A25C]" />
            <p className="mb-6 text-[15px] leading-[1.85] text-white/65">
              We believe a good stay starts with space to arrive, settle in, and
              make the city your own. Our approach is simple: a calm base,
              thoughtful support, and a stay experience that feels personal from
              the first enquiry.
            </p>
            <p className="text-[15px] leading-[1.85] text-white/65">
              From work trips and family visits to city breaks, couple stays,
              and longer arrangements, we make room for the way you travel.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-center">
            {/* Trip types */}
            <div className="mb-10">
              <p className="mb-5 text-[11px] tracking-[0.25em] text-white/40">
                PERFECT FOR
              </p>
              <div className="flex flex-wrap gap-3">
                {TRIPS.map((trip) => (
                  <span
                    key={trip}
                    className="border border-white/10 px-5 py-2.5 text-[13px] tracking-[0.08em] text-white/70 transition-colors hover:border-[#C7A25C]/50 hover:text-[#C7A25C]"
                  >
                    {trip.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="group inline-flex items-center gap-3 text-[13px] tracking-[0.15em] text-[#C7A25C] transition-colors hover:text-[#d4b072]"
            >
              PLAN YOUR STAY
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
