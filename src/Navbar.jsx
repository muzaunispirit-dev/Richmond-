import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Suites", href: "#suites" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      <div className={`relative mx-auto flex max-w-site items-center justify-between px-5 py-4 sm:px-8 md:py-6 lg:px-10 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        {/* Logo - far left */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/favicon.png"
            alt="Richmond Suites logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-[15px] font-bold tracking-tight text-primary">
            Richmond Suites
          </span>
        </Link>

        {/* Desktop Nav - centered */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right - far right */}
        <div className="hidden items-center gap-5 lg:flex shrink-0">
          <a
            href="#contact"
            className="text-[13px] font-medium text-secondary transition-colors hover:text-primary"
          >
            Contact
          </a>
          <a
            href="#"
            className="rounded bg-primary px-5 py-2.5 text-[12px] font-semibold tracking-wide text-white transition-colors hover:bg-primary/90"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-primary lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`border-t border-border px-5 py-6 sm:px-8 lg:hidden ${scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"}`}>
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-secondary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="text-[14px] font-medium text-secondary">
              Contact
            </a>
            <a
              href="#"
              className="mt-2 rounded bg-primary py-3 text-center text-[13px] font-semibold text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
