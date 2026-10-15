"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sparkles, ArrowRight, PhoneCall, ChevronRight, ShieldCheck } from "lucide-react";
import { BRAND } from "@/data/portfolioData";

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenPortfolioPdf: () => void;
}

export default function Navbar({ onOpenConsultation, onOpenPortfolioPdf }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#projects" },
    { name: "ROI Estimator", href: "#roi-calculator" },
    { name: "Outcomes", href: "#outcomes" },
    { name: "About Us", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E0E11]/90 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-2xl"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-4 group mr-3 xl:mr-12 shrink-0">
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 xl:w-16 xl:h-16 rounded-full overflow-hidden border-2 border-[#FF6B35] shadow-xl shadow-[#FF6B35]/30 group-hover:scale-105 transition-transform shrink-0 bg-white p-0.5">
              <Image
                src="/logo.jpg"
                alt="Karya Saarthi Logo"
                fill
                className="object-contain rounded-full"
                sizes="(max-width: 640px) 44px, (max-width: 1280px) 56px, 64px"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-2xl xl:text-3xl font-black tracking-normal text-white flex items-center gap-1.5 sm:gap-2 leading-none">
                KARYA <span className="text-[#FF6B35]">SAARTHI</span>
              </span>
              <p className="text-[9px] sm:text-xs text-[#FF6B35] font-extrabold tracking-widest uppercase mt-0.5 sm:mt-1">
                Teach + Complete Solutions
              </p>
            </div>
          </Link>

          {/* Desktop & Laptop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-6 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-zinc-300 hover:text-[#FF6B35] transition-colors whitespace-nowrap px-1 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop & Laptop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <button
              onClick={onOpenPortfolioPdf}
              className="text-xs font-bold px-3 py-2 rounded-xl text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Portfolio PDF</span>
            </button>
            
            <button
              onClick={onOpenConsultation}
              className="relative group text-xs xl:text-sm font-bold px-4 py-2.5 rounded-xl text-white bg-gradient-to-r from-[#FF7A00] to-[#FFA000] hover:opacity-95 transition-all shadow-lg shadow-[#FF7A00]/25 flex items-center gap-2"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Toggle Responsive Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6B35]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E0E11]/95 backdrop-blur-2xl border-b border-white/15 px-5 pt-4 pb-6 space-y-3 shadow-2xl animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 px-3 rounded-xl text-sm font-semibold text-zinc-200 hover:text-[#FF6B35] hover:bg-white/5 transition-all border-b border-white/5"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortfolioPdf();
              }}
              className="w-full py-3 rounded-xl text-xs font-bold text-center bg-white/5 hover:bg-white/10 border border-white/15 text-white flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
              <span>Download Portfolio PDF</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-center bg-[#FF6B35] text-white shadow-xl shadow-[#FF6B35]/25 flex items-center justify-center gap-2"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
