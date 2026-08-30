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
    <section className="bg-canvas" id="amenities">
      <div className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-10">
          <Reveal className="mb-14 md:mb-20 md:flex md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                Amenities
              </p>
              <h2 className="text-[28px] font-bold leading-[1.15] text-primary md:text-[40px]">
                Everything you need.
              </h2>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-secondary md:mt-0">
              Every suite comes with the essentials — and a few extras
              that make longer stays easy.
            </p>
          </Reveal>

          <Reveal stagger className="grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map(({ title, desc }) => (
              <div key={title} className="border-b border-border py-7">
                <h3 className="mb-1 text-[14px] font-semibold text-primary">
                  {title}
                </h3>
                <p className="text-[13px] text-secondary">{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}