"use client";

import React, { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/portfolioData";
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  DollarSign,
  Quote,
  Star,
  X,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Award,
} from "lucide-react";

interface ProjectsSectionProps {
  onOpenConsultation: () => void;
}

export default function ProjectsSection({ onOpenConsultation }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web & E-Commerce" },
    { id: "ai", label: "AI & ML Solutions" },
    { id: "academic", label: "Research & Academic" },
    { id: "saas", label: "SaaS & MVP" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-[#121216] relative text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF6B35] text-xs font-semibold uppercase tracking-wider">
            Featured Projects & Case Studies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Proven <span className="text-[#FF6B35]">Results</span> Across 500+ Projects
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Explore how Karya Saarthi helped startups, PhD scholars, e-commerce brands, and logistics enterprises achieve 10x ROI, raise capital, and scale seamlessly.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/25"
                  : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card card-interactive-lift rounded-3xl overflow-hidden border border-white/10 group flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Banner */}
                <div className="relative h-48 bg-gradient-to-br from-[#1E1E26] to-[#0E0E11] p-6 flex flex-col justify-between border-b border-white/10 overflow-hidden">
                  {/* Decorative Glow with Smooth Hover Expansion */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF6B35]/20 rounded-full blur-2xl pointer-events-none group-hover:scale-175 group-hover:bg-[#FF6B35]/35 transition-all duration-500" />
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/15">
                      {project.industry}
                    </span>
                    <span className="text-xs font-mono text-[#FF6B35] font-semibold">
                      {project.budget}
                    </span>
                  </div>

                  <div className="z-10">
                    <p className="text-xs text-zinc-400 font-medium">{project.client}</p>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B35] transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  {/* Challenge Summary */}
                  <div>
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                      The Challenge:
                    </span>
                    <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Top Result Highlight */}
                  <div className="p-3 rounded-xl bg-[#1BAC6E]/10 border border-[#1BAC6E]/20 text-[#1BAC6E] text-xs font-semibold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span className="line-clamp-1">{project.results[0]}</span>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-[#FF6B35] border border-white/10 hover:border-[#FF6B35] transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Full Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#16161B] border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6B35] uppercase tracking-wider mb-1">
                <span>{selectedProject.industry}</span>
                <span>•</span>
                <span>{selectedProject.projectType}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mt-2 font-mono">
                <span>Client: <strong className="text-white">{selectedProject.client}</strong></span>
                <span>Timeline: <strong className="text-[#FF6B35]">{selectedProject.timeline}</strong></span>
                <span>Budget: <strong className="text-[#1BAC6E]">{selectedProject.budget}</strong></span>
              </div>
            </div>

            {/* Challenge Section */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#FF6B35]">
                1. The Client's Challenge & Problem
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-900/80 p-4 rounded-xl border border-white/5">
                {selectedProject.challenge}
              </p>
            </div>

            {/* Solution Section */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400">
                2. Solution Provided by Karya Saarthi
              </h4>
              <ul className="space-y-2">
                {selectedProject.solution.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#1BAC6E]">
                3. Measurable Key Performance Results
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.results.map((res, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#1BAC6E]/10 border border-[#1BAC6E]/20 text-xs font-semibold text-zinc-200 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#1BAC6E] shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Technology Stack & Tools:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-900 text-zinc-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-zinc-900 to-[#1A1A22] border border-[#FF6B35]/30 space-y-3 relative">
              <Quote className="w-8 h-8 text-[#FF6B35]/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 italic leading-relaxed">
                "{selectedProject.testimonial.quote}"
              </p>
              <div className="text-xs font-semibold text-[#FF6B35]">
                — {selectedProject.testimonial.author} ({selectedProject.testimonial.role})
              </div>
            </div>

            {/* Live Links */}
            {selectedProject.liveLinks && selectedProject.liveLinks.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {selectedProject.liveLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            )}

            {/* Modal Bottom CTAs */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenConsultation();
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#FF6B35] hover:bg-[#FF8855] shadow-lg shadow-[#FF6B35]/20 flex items-center gap-2"
              >
                <span>Start Similar Project With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
