import React from "react";
import Reveal from "./Reveal";

const IMAGES = [
  {
    src: "/rooms/101.jpeg",
    label: "Suite 101",
  },
  {
    src: "/rooms/102.jpeg",
    label: "Suite 102",
  },
  {
    src: "/rooms/103.jpeg",
    label: "Suite 103",
  },
  {
    src: "/rooms/104.jpeg",
    label: "Suite 104",
  },
  {
    src: "/rooms/105.jpeg",
    label: "Suite 105",
  },
  {
    src: "/rooms/106.jpeg",
    label: "Suite 106",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-page py-20 md:py-28" id="gallery">
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-10">
        <Reveal className="text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
            Gallery
          </p>
          <h2 className="text-[28px] font-bold text-primary md:text-[34px]">
            Inside Richmond Suites
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[14px] leading-[1.8] text-secondary">
            A glimpse of the comfortable, thoughtfully designed spaces awaiting you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <Reveal key={img.label} className="group" anim={i % 2 === 0 ? "left" : "right"}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[13px] font-semibold text-white">
                      {img.label}
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