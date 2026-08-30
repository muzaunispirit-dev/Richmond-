import React, { useRef, useEffect, useState } from "react";
import { MapPin, ChefHat, Clock, Calendar, Users, Home } from "lucide-react";
import Reveal from "./Reveal";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef(null);

  const todayStr = React.useMemo(() => new Date().toISOString().split("T")[0], []);
  const tomorrowStr = React.useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, []);
  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [guests, setGuests] = useState("2 Guests");
  const [room, setRoom] = useState("Select room");
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [roomOpen, setRoomOpen] = useState(false);
  const guestsRef = React.useRef(null);
  const roomRef = React.useRef(null);

  const minCheckOut = React.useMemo(() => {
    const d = new Date(checkIn + "T00:00:00");
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, [checkIn]);

  React.useEffect(() => {
    if (checkOut && checkIn && checkOut <= checkIn) {
      setCheckOut(minCheckOut);
    }
  }, [checkIn, checkOut, minCheckOut]);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (guestsRef.current && !guestsRef.current.contains(e.target)) setGuestsOpen(false);
      if (roomRef.current && !roomRef.current.contains(e.target)) setRoomOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (iso) => {
    if (!iso) return "Select date";
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const word = "Bengaluru";
  const displayWord = word.slice(0, charIndex);

  useEffect(() => {
    let timeout;
    const speed = isDeleting ? 50 : 80;
    const pauseTime = 2000;

    if (!isDeleting && charIndex === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
    } else {
      timeout = setTimeout(() => setCharIndex((prev) => isDeleting ? prev - 1 : prev + 1), speed);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);

  const stats = [
    { icon: MapPin, label: "Prime Location", value: "Richmond Town", color: "#B58A4A" },
    { icon: ChefHat, label: "Full Kitchen", value: "In Every Suite", color: "#111111" },
    { icon: Clock, label: "Flexible Stay", value: "Nightly to Monthly", color: "#B58A4A" },
  ];

  return (
    <section className="relative min-h-screen bg-page overflow-hidden" id="home" ref={heroRef}>
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/hero-bg.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative mx-auto max-w-site px-6 w-full min-h-screen flex items-center justify-center pb-64 md:pb-0">
        <Reveal stagger className="max-w-3xl mx-auto text-center z-10 w-full -mt-8 md:-mt-24">
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-white mb-5">
            Richmond Suites
          </p>

          <h1 className="font-bold leading-[1.02] tracking-tight text-white text-[clamp(42px,7vw,84px)]">
            <span className="block">Stay Like Home</span>
          </h1>

          <p className="mt-6 text-white/80 leading-[1.85] text-[clamp(17px,2vw,21px)] max-w-[600px] mx-auto">
            Your comfortable and convenient serviced apartment in the heart of{" "}
            <span className="relative text-accent font-semibold">
              Richmond Town, {displayWord}
              <span className="inline-block w-[2px] h-[1em] ml-1 bg-accent align-middle animate-pulse" aria-hidden="true"></span>
            </span>
            .
          </p>

          <div className="mt-14 hidden items-center gap-6 sm:gap-8 text-white/60 justify-center md:flex">
            <div className="flex items-center gap-2">
              <span className="text-[26px] sm:text-[28px] font-bold text-white">6</span>
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.1em] text-white/50">Suites</span>
            </div>
            <div className="w-px h-8 bg-white/10" aria-hidden="true"></div>
            <div className="flex items-center gap-2">
              <span className="text-[26px] sm:text-[28px] font-bold text-white">4.9</span>
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.1em] text-white/50">Rating</span>
            </div>
            <div className="w-px h-8 bg-white/10" aria-hidden="true"></div>
            <div className="flex items-center gap-2">
              <span className="text-[26px] sm:text-[28px] font-bold text-white">24/7</span>
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.1em] text-white/50">Concierge</span>
            </div>
          </div>

          <div className="mt-16 relative" aria-hidden="true">
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-px bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-20 h-px bg-white/10" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Booking Bar */}
      <div className="absolute bottom-24 left-0 right-0 z-20 px-6">
        <div className="mx-auto max-w-site">
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-2.5 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-0">
              {/* Check In */}
              <div className="relative flex items-center gap-2 md:gap-3 px-3 py-3 md:px-4 md:py-4 border border-white/10 rounded-xl md:border-0 md:rounded-none md:border-b-0 md:border-r md:border-white/10">
                <Calendar size={16} className="shrink-0 text-white/50 md:hidden" />
                <Calendar size={18} className="hidden md:block shrink-0 text-white/50" />
                <div className="min-w-0">
                  <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Check In
                  </p>
                  <label className="cursor-pointer">
                    <span className="text-[12px] md:text-[14px] font-medium text-white">
                      {formatDate(checkIn)}
                    </span>
                    <input
                      type="date"
                      value={checkIn}
                      min={todayStr}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                  </label>
                </div>
              </div>

              {/* Check Out */}
              <div className="relative flex items-center gap-2 md:gap-3 px-3 py-3 md:px-4 md:py-4 border border-white/10 rounded-xl md:border-0 md:rounded-none md:border-b-0 md:border-r md:border-white/10">
                <Calendar size={16} className="shrink-0 text-white/50 md:hidden" />
                <Calendar size={18} className="hidden md:block shrink-0 text-white/50" />
                <div className="min-w-0">
                  <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Check Out
                  </p>
                  <label className="cursor-pointer">
                    <span className="text-[12px] md:text-[14px] font-medium text-white">
                      {formatDate(checkOut)}
                    </span>
                    <input
                      type="date"
                      value={checkOut}
                      min={minCheckOut || tomorrowStr}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                  </label>
                </div>
              </div>

              {/* Guests */}
              <div
                ref={guestsRef}
                className="relative flex items-center gap-2 md:gap-3 px-3 py-3 md:px-4 md:py-4 border border-white/10 rounded-xl md:border-0 md:rounded-none md:border-b-0 md:border-r md:border-white/10"
              >
                <Users size={16} className="shrink-0 text-white/50 md:hidden" />
                <Users size={18} className="hidden md:block shrink-0 text-white/50" />
                <div className="min-w-0">
                  <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Guests
                  </p>
                  <button
                    onClick={() => setGuestsOpen(!guestsOpen)}
                    className="flex items-center gap-1 text-[12px] md:text-[14px] font-medium text-white"
                  >
                    {guests}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
                {guestsOpen && (
                  <div className="absolute bottom-full left-0 z-30 mb-2 w-48 rounded-xl bg-white shadow-xl border border-border overflow-hidden">
                    {["1 Guest", "2 Guests", "3 Guests", "4 Guests"].map((g) => (
                      <button
                        key={g}
                        onClick={() => {
                          setGuests(g);
                          setGuestsOpen(false);
                        }}
                        className={`block w-full px-4 py-3 text-left text-[14px] transition-colors hover:bg-page ${
                          guests === g
                            ? "font-medium text-accent"
                            : "text-secondary"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Room */}
              <div
                ref={roomRef}
                className="relative flex items-center gap-2 md:gap-3 px-3 py-3 md:px-4 md:py-4 border border-white/10 rounded-xl md:border-0 md:rounded-none md:border-b-0 md:border-r md:border-white/10"
              >
                <Home size={16} className="shrink-0 text-white/50 md:hidden" />
                <Home size={18} className="hidden md:block shrink-0 text-white/50" />
                <div className="min-w-0">
                  <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-white/50">
                    Room
                  </p>
                  <button
                    onClick={() => setRoomOpen(!roomOpen)}
                    className="flex items-center gap-1 text-[12px] md:text-[14px] font-medium text-white"
                  >
                    {room}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
                {roomOpen && (
                  <div className="absolute bottom-full left-0 z-30 mb-2 w-52 rounded-xl bg-white shadow-xl border border-border overflow-hidden">
                    {[
                      "Studio Suite",
                      "Executive Suite",
                      "Premium Suite",
                      "Family Suite",
                    ].map((r) => (
                      <button
                        key={r}
                        onClick={() => {
                          setRoom(r);
                          setRoomOpen(false);
                        }}
                        className={`block w-full px-4 py-3 text-left text-[14px] transition-colors hover:bg-page ${
                          room === r
                            ? "font-medium text-accent"
                            : "text-secondary"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Check Availability Button */}
              <div className="col-span-2 flex items-center justify-center p-1.5 md:col-span-1 md:p-4">
                <a
                  href="#contact"
                  className="w-full rounded-xl border border-white/20 bg-accent py-3 md:py-4 text-[12px] md:text-[14px] font-semibold text-white transition-all hover:bg-accent-dark hover:shadow-[0_10px_30px_-5px_rgba(181,138,74,0.4)] text-center"
                >
                  CHECK AVAILABILITY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}