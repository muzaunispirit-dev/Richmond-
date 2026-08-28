import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const ROOMS = [
  {
    name: "Richmond Suites 101",
    tag: "Short Stays",
    size: "320 sq ft",
    desc: "A compact studio for solo travellers. Everything you need, nothing you don't.",
    image: "/rooms/101.jpeg",
  },
  {
    name: "Richmond Suites 102",
    tag: "Couple Stays",
    size: "480 sq ft",
    desc: "One-bedroom suite with a separate living area. Ideal for couples or professionals on work trips.",
    image: "/rooms/102.jpeg",
  },
  {
    name: "Richmond Suites 103",
    tag: "Family Stays",
    size: "620 sq ft",
    desc: "Two bedrooms, a full kitchen, and generous living space. Room for the whole family.",
    image: "/rooms/103.jpeg",
  },
  {
    name: "Richmond Suites 104",
    tag: "Long Stays",
    size: "780 sq ft",
    desc: "Two bedrooms, dining area, full kitchen. Best for extended Bengaluru living.",
    image: "/rooms/101.jpeg",
  },
  {
    name: "Richmond Suites 105",
    tag: "Business",
    size: "500 sq ft",
    desc: "A well-appointed suite with a dedicated workspace. Built for the working professional.",
    image: "/rooms/101.1.jpeg",
  },
  {
    name: "Richmond Suites 106",
    tag: "Premium",
    size: "900 sq ft",
    desc: "Our largest suite with panoramic views, premium furnishings, and full living area.",
    image: "/rooms/102.jpeg",
  },
];

export default function RoomsSection() {
  return (
    <section className="bg-[#12110f]">
      <div className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 md:mb-20">
            <p className="mb-3 text-[11px] tracking-[0.3em] text-[#c9a96e]">
              ROOMS &amp; SUITES
            </p>
            <h2 className="font-serif text-[32px] leading-[1.15] text-white sm:text-[40px]">
              Space to settle in, your way.
            </h2>
            <p className="mt-5 max-w-lg text-[14px] leading-[1.8] text-white/45">
              Six flexible room profiles for short visits, business travel,
              family stays, and longer living. Rates and availability confirmed
              directly with us.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((room) => (
              <Reveal key={room.name} className="group relative overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1815]">
                  {room.image ? (
                    <img
                      src={room.image}
                      alt={room.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-[13px] text-white/20">Photo pending</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] tracking-[0.25em] text-[#c9a96e]/80">
                      {room.tag.toUpperCase()}
                    </span>
                    <span className="text-white/20">&middot;</span>
                    <span className="text-[11px] text-white/35">{room.size}</span>
                  </div>
                  <h3 className="font-serif text-[20px] text-white">
                    {room.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                    {room.desc}
                  </p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] text-white/70 transition-colors hover:text-[#c9a96e]"
                    >
                      ENQUIRE
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
