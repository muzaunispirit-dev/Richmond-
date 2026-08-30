import React from "react";
import { Star } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    name: "Priya & Arjun M.",
    from: "Mumbai",
    stay: "14 nights",
    quote:
      "It felt like a proper home — the kitchen, the space, the quiet. We didn't want to leave.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    name: "David K.",
    from: "London",
    stay: "8 nights",
    quote:
      "Perfect location for my work trip. Walked to MG Road every evening. The suite was clean and had everything I needed.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=11",
  },
  {
    name: "The Rao Family",
    from: "Hyderabad",
    stay: "5 nights",
    quote:
      "We brought our two kids and parents. The family suite gave us enough room to breathe. Lovely neighbourhood.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=47",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-page py-20 md:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <h2 className="text-[28px] font-bold text-primary md:text-[34px]">
            What Our Guests Say
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[14px] leading-[1.8] text-secondary">
            Hear from the people who've stayed with us.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {REVIEWS.map((review, i) => (
            <Reveal key={i}>
              <div
                className={`rounded bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                  i === 1 ? "md:-mt-3 md:shadow-md" : ""
                }`}
              >
                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-[13px] leading-relaxed text-secondary italic">
                  "{review.quote}"
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[13px] font-semibold text-primary">
                      {review.name}
                    </p>
                    <p className="text-[11px] text-secondary">
                      {review.from} · {review.stay}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
