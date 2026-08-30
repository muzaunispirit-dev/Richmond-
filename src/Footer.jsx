import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const LINKS = [
  {
    group: "Useful Links",
    items: ["Home", "About", "Suites", "Amenities", "Contact"],
  },
];

export default function Footer() {
  return (
    <>
      <a
        href="https://wa.me/919986197711?text=Hello%20Richmond%20Suites%2C%20I%20have%20an%20enquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] lg:bottom-8 lg:right-8 inline-flex items-center justify-center gap-2 px-3.5 py-3 lg:px-5 rounded-full bg-[#25D366] text-white font-semibold text-[13px] shadow-lg hover:bg-[#1ebe5b] transition-all hover:shadow-xl hover:-translate-y-0.5"
        aria-label="Contact Richmond Suites on WhatsApp"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">Contact Us</span>
      </a>
      <footer className="bg-canvas border-t border-border" id="contact">
      <div className="mx-auto max-w-site px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-accent"
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
              <span className="text-[15px] font-bold text-primary">
                Richmond Suites
              </span>
            </div>
            <p className="mb-2 text-[13px] font-medium text-accent">
              Stay Like Home.
            </p>
            <p className="max-w-[240px] text-[12px] leading-relaxed text-secondary">
              Serviced suites in Richmond Town, Bengaluru. A settled,
              comfortable way to stay.
            </p>
          </div>

          {/* Useful Links */}
          {LINKS.map((group) => (
            <div key={group.group}>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-secondary">
                {group.group}
              </p>
              <div className="flex flex-col gap-2.5">
                {group.items.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[13px] text-secondary transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-secondary">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-[12px] text-secondary">
              <a
                href="https://wa.me/919986197711?text=Hello%20Richmond%20Suites%2C%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone size={13} /> +91 99861 97711
              </a>
              <a
                href="mailto:nayazsheriff@richmondsuites.in"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail size={13} /> nayazsheriff@richmondsuites.in
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-primary">
                <MessageCircle size={13} /> WhatsApp
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                <span>
                  No. 4, Clapham Street,
                  <br />
                  Richmond Town, Bengaluru
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-[11px] text-secondary">
          &copy; {new Date().getFullYear()} Richmond Suites. All Rights
          Reserved.
        </div>
      </div>
    </footer>
    </>
  );
}
