import React from "react";

const FOOTER_LINKS = [
  { group: "Suites", links: ["Executive Studio", "Deluxe Suite", "Family Suite", "Premium Residence"] },
  { group: "Company", links: ["About Us", "Amenities", "Gallery", "Contact"] },
];

export default function Footer() {
  return (
    <footer className="bg-[#110f0d] px-6 pt-16 pb-8 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#c9a96e]"
              >
                <path
                  d="M12 2C9 6 9 10 12 14C15 10 15 6 12 2Z"
                  fill="currentColor"
                />
                <path
                  d="M12 22V13"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              <span className="font-serif text-[13px] tracking-[0.18em] text-white">
                RICHMOND SUITES
              </span>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-white/35">
              Serviced suites in Richmond Town, Bengaluru. A settled,
              comfortable way to stay — whether for a night or a few months.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.group}>
              <p className="mb-4 text-[10px] tracking-[0.3em] text-white/30">
                {group.group.toUpperCase()}
              </p>
              <div className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[13px] text-white/45 transition-colors hover:text-white/80"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <p className="mb-4 text-[10px] tracking-[0.3em] text-white/30">
              CONTACT
            </p>
            <div className="flex flex-col gap-2.5 text-[13px] text-white/45">
              <a href="tel:+919986197711" className="hover:text-white/80">
                +91 99861 97711
              </a>
              <a
                href="mailto:nayazsheriff@richmondsuites.in"
                className="hover:text-white/80"
              >
                nayazsheriff@richmondsuites.in
              </a>
              <p className="mt-1 leading-relaxed text-white/30">
                Richmond Town
                <br />
                Bengaluru, Karnataka
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/6 pt-6 text-[11px] text-white/20">
          &copy; 2026 Richmond Suites. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
