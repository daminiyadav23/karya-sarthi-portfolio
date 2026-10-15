"use client";

import React, { useState } from "react";
import { SERVICES, ServiceItem } from "@/data/portfolioData";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Cpu,
  BookOpen,
  Briefcase,
  CheckCircle,
  Clock,
  Tag,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForQuote }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-[#FF6B35]" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-blue-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-amber-400" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#FF6B35]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0E0E11] relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-semibold uppercase tracking-wider">
            Our Core Services & Offerings
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            High-Performance <span className="text-[#FF6B35]">Solutions</span> Tailored to Scale
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            From modern web applications to complex AI models and GTM strategies, explore our full spectrum of offerings with transparent pricing and guaranteed timelines.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card card-interactive-lift rounded-2xl p-7 border border-white/10 group flex flex-col justify-between"
            >
              <div>
                {/* Header Row: Icon + Price Tag */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#FF6B35]/20 group-hover:border-[#FF6B35]/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/30">
                    {service.priceRange}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-300 mb-5 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1BAC6E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {service.deliverables.length > 3 && (
                      <li className="text-[11px] text-[#FF6B35] italic font-medium pl-5">
                        +{service.deliverables.length - 3} more deliverables
                      </li>
                    )}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400">
                      +{service.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-zinc-300 hover:text-white underline underline-offset-4"
                >
                  View Details
                </button>
                
                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="text-xs font-bold px-3.5 py-2 rounded-lg bg-[#FF6B35] text-white hover:bg-[#FF8855] transition-all flex items-center gap-1.5 shadow-md shadow-[#FF6B35]/20"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#16161B] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-[#FF6B35]/15 text-[#FF6B35]">
                {getIcon(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1 font-mono">
                  <span className="text-[#FF6B35]">{selectedService.priceRange}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedService.timeline}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed">
              {selectedService.description}
            </p>

            {/* Best For */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-white/10">
              <span className="text-xs font-semibold text-[#FF6B35] uppercase tracking-wider block mb-1">
                Target Audience / Best For:
              </span>
              <p className="text-xs text-zinc-200">{selectedService.bestFor}</p>
            </div>

            {/* Deliverables */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Full Deliverables List:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-[#1BAC6E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Technologies & Tools:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-900 text-zinc-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Modal CTA */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForQuote(serviceName);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#FF6B35] hover:bg-[#FF8855] transition-all shadow-lg"
              >
                Get Custom Proposal for {selectedService.title}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
