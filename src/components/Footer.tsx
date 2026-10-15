"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Briefcase,
  Globe,
  CheckCircle2,
  X,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

interface FooterProps {
  onOpenAppointment?: () => void;
}

export default function Footer({ onOpenAppointment }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<"privacy" | "disclaimer" | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="bg-[#0A0A0D] text-zinc-400 border-t border-white/10 pt-16 pb-12 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid: Brand Column + 4 Nav Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo + Name */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/15 bg-white p-1 shadow-lg shrink-0">
                <Image
                  src="/karya-saarthi-logo.jpg"
                  alt="Karya Saarthi Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block">
                  Karya Saarthi
                </span>
                <span className="text-[10px] text-[#FF7A00] tracking-wider uppercase font-semibold">
                  Your Trusted Work Companion
                </span>
              </div>
            </div>

            {/* Mission / Tagline */}
            <p className="text-sm text-zinc-300 leading-relaxed max-w-sm">
              Your digital growth partner — expert academic, technical & business services for students and companies across India.
            </p>

            {/* Contact Details */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF4081] shrink-0" />
                <a
                  href="tel:+918595025753"
                  className="text-zinc-200 hover:text-white transition-colors font-medium"
                >
                  +91 8595025753
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href="mailto:support@karyasaarthi.com"
                  className="text-zinc-200 hover:text-white transition-colors"
                >
                  support@karyasaarthi.com
                </a>
              </div>
            </div>

            {/* Social Icons (5 Circular Buttons) */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com/karyasaarthi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#FF7A00] text-zinc-300 hover:text-white flex items-center justify-center transition-all border border-white/5 hover:border-transparent hover:scale-105"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/karyasaarthi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#004E89] text-zinc-300 hover:text-white flex items-center justify-center transition-all border border-white/5 hover:border-transparent hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@karyasaarthi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#FF0000] text-zinc-300 hover:text-white flex items-center justify-center transition-all border border-white/5 hover:border-transparent hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/karyasaarthi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-all border border-white/5 hover:border-transparent hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/karyasaarthi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0088cc] text-zinc-300 hover:text-white flex items-center justify-center transition-all border border-white/5 hover:border-transparent hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
            </div>

            {/* KS WEBSITES Section */}
            <div className="pt-3 space-y-2.5">
              <span className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase block">
                KS WEBSITES
              </span>
              <div className="space-y-1.5 text-sm">
                <a
                  href="https://career.karyasaarthi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-300 hover:text-[#FF7A00] transition-colors group"
                >
                  <Briefcase className="w-4 h-4 text-pink-400/80 group-hover:text-[#FF7A00]" />
                  <span>Career Portal</span>
                </a>
                <a
                  href="https://hub.karyasaarthi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-300 hover:text-[#FF7A00] transition-colors group"
                >
                  <Globe className="w-4 h-4 text-cyan-400/80 group-hover:text-[#FF7A00]" />
                  <span>KsHub Portal</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Navigation Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: Services */}
            <div className="space-y-3">
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    SEO &amp; Content
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    AI &amp; Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FF7A00] transition-colors font-medium">
                    All Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Saarthi Ecosystem / Products */}
            <div className="space-y-3">
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li>
                  <a href="https://karyasaarthi.com/digital-saarthi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Digital Saarthi
                  </a>
                </li>
                <li>
                  <a href="https://karyasaarthi.com/calling-saarthi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Calling Saarthi
                  </a>
                </li>
                <li>
                  <a href="https://karyasaarthi.com/government-saarthi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Government Saarthi
                  </a>
                </li>
                <li>
                  <a href="https://karyasaarthi.com/market-saarthi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Market Saarthi
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources & Company */}
            <div className="space-y-3">
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li>
                  <a href="https://karyasaarthi.com/blogs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="https://karyasaarthi.com/events" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="https://karyasaarthi.com/podcasts" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Podcasts
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://karyasaarthi.com/careers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal & Policies */}
            <div className="space-y-3">
              <ul className="space-y-2.5 text-sm text-zinc-400">
                <li>
                  <button
                    onClick={() => setActiveModal("privacy")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal("disclaimer")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Disclaimer
                  </button>
                </li>
                <li className="pt-2">
                  <Link
                    href="/admin"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-[#FF7A00] transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Admin Portal</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Newsletter / Stay Updated Container */}
        <div className="bg-[#141418] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Stay updated
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Get latest service offers and platform updates.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing! We'll keep you updated.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-[#0c0c0e] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF7A00] w-full sm:w-72 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>

        {/* Bottom Section: Corporate & Legal Information + Badges */}
        <div className="pt-6 border-t border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-xs text-zinc-400">
          
          {/* Company Registration Details */}
          <div className="space-y-1.5 max-w-3xl leading-relaxed">
            <p className="text-zinc-300 font-medium">
              Karya Saarthi — A brand of Karyanex Private Limited
            </p>
            <p className="text-zinc-400">
              Registered company name: Karyanex Private Limited
            </p>
            <p className="font-mono text-zinc-400 text-[11px]">
              CIN: U85500BR2026PTC085054 · GST number: 10AAMCK8870B1ZN
            </p>
            <p className="text-zinc-500 text-[11px] pt-0.5">
              Karya Saarthi is the trade name operated by Karyanex Private Limited, a company incorporated under the Companies Act, 2013. All transactions, contracts, and legal obligations are governed under the name Karyanex Private Limited.
            </p>
            <p className="text-zinc-500 text-[11px] pt-1">
              © 2026 Karyanex Private Limited. All rights reserved.
            </p>
          </div>

          {/* Badges on Right */}
          <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0">
            <div className="px-3.5 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/60 text-zinc-300 text-xs font-medium tracking-wide">
              MCA Registered
            </div>
            <div className="px-3.5 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/60 text-zinc-300 text-xs font-medium tracking-wide">
              GST Compliant
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Privacy Policy Modal */}
      {activeModal === "privacy" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#141418] border border-white/10 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-zinc-300 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">Privacy Policy</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs sm:text-sm space-y-3 leading-relaxed text-zinc-300">
              <p>
                Karya Saarthi (operated by Karyanex Private Limited, CIN: U85500BR2026PTC085054) respects your privacy and is committed to protecting the personal data of our users, students, and clients.
              </p>
              <h4 className="font-semibold text-white pt-2">1. Information We Collect</h4>
              <p>
                We collect information provided directly when booking consultations, registering for project services, or subscribing to updates. This includes name, email, phone number, and project requirements.
              </p>
              <h4 className="font-semibold text-white pt-2">2. How We Use Information</h4>
              <p>
                Information collected is used solely for project execution, client communication, milestone updates, and scheduled appointments. We never sell or rent your personal data to third-party marketers.
              </p>
              <h4 className="font-semibold text-white pt-2">3. Data Security &amp; Contact</h4>
              <p>
                All data is encrypted and handled in compliance with applicable Indian IT and Data Protection standards. For questions, contact us at <a href="mailto:support@karyasaarthi.com" className="text-[#FF7A00] underline">support@karyasaarthi.com</a>.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Disclaimer Modal */}
      {activeModal === "disclaimer" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#141418] border border-white/10 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-zinc-300 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">Legal Disclaimer</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs sm:text-sm space-y-3 leading-relaxed text-zinc-300">
              <p>
                Karya Saarthi is a registered commercial brand operated by Karyanex Private Limited. All intellectual property, project deliverables, and services provided through this website are governed by formal service agreements and applicable laws of India.
              </p>
              <h4 className="font-semibold text-white pt-2">Educational &amp; Technical Services</h4>
              <p>
                Our services are designed to mentor, develop, and provide end-to-end technical, business, and research support. Clients and students are encouraged to use research guidance and consulting materials in compliance with their respective institutional guidelines.
              </p>
              <h4 className="font-semibold text-white pt-2">Corporate Identity</h4>
              <p>
                Karyanex Private Limited holds CIN: U85500BR2026PTC085054 and GST: 10AAMCK8870B1ZN. All invoices and legal notices are issued under Karyanex Private Limited.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
