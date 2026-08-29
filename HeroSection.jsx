import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const bgImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop";

const NAV_LINKS = ["Suites", "Amenities", "Location", "About Us", "Contact"];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("2026-09-24");
  const [checkOut, setCheckOut] = useState("2026-09-26");
  const [guests, setGuests] = useState("2 Adults");
  const [guestsOpen, setGuestsOpen] = useState(false);
  const guestsRef = React.useRef(null);

  // Today's date in YYYY-MM-DD for min date restrictions
  const today = React.useMemo(() => {
    const d = new Date();
    return d.toISOString().split("T")[0];
  }, []);

  // Minimum check-out is day after check-in
  const minCheckOut = React.useMemo(() => {
    const d = new Date(checkIn + "T00:00:00");
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, [checkIn]);

  // Auto-adjust check-out if it's no longer valid after check-in change
  React.useEffect(() => {
    if (checkOut <= checkIn) {
      setCheckOut(minCheckOut);
    }
  }, [checkIn, checkOut, minCheckOut]);

  // Close guests dropdown on outside click
  React.useEffect(() => {
    if (!guestsOpen) return;
    const handleClickOutside = (e) => {
      if (guestsRef.current && !guestsRef.current.contains(e.target)) {
        setGuestsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [guestsOpen]);

  const handleCheckAvailability = () => {
    const message = encodeURIComponent(
      `Hello! I'd like to check availability at Richmond Suites.\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`
    );
    window.open(`https://wa.me/919986197711?text=${message}`, "_blank");
  };

  const formatDate = (iso) => {
    const d = new Date(iso + "T00:00:00");
    return {
      day: d.toLocaleDateString("en-US", { weekday: "long" }),
      full: d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
  };

  const ci = formatDate(checkIn);
  const co = formatDate(checkOut);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#faf6ee]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#faf6ee] via-transparent to-black/25" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-6 md:px-16 md:py-8">
          <a href="#" className="flex items-center gap-3">
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
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              link === "Suites" ? (
                <Link
                  key={link}
                  to="/suites"
                  className="text-[12px] tracking-[0.14em] text-white/70 transition-colors hover:text-white"
                >
                  {link.toUpperCase()}
                </Link>
              ) : (
                <a
                  key={link}
                  href="#"
                  className="text-[12px] tracking-[0.14em] text-white/70 transition-colors hover:text-white"
                >
                  {link.toUpperCase()}
                </a>
              )
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+919986197711"
              className="text-[12px] tracking-wide text-white/60 hover:text-white"
            >
              +91 99861 97711
            </a>
            <button className="bg-[#221b14] px-5 py-2.5 text-[11px] font-medium tracking-[0.18em] text-[#faf6ee] transition-colors hover:bg-[#b08d4f]">
              BOOK NOW
            </button>
          </div>

          <button
            className="text-white lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </header>

        {menuOpen && (
          <div className="flex flex-col gap-5 border-b border-[#221b14]/10 bg-[#faf6ee]/95 px-6 py-8 lg:hidden">
            {NAV_LINKS.map((link) => (
              link === "Suites" ? (
                <Link
                  key={link}
                  to="/suites"
                  className="text-[13px] tracking-[0.12em] text-[#221b14]/70"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.toUpperCase()}
                </Link>
              ) : (
                <a
                  key={link}
                  href="#"
                  className="text-[13px] tracking-[0.12em] text-[#221b14]/70"
                >
                  {link.toUpperCase()}
                </a>
              )
            ))}
            <button className="mt-2 w-full bg-[#221b14] py-3 text-[11px] font-medium tracking-[0.18em] text-[#faf6ee]">
              BOOK NOW
            </button>
          </div>
        )}

        <div className="flex flex-1 items-end px-6 pb-8 md:items-center md:px-16 md:pb-0">
          <div className="max-w-lg pb-20 pt-24 md:py-0">
            <p className="mb-3 text-[11px] tracking-[0.35em] text-[#c9a96e]">
              RICHMOND TOWN, BENGALURU
            </p>
            <h1 className="font-serif text-[48px] leading-[1.08] text-white sm:text-[60px] md:text-[72px]">
              Stay Like
              <br />
              Home.
            </h1>
            <p className="mt-6 max-w-[380px] text-[14px] leading-[1.75] text-white/60">
              Thoughtfully designed serviced suites in the heart of Bengaluru.
              Comfort, privacy and convenience — just like home.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link
                to="/suites"
                className="group flex items-center gap-3 text-[12px] tracking-[0.16em] text-white transition-colors hover:text-[#c9a96e]"
              >
                <span className="inline-block h-px w-8 bg-white/40 transition-all group-hover:w-12 group-hover:bg-[#c9a96e]" />
                EXPLORE SUITES
              </Link>
              <a
                href="tel:+919986197711"
                className="text-[12px] tracking-[0.16em] text-white/50 transition-colors hover:text-white"
              >
                CALL US
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-4 mb-4 grid grid-cols-2 gap-px bg-[#221b14]/15 sm:mx-16 sm:mb-8 sm:grid-cols-4">
          <div className="bg-[#faf6ee] px-5 py-4 sm:px-6 sm:py-5">
            <p className="mb-1 text-[10px] tracking-[0.2em] text-[#221b14]/50">
              CHECK IN
            </p>
            <label className="relative flex cursor-pointer items-center justify-between">
              <span className="font-serif text-[16px] text-[#221b14]">
                {ci.full}
              </span>
              <Calendar size={14} className="text-[#221b14]/50" />
              <input
                type="date"
                value={checkIn}
                min={today}
                onChange={(e) => setCheckIn(e.target.value)}
                className="absolute inset-0 opacity-0"
              />
            </label>
            <p className="mt-0.5 text-[11px] text-[#221b14]/45">{ci.day}</p>
          </div>

          <div className="bg-[#faf6ee] px-5 py-4 sm:px-6 sm:py-5">
            <p className="mb-1 text-[10px] tracking-[0.2em] text-[#221b14]/50">
              CHECK OUT
            </p>
            <label className="relative flex cursor-pointer items-center justify-between">
              <span className="font-serif text-[16px] text-[#221b14]">
                {co.full}
              </span>
              <Calendar size={14} className="text-[#221b14]/50" />
              <input
                type="date"
                value={checkOut}
                min={minCheckOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="absolute inset-0 opacity-0"
              />
            </label>
            <p className="mt-0.5 text-[11px] text-[#221b14]/45">{co.day}</p>
          </div>

          <div ref={guestsRef} className="relative bg-[#faf6ee] px-5 py-4 sm:px-6 sm:py-5">
            <p className="mb-1 text-[10px] tracking-[0.2em] text-[#221b14]/50">
              GUESTS
            </p>
            <button
              onClick={() => setGuestsOpen((v) => !v)}
              className="flex w-full items-center justify-between"
            >
              <span className="font-serif text-[16px] text-[#221b14]">
                {guests}
              </span>
              <ChevronDown size={14} className={`text-[#221b14]/50 transition-transform ${guestsOpen ? "rotate-180" : ""}`} />
            </button>
            {guestsOpen && (
              <div className="absolute bottom-full left-0 z-30 mb-1 w-full border border-[#221b14]/15 bg-[#faf6ee]">
                {["1 Adult", "2 Adults", "3 Adults", "2 Adults, 1 Child"].map(
                  (g) => (
                    <button
                      key={g}
                      onClick={() => {
                        setGuests(g);
                        setGuestsOpen(false);
                      }}
                      className={`block w-full px-5 py-3 text-left text-[13px] transition-colors hover:bg-[#221b14]/5 hover:text-[#221b14] ${
                        guests === g ? "text-[#b08d4f]" : "text-[#221b14]/70"
                      }`}
                    >
                      {g}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <button
            onClick={handleCheckAvailability}
            className="flex items-center justify-center bg-[#221b14] px-5 py-4 text-[11px] font-medium tracking-[0.18em] text-[#faf6ee] transition-colors hover:bg-[#b08d4f] sm:px-6 sm:py-5"
          >
            CHECK AVAILABILITY
          </button>
        </div>
      </div>
    </div>
  );
}
