import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Wifi,
  Coffee,
  Car,
  Utensils,
  Tv,
  AirVent,
  ShieldCheck,
  Phone,
  BedDouble,
  Bath,
  Maximize,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";

const SUITES = [
  {
    id: 101,
    name: "Richmond Suites 101",
    tag: "Short Stays",
    size: "320 sq ft",
    guests: "1–2 Guests",
    bed: "1 King Bed",
    image: "/rooms/101.jpeg",
    tagline: "A compact studio for solo travellers. Everything you need, nothing you don't.",
    description:
      "Perfectly suited for the solo business traveller or weekend explorer, Suite 101 offers a streamlined living experience without sacrificing comfort. The thoughtfully designed open-plan layout maximizes every square foot, featuring a plush king-size bed, a work desk, and a private en-suite bathroom.",
    highlights: [
      "Central location in Richmond Town",
      "24/7 front desk support",
      "Weekly housekeeping included",
      "Complimentary Wi-Fi",
    ],
    amenities: [
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Coffee, label: "Tea & Coffee Station" },
      { icon: Tv, label: "Smart TV" },
      { icon: AirVent, label: "Climate Control" },
      { icon: Bath, label: "Rain Shower" },
      { icon: ShieldCheck, label: "24/7 Security" },
    ],
  },
  {
    id: 102,
    name: "Richmond Suites 102",
    tag: "Couple Stays",
    size: "480 sq ft",
    guests: "2 Guests",
    bed: "1 King Bed",
    image: "/rooms/102.jpeg",
    tagline: "One-bedroom suite with a separate living area. Ideal for couples or professionals on work trips.",
    description:
      "Suite 102 offers the luxury of space with its distinct bedroom and living areas. Wake up in a spacious king-size bed, enjoy your morning coffee in the separate sitting area, and unwind with a good book or a show on the large Smart TV. The fully equipped kitchenette lets you prepare your own meals.",
    highlights: [
      "Separate bedroom and living area",
      "Kitchenette with microwave & fridge",
      "Blackout curtains for restful sleep",
      "Dedicated workspace",
    ],
    amenities: [
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Coffee, label: "Tea & Coffee Station" },
      { icon: Tv, label: "55-inch Smart TV" },
      { icon: AirVent, label: "Split AC" },
      { icon: Utensils, label: "Kitchenette" },
      { icon: Bath, label: "Rain Shower & Bathtub" },
    ],
  },
  {
    id: 103,
    name: "Richmond Suites 103",
    tag: "Family Stays",
    size: "620 sq ft",
    guests: "2–4 Guests",
    bed: "2 Bedrooms",
    image: "/rooms/103.jpeg",
    tagline: "Two bedrooms, a full kitchen, and generous living space. Room for the whole family.",
    description:
      "Designed with families in mind, Suite 103 provides ample room for parents and children to both relax and play. Two private bedrooms ensure everyone gets a good night's rest, while the open-plan living and dining area becomes the heart of your home away from home.",
    highlights: [
      "Two private bedrooms",
      "Full kitchen with cooking essentials",
      "Spacious dining area",
      "Child-friendly layout",
    ],
    amenities: [
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Utensils, label: "Full Kitchen" },
      { icon: Tv, label: "Two Smart TVs" },
      { icon: AirVent, label: "Individual AC Units" },
      { icon: Bath, label: "Two Bathrooms" },
      { icon: Users, label: "Family Friendly" },
    ],
  },
  {
    id: 104,
    name: "Richmond Suites 104",
    tag: "Long Stays",
    size: "780 sq ft",
    guests: "2–4 Guests",
    bed: "2 Bedrooms",
    image: "/rooms/101.jpeg",
    tagline: "Two bedrooms, dining area, full kitchen. Best for extended Bengaluru living.",
    description:
      "When your stay stretches from days to weeks or months, Suite 104 becomes your true Bengaluru residence. Every detail has been considered for long-term comfort — from the fully loaded kitchen with full-size appliances to the dedicated laundry nook and spacious wardrobe storage.",
    highlights: [
      "Full-size kitchen with all appliances",
      "In-unit washer and dryer",
      "Ample storage and wardrobe space",
      "Flexible lease terms available",
    ],
    amenities: [
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Utensils, label: "Full Kitchen + Appliances" },
      { icon: Tv, label: "Smart TV" },
      { icon: AirVent, label: "Central AC" },
      { icon: Bath, label: "Two Bathrooms" },
      { icon: Car, label: "Covered Parking" },
    ],
  },
  {
    id: 105,
    name: "Richmond Suites 105",
    tag: "Business",
    size: "500 sq ft",
    guests: "1–2 Guests",
    bed: "1 King Bed",
    image: "/rooms/101.1.jpeg",
    tagline: "A well-appointed suite with a dedicated workspace. Built for the working professional.",
    description:
      "Suite 105 has been crafted for the professional who demands productivity without compromising on comfort. The dedicated executive workspace includes an ergonomic chair, ample desk space, high-speed internet, and multiple power outlets. After work, retreat to a comfortable king bed.",
    highlights: [
      "Executive desk with ergonomic chair",
      "High-speed dedicated internet line",
      "Meeting-ready with video call setup",
      "Express check-in/check-out",
    ],
    amenities: [
      { icon: Wifi, label: "Fiber Wi-Fi" },
      { icon: Coffee, label: "Premium Coffee Machine" },
      { icon: Tv, label: "Smart TV" },
      { icon: AirVent, label: "Split AC" },
      { icon: BedDouble, label: "Premium Mattress" },
      { icon: ShieldCheck, label: "In-Room Safe" },
    ],
  },
  {
    id: 106,
    name: "Richmond Suites 106",
    tag: "Premium",
    size: "900 sq ft",
    guests: "2–4 Guests",
    bed: "2 Bedrooms + Living",
    image: "/rooms/102.jpeg",
    tagline: "Our largest suite with panoramic views, premium furnishings, and full living area.",
    description:
      "Suite 106 is the crown jewel of Richmond Suites. Spanning 900 square feet, it offers panoramic views of the Bengaluru skyline, designer furnishings, a gourmet kitchen, and a living area that feels like a luxury apartment. Perfect for executives, celebrations, or those who simply want the finest.",
    highlights: [
      "Panoramic city views",
      "Designer furnishings throughout",
      "Gourmet kitchen with premium appliances",
      "Private balcony",
    ],
    amenities: [
      { icon: Wifi, label: "Fiber Wi-Fi" },
      { icon: Utensils, label: "Gourmet Kitchen" },
      { icon: Tv, label: "65-inch OLED TV" },
      { icon: AirVent, label: "Smart Climate Control" },
      { icon: Bath, label: "Luxury Marble Bathroom" },
      { icon: Car, label: "Reserved Parking" },
    ],
  },
];

