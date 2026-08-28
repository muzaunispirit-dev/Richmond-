import React from "react";
import Reveal from "./Reveal";

const AMENITIES = [
  {
    title: "High-Speed Wi-Fi",
    desc: "Seamless internet throughout your stay.",
  },
  {
    title: "Modern Kitchen",
    desc: "Fridge, oven, induction stove — cook your way.",
  },
  {
    title: "Hot Water",
    desc: "Reliable supply for daily comfort.",
  },
  {
    title: "Housekeeping",
    desc: "Professional cleaning on a regular schedule.",
  },
  {
    title: "Washing Machine",
    desc: "In-suite laundry for longer stays.",
  },
  {
    title: "Air Conditioning",
    desc: "Climate control in every room.",
  },
];

export default function AmenitiesSection() {
  return (
    <section className="bg-[#1a1815]">
      <div className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 md:mb-20 md:flex md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] tracking-[0.3em] text-[#c9a96e]">
                AMENITIES
              </p>
              <h2 className="font-serif text-[32px] leading-[1.15] text-white sm:text-[40px]">
                Everything you need.
              </h2>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/45 md:mt-0">
              Every suite comes with the essentials — and a few extras
              that make longer stays easy.
            </p>
          </Reveal>

          <Reveal stagger className="grid gap-px border-t border-white/8 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map(({ title, desc }) => (
              <div
                key={title}
                className="border-b border-white/8 py-7"
              >
                <h3 className="mb-1 text-[14px] font-medium text-white">
                  {title}
                </h3>
                <p className="text-[13px] text-white/40">{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
