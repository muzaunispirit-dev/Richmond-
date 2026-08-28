import React from "react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "We stayed for two weeks while our apartment was being renovated. It felt like a proper home — the kitchen, the space, the quiet. We didn't want to leave.",
    author: "Priya & Arjun M.",
    from: "Mumbai",
    stay: "14 nights",
  },
  {
    quote:
      "Perfect location for my work trip. Walked to MG Road every evening. The suite was clean, quiet, and had everything I needed. Will book again.",
    author: "David K.",
    from: "London",
    stay: "8 nights",
  },
  {
    quote:
      "We brought our two kids and parents. The family suite gave us enough room to breathe. The neighbourhood is lovely — parks, cafés, everything nearby.",
    author: "The Rao Family",
    from: "Hyderabad",
    stay: "5 nights",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#1a1815]">
      <div className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 md:mb-20">
            <p className="mb-3 text-[11px] tracking-[0.3em] text-[#c9a96e]">
              GUESTS SAY
            </p>
            <h2 className="font-serif text-[32px] leading-[1.15] text-white sm:text-[40px]">
              From the people who&apos;ve
              <br className="hidden sm:block" />{" "}
              stayed with us.
            </h2>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {REVIEWS.map((review, i) => (
              <Reveal key={i} className="flex flex-col">
                <div className="mb-6 text-[28px] leading-none text-[#c9a96e]/40">
                  &ldquo;
                </div>
                <p className="flex-1 text-[14px] leading-[1.85] text-white/55 italic">
                  {review.quote}
                </p>
                <div className="mt-8 border-t border-white/8 pt-5">
                  <p className="text-[13px] font-medium text-white/80">
                    {review.author}
                  </p>
                  <p className="mt-1 text-[12px] text-white/30">
                    {review.from} &middot; {review.stay}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
