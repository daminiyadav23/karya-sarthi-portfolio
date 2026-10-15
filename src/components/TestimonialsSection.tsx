"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/portfolioData";
import { Star, Quote, ChevronLeft, ChevronRight, Award, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#0E0E11] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-semibold uppercase tracking-wider">
            Client Testimonials & Social Proof
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Trusted by <span className="text-[#FF6B35]">Founders</span>, Researchers & SMBs
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Read real feedback from clients who launched apps, published IEEE papers, and scaled online revenue with Karya Saarthi.
          </p>
        </div>

        {/* Featured Interactive Testimonial Spotlight */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#FF6B35]/30 shadow-2xl relative mb-16 max-w-4xl mx-auto overflow-hidden">
          <Quote className="w-16 h-16 text-[#FF6B35]/10 absolute top-6 right-6 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Stars */}
            <div className="flex items-center gap-1.5 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-xs font-bold text-zinc-400 ml-2">
                5.0 Verified Review
              </span>
            </div>

            {/* Quote text */}
            <p className="text-lg sm:text-2xl font-medium text-zinc-100 leading-relaxed italic">
              "{current.text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF6B35] shadow-md shadow-[#FF6B35]/30 shrink-0">
                  <Image src="/logo.jpg" alt="Karya Saarthi Emblem" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{current.client}</h3>
                  <p className="text-xs text-[#FF6B35] font-semibold">{current.role} • {current.company}</p>
                  <span className="text-[11px] text-zinc-400 font-mono mt-0.5 block">
                    Service: {current.serviceUsed}
                  </span>
                </div>
              </div>

              {/* Slider controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-white/5 hover:bg-[#FF6B35] border border-white/10 transition-all text-white"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white/5 hover:bg-[#FF6B35] border border-white/10 transition-all text-white"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof & Rating Badges with Interactive Lift */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glass-card card-interactive-lift p-5 rounded-2xl border border-white/10 group">
            <div className="text-xl font-bold text-white flex items-center justify-center gap-1 group-hover:text-[#FF7A00] transition-colors">
              <span>Google Reviews</span>
            </div>
            <div className="text-2xl font-black text-[#FF7A00] mt-1 group-hover:scale-110 transition-transform duration-300">4.8 / 5</div>
            <p className="text-xs text-zinc-400">150+ Verified Reviews</p>
          </div>

          <div className="glass-card card-interactive-lift p-5 rounded-2xl border border-white/10 group">
            <div className="text-xl font-bold text-white group-hover:text-[#0D9488] transition-colors">Clutch.co</div>
            <div className="text-2xl font-black text-[#0D9488] mt-1 group-hover:scale-110 transition-transform duration-300">4.9 / 5</div>
            <p className="text-xs text-zinc-400">Top 2% Agencies</p>
          </div>

          <div className="glass-card card-interactive-lift p-5 rounded-2xl border border-white/10 group">
            <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">GoodFirms</div>
            <div className="text-2xl font-black text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300">4.8 / 5</div>
            <p className="text-xs text-zinc-400">Verified Partner</p>
          </div>

          <div className="glass-card card-interactive-lift p-5 rounded-2xl border border-white/10 group">
            <div className="text-xl font-bold text-white group-hover:text-[#FF9E00] transition-colors">Press Coverage</div>
            <div className="text-sm font-bold text-amber-400 mt-2">Inc42 • YourStory</div>
            <p className="text-xs text-zinc-400">Startup Magazine</p>
          </div>
        </div>

      </div>
    </section>
  );
}
