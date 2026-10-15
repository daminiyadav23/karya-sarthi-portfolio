"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Star, TrendingUp, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { BRAND } from "@/data/portfolioData";

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenQuote: () => void;
}

export default function Hero({ onOpenConsultation, onOpenQuote }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0E0E11] text-white">
      {/* 1. Fast, Clearly Visible Animated Background Square Grid */}
      <div 
        className="absolute inset-0 animated-grid-pattern opacity-70 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_40%,#000_50%,transparent_95%)] pointer-events-none z-0"
      />

      {/* Gentle, Subtle Ambient Warm Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#FF7A00]/12 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#004E89]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Logo Emblem Header styled with Logo Colors */}
          <div className="inline-flex items-center gap-3.5 bg-[#121216]/90 border-2 border-[#004E89]/60 hover:border-[#FF7A00]/70 rounded-full px-5 py-2.5 backdrop-blur-md shadow-xl shadow-[#FF7A00]/15 animate-float transition-colors">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF7A00] shadow-md shadow-[#FF7A00]/40 shrink-0 bg-white p-0.5">
              <Image src="/logo.jpg" alt="Karya Saarthi Emblem" fill className="object-contain rounded-full" />
            </div>
            <span className="text-xs sm:text-sm font-extrabold text-zinc-100 tracking-wider uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] animate-ping" />
              India's 1st "Teach + Complete" Project Platform
            </span>
          </div>

          {/* Main Title Tagline with Animated Logo Color Gradient */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Real Work. <br className="hidden sm:inline" />
            <span className="logo-gradient-animated">Real Learning. Real Growth.</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            {BRAND.mission} We bridge the gap between learning and doing through rapid startup MVPs, scalable web & mobile solutions, AI data models, and research support.
          </p>

          {/* Action CTAs with Light Sweep Animation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#FF7A00] via-[#FF8A00] to-[#FFA000] hover:opacity-95 shadow-xl shadow-[#FF7A00]/30 transition-all flex items-center justify-center gap-2 group"
            >
              {/* Animated Light Sweep Effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shine-sweep pointer-events-none" />
              <span className="relative z-10">Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform relative z-10" />
            </button>

            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/15 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-[#FF6B35]" />
              <span>Get Custom Quote</span>
            </button>

            <a
              href="#roi-calculator"
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-medium text-zinc-400 hover:text-[#FF6B35] transition-colors text-center"
            >
              Calculate Project ROI →
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1BAC6E]" />
              <span>Bootstrapped & Profitable</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
              <span>100% Turnitin Verified Quality</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.8/5 Rating (150+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Hero Stat Banner with Interactive Lift & Glow */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card card-interactive-lift rounded-2xl p-6 text-center border border-white/10 group cursor-default">
            <div className="text-3xl sm:text-4xl font-black text-[#FF6B35] group-hover:scale-110 transition-transform duration-300">
              {BRAND.keyStats.revenueFirst3Months}
            </div>
            <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium group-hover:text-zinc-200 transition-colors">
              Revenue in First 3 Months
            </div>
          </div>

          <div className="glass-card card-interactive-lift rounded-2xl p-6 text-center border border-white/10 group cursor-default">
            <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#FF8855] group-hover:scale-110 transition-all duration-300">
              {BRAND.keyStats.totalProjects}
            </div>
            <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium group-hover:text-zinc-200 transition-colors">
              Successful Projects Delivered
            </div>
          </div>

          <div className="glass-card card-interactive-lift rounded-2xl p-6 text-center border border-white/10 group cursor-default">
            <div className="text-3xl sm:text-4xl font-black text-[#1BAC6E] group-hover:scale-110 transition-transform duration-300">
              {BRAND.keyStats.rating}
            </div>
            <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium group-hover:text-zinc-200 transition-colors">
              Client Satisfaction Rating
            </div>
          </div>

          <div className="glass-card card-interactive-lift rounded-2xl p-6 text-center border border-white/10 group cursor-default">
            <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#FF6B35] group-hover:scale-110 transition-all duration-300">
              {BRAND.keyStats.satisfaction}
            </div>
            <div className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium group-hover:text-zinc-200 transition-colors">
              Client Retention & Happiness
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
