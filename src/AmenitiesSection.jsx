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
    <section className="bg-[#f1eadb]">
      <div className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 md:mb-20 md:flex md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] tracking-[0.3em] text-[#b08d4f]">
                AMENITIES
              </p>
              <h2 className="font-serif text-[32px] leading-[1.15] text-[#221b14] sm:text-[40px]">
                Everything you need.
              </h2>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[#221b14]/60 md:mt-0">
              Every suite comes with the essentials — and a few extras
              that make longer stays easy.
            </p>
          </Reveal>

          <Reveal stagger className="grid gap-px border-t border-[#221b14]/10 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map(({ title, desc }) => (
              <div
                key={title}
                className="border-b border-[#221b14]/10 py-7"
              >
                <h3 className="mb-1 text-[14px] font-medium text-[#221b14]">
                  {title}
                </h3>
                <p className="text-[13px] text-[#221b14]/55">{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
