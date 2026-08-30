import React from "react";
import { MapPin, CalendarCheck, Sofa, Headphones } from "lucide-react";
import Reveal from "./Reveal";

const BENEFITS = [
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Stay in the heart of Richmond Town.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Stays",
    desc: "Ideal for short and extended stays.",
  },
  {
    icon: Sofa,
    title: "Comfortable Living",
    desc: "Thoughtfully furnished spaces.",
  },
  {
    icon: Headphones,
    title: "Guest Assistance",
    desc: "Support whenever you need it.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-canvas py-20 md:py-28" id="about">
      <div className="mx-auto max-w-site px-10">
        <Reveal className="text-center">
          <h2 className="text-[28px] font-bold leading-snug text-primary md:text-[34px]">
            Everything You Need
            <br />
            For a Comfortable Stay
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[14px] leading-[1.8] text-secondary">
            Thoughtful amenities and warm hospitality designed to make
            Richmond Suites feel like your home in Bengaluru.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-20 md:grid-cols-4 md:gap-x-10"
        >
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF3E0]">
                <Icon size={24} className="text-accent" />
              </div>
              <h3 className="mb-1.5 text-[15px] font-semibold text-primary">
                {title}
              </h3>
              <p className="text-[13px] leading-relaxed text-secondary">
                {desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
