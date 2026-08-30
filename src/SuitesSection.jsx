import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const SUITES = [
  {
    number: "101",
    name: "Richmond Suite 101",
    desc: "A refined one-bedroom suite with a dedicated workspace, ideal for business travellers.",
    image: "/rooms/101.jpeg",
    size: "320 sq ft",
    guests: "2 Guests",
  },
  {
    number: "102",
    name: "Richmond Suite 102",
    desc: "Spacious one-bedroom with a separate living area. Perfect for couples and professionals.",
    image: "/rooms/102.jpeg",
    size: "480 sq ft",
    guests: "3 Guests",
  },
  {
    number: "103",
    name: "Richmond Suite 103",
    desc: "Compact and comfortable studio with modern amenities for the solo traveller.",
    image: "/rooms/103.jpeg",
    size: "280 sq ft",
    guests: "2 Guests",
  },
  {
    number: "104",
    name: "Richmond Suite 104",
    desc: "A bright, comfortable suite designed for a relaxing and restful stay.",
    image: "/rooms/104.jpeg",
    size: "340 sq ft",
    guests: "2 Guests",
  },
  {
    number: "105",
    name: "Richmond Suite 105",
    desc: "A spacious suite with all the comforts you need for a longer stay.",
    image: "/rooms/105.jpeg",
    size: "420 sq ft",
    guests: "3 Guests",
  },
  {
    number: "106",
    name: "Richmond Suite 106",
    desc: "A well-appointed suite ideal for families and extended trips.",
    image: "/rooms/106.jpeg",
    size: "460 sq ft",
    guests: "4 Guests",
  },
];

export default function SuitesSection() {
  return (
    <section className="bg-page py-20 md:py-28" id="suites">
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <h2 className="text-[28px] font-bold text-primary md:text-[34px]">
            Our Suites
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[14px] leading-[1.8] text-secondary">
            Comfortable spaces thoughtfully designed for your stay in Bengaluru.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-8">
          {SUITES.map((suite) => (
            <Reveal key={suite.name} className="group">
              <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    Suite {suite.number}
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-1 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    <span>{suite.size}</span>
                    <span aria-hidden="true">·</span>
                    <span>{suite.guests}</span>
                  </div>
                  <h3 className="text-[16px] font-semibold text-primary">
                    {suite.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-secondary">
                    {suite.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent transition-colors hover:text-accent-dark"
                  >
                    View Details
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