export default function SuitesPage() {
  return (
    <div className="min-h-screen bg-[#12110f]">
      {/* Navigation */}
      <header className="flex items-center justify-between px-6 py-6 md:px-16 md:py-8">
        <Link to="/" className="flex items-center gap-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#c9a96e]"
          >
            <path d="M12 2C9 6 9 10 12 14C15 10 15 6 12 2Z" fill="currentColor" />
            <path d="M12 22V13" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <div className="leading-none">
            <span className="block font-serif text-[14px] tracking-[0.18em] text-white">
              RICHMOND SUITES
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link to="/suites" className="text-[12px] tracking-[0.14em] text-[#c9a96e]">
            SUITES
          </Link>
          {["Amenities", "Location", "About Us", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[12px] tracking-[0.14em] text-white/70 transition-colors hover:text-white"
            >
              {link.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+919986197711" className="text-[12px] tracking-wide text-white/60 hover:text-white">
            +91 99861 97711
          </a>
          <button className="bg-white px-5 py-2.5 text-[11px] font-medium tracking-[0.18em] text-[#12110f] transition-colors hover:bg-[#c9a96e]">
            BOOK NOW
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-16 pt-12 md:px-16 md:pb-24 md:pt-20">
        <Reveal anim="scale">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-[11px] tracking-[0.15em] text-white/50 transition-colors hover:text-[#c9a96e]"
          >
            <ArrowLeft size={14} />
            BACK TO HOME
          </Link>
          <p className="mb-3 text-[11px] tracking-[0.3em] text-[#c9a96e]">
            OUR COLLECTION
          </p>
          <h1 className="font-serif text-[40px] leading-[1.1] text-white sm:text-[52px] md:text-[64px]">
            Six Suites,
            <br />
            Six Ways to Stay.
          </h1>
          <p className="mt-6 max-w-xl text-[14px] leading-[1.8] text-white/45">
            From quick business stops to long family relocations — choose the
            suite that matches your rhythm. Every room is serviced, private,
            and thoughtfully designed.
          </p>
        </Reveal>
      </section>

      {/* Suites Grid */}
      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl space-y-16">
          {SUITES.map((suite, index) => {
            const isReversed = index % 2 === 1;
            return (
              <Reveal key={suite.id}>
                <div
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image — slides in from left or right */}
                  <Reveal
                    anim={isReversed ? "right" : "left"}
                    className={`relative overflow-hidden ${isReversed ? "lg:order-2" : ""}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-[#1a1815]">
                      <img
                        src={suite.image}
                        alt={suite.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute left-0 top-0 m-6">
                      <span className="inline-block bg-[#c9a96e] px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-[#12110f]">
                        {suite.tag.toUpperCase()}
                      </span>
                    </div>
                  </Reveal>

                  {/* Details — staggered reveal from right or left */}
                  <Reveal
                    anim="stagger-slow"
                    className={`flex flex-col justify-center ${isReversed ? "lg:order-1" : ""}`}
                  >
                    <div>
                      <p className="mb-1 text-[10px] tracking-[0.3em] text-[#c9a96e]">
                        SUITE {suite.id}
                      </p>
                      <h2 className="font-serif text-[28px] text-white sm:text-[32px]">
                        {suite.name}
                      </h2>
                      <p className="mt-2 text-[14px] italic text-white/50">
                        {suite.tagline}
                      </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-6 flex flex-wrap gap-6">
                      <div className="flex items-center gap-2 text-[12px] text-white/50">
                        <Maximize size={14} className="text-[#c9a96e]/60" />
                        {suite.size}
                      </div>
                      <div className="flex items-center gap-2 text-[12px] text-white/50">
                        <Users size={14} className="text-[#c9a96e]/60" />
                        {suite.guests}
                      </div>
                      <div className="flex items-center gap-2 text-[12px] text-white/50">
                        <BedDouble size={14} className="text-[#c9a96e]/60" />
                        {suite.bed}
                      </div>
                    </div>

                    <div>
                      <p className="mt-6 text-[13px] leading-[1.85] text-white/40">
                        {suite.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mt-6 space-y-2">
                      {suite.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-3 text-[12px] text-white/50">
                          <span className="h-1 w-1 rounded-full bg-[#c9a96e]" />
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Amenities */}
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {suite.amenities.map((a) => (
                        <div key={a.label} className="flex items-center gap-2">
                          <a.icon size={14} className="text-[#c9a96e]/70" />
                          <span className="text-[11px] text-white/40">{a.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8 border-t border-white/6 pt-6">
                      <a
                        href="tel:+919986197711"
                        className="group inline-flex items-center gap-3 bg-white px-6 py-3 text-[11px] font-medium tracking-[0.15em] text-[#12110f] transition-colors hover:bg-[#c9a96e]"
                      >
                        ENQUIRE NOW
                        <ArrowRight
                          size={12}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </Reveal>
                </div>

                {/* Divider */}
                {index < SUITES.length - 1 && (
                  <div className="mt-16 border-t border-white/6" />
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/6 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal anim="scale">
            <p className="mb-3 text-[11px] tracking-[0.3em] text-[#c9a96e]">
              NEED HELP CHOOSING?
            </p>
            <h2 className="font-serif text-[32px] text-white sm:text-[40px]">
              Not sure which suite is right for you?
            </h2>
            <p className="mt-5 text-[14px] leading-[1.8] text-white/40">
              Give us a call and we'll help you pick the perfect match for your
              stay. Whether it's a night, a week, or a few months — we've got
              you covered.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <a
                href="tel:+919986197711"
                className="group flex items-center gap-3 bg-white px-8 py-3.5 text-[11px] font-medium tracking-[0.18em] text-[#12110f] transition-colors hover:bg-[#c9a96e]"
              >
                <Phone size={14} />
                CALL US NOW
              </a>
              <a
                href="mailto:nayazsheriff@richmondsuites.in"
                className="text-[12px] tracking-[0.15em] text-white/50 transition-colors hover:text-white"
              >
                EMAIL INQUIRY
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#110f0d] px-6 pt-16 pb-8 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#c9a96e]">
                  <path d="M12 2C9 6 9 10 12 14C15 10 15 6 12 2Z" fill="currentColor" />
                  <path d="M12 22V13" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <span className="font-serif text-[13px] tracking-[0.18em] text-white">
                  RICHMOND SUITES
                </span>
              </div>
              <p className="max-w-xs text-[13px] leading-relaxed text-white/35">
                Serviced suites in Richmond Town, Bengaluru. A settled, comfortable way to stay.
              </p>
            </div>
            <div>
              <p className="mb-4 text-[10px] tracking-[0.3em] text-white/30">SUITES</p>
              <div className="flex flex-col gap-2.5">
                {["Executive Studio", "Deluxe Suite", "Family Suite", "Premium Residence"].map(
                  (link) => (
                    <a key={link} href="#" className="text-[13px] text-white/45 transition-colors hover:text-white/80">
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <p className="mb-4 text-[10px] tracking-[0.3em] text-white/30">CONTACT</p>
              <div className="flex flex-col gap-2.5 text-[13px] text-white/45">
                <a href="tel:+919986197711" className="hover:text-white/80">+91 99861 97711</a>
                <a href="mailto:nayazsheriff@richmondsuites.in" className="hover:text-white/80">nayazsheriff@richmondsuites.in</a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/6 pt-6 text-[11px] text-white/20">
            © 2026 Richmond Suites. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
