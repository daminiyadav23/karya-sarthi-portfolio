"use client";

import React from "react";
import Image from "next/image";
import { BRAND, SERVICES, CASE_STUDIES } from "@/data/portfolioData";
import { X, Download, FileText, Printer, Sparkles, CheckCircle2 } from "lucide-react";

interface PortfolioPdfModalProps {
  onClose: () => void;
}

export default function PortfolioPdfModal({ onClose }: PortfolioPdfModalProps) {
  
  // Clean Print & PDF Download Handler
  const handlePrintOrDownload = (isDownload = false) => {
    const printWindow = window.open("", "_blank", "width=900,height=800");
    if (!printWindow) {
      window.print();
      return;
    }

    const docContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>${isDownload ? "Karya_Saarthi_Company_Portfolio.pdf" : "Karya Saarthi Official Portfolio"}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap');
            * { box-sizing: border-box; }
            body {
              font-family: 'Inter', system-ui, -apple-system, sans-serif;
              color: #111827;
              background-color: #ffffff;
              margin: 0;
              padding: 40px;
            }
            .header {
              text-align: center;
              padding-bottom: 25px;
              border-bottom: 3px solid #FF6B35;
              margin-bottom: 25px;
            }
            .logo-img {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              border: 3px solid #FF6B35;
              margin: 0 auto 12px auto;
              display: block;
              object-fit: contain;
              background-color: #ffffff;
              padding: 2px;
            }
            .title {
              font-size: 32px;
              font-weight: 900;
              margin: 0;
              letter-spacing: -0.5px;
              color: #111827;
            }
            .tagline {
              color: #FF6B35;
              font-weight: 800;
              text-transform: uppercase;
              font-size: 13px;
              letter-spacing: 2px;
              margin-top: 6px;
            }
            .mission {
              font-size: 13px;
              color: #4B5563;
              max-width: 640px;
              margin: 10px auto 0 auto;
              line-height: 1.5;
            }
            .section-title {
              font-size: 15px;
              font-weight: 800;
              text-transform: uppercase;
              color: #FF6B35;
              border-bottom: 2px solid #F3F4F6;
              padding-bottom: 6px;
              margin-top: 30px;
              margin-bottom: 16px;
            }
            .grid-4 {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 15px;
              margin-bottom: 20px;
              text-align: center;
            }
            .grid-2 {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 15px;
              margin-bottom: 20px;
            }
            .card {
              border: 1px solid #E5E7EB;
              border-radius: 12px;
              padding: 16px;
              background: #FAFAFA;
            }
            .stat-val {
              font-size: 26px;
              font-weight: 900;
              color: #FF6B35;
            }
            .stat-lbl {
              font-size: 11px;
              color: #6B7280;
              margin-top: 4px;
              font-weight: 600;
            }
            .service-price {
              float: right;
              color: #FF6B35;
              font-weight: 800;
              font-size: 12px;
              background: #FFF7ED;
              padding: 2px 8px;
              border-radius: 12px;
              border: 1px solid #FFEDD5;
            }
            .service-title {
              font-weight: 800;
              font-size: 14px;
              margin-bottom: 6px;
              color: #111827;
            }
            .service-desc {
              font-size: 11px;
              color: #4B5563;
              line-height: 1.4;
            }
            .case-cat {
              font-size: 10px;
              color: #FF6B35;
              font-weight: 800;
              text-transform: uppercase;
              margin-bottom: 4px;
            }
            .case-title {
              font-weight: 800;
              font-size: 14px;
              margin-bottom: 6px;
              color: #111827;
            }
            .case-res {
              font-size: 11px;
              color: #1BAC6E;
              font-weight: 700;
            }
            .footer-info {
              text-align: center;
              font-size: 11px;
              color: #9CA3AF;
              margin-top: 40px;
              border-top: 1px solid #E5E7EB;
              padding-top: 20px;
            }
            @media print {
              body { padding: 20px; }
              @page { size: A4 portrait; margin: 12mm; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="${window.location.origin}/logo.jpg" class="logo-img" alt="Karya Saarthi Logo" />
            <h1 class="title">KARYA SAARTHI</h1>
            <div class="tagline">${BRAND.tagline}</div>
            <p class="mission">${BRAND.mission}</p>
          </div>

          <div class="section-title">Company Key Performance Metrics</div>
          <div class="grid-4">
            <div class="card"><div class="stat-val">${BRAND.keyStats.revenueFirst3Months}</div><div class="stat-lbl">First 3 Months Revenue</div></div>
            <div class="card"><div class="stat-val" style="color:#111827;">${BRAND.keyStats.totalProjects}</div><div class="stat-lbl">Projects Delivered</div></div>
            <div class="card"><div class="stat-val" style="color:#1BAC6E;">${BRAND.keyStats.rating}</div><div class="stat-lbl">Satisfaction Score</div></div>
            <div class="card"><div class="stat-val" style="color:#004E89;">${BRAND.keyStats.satisfaction}</div><div class="stat-lbl">Client Retention</div></div>
          </div>

          <div class="section-title">Core Services & Offerings</div>
          <div class="grid-2">
            ${SERVICES.map(s => `
              <div class="card">
                <span class="service-price">${s.priceRange}</span>
                <div class="service-title">${s.title}</div>
                <div class="service-desc">${s.description}</div>
              </div>
            `).join('')}
          </div>

          <div class="section-title">Featured Case Studies & Results</div>
          <div class="grid-2">
            ${CASE_STUDIES.map(c => `
              <div class="card">
                <div class="case-cat">${c.industry} • ${c.client}</div>
                <div class="case-title">${c.title}</div>
                <div class="case-res">✓ ${c.results[0]}</div>
              </div>
            `).join('')}
          </div>

          <div class="footer-info">
            Official Karya Saarthi Executive Document • Karyanex Private Limited • Burari, New Delhi 110084 • info@karyasaarthi.com • +91 6238521530
          </div>

          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 300);
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(docContent);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#16161B] border border-white/20 rounded-3xl max-w-4xl w-full p-4 sm:p-8 relative max-h-[92vh] overflow-y-auto space-y-6 shadow-2xl text-white">
        
        {/* Modal Header Controls */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF6B35] shadow-md shadow-[#FF6B35]/30 shrink-0 bg-white p-0.5">
              <Image src="/logo.jpg" alt="Karya Saarthi Logo" fill className="object-contain rounded-full" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">Karya Saarthi Official Executive Portfolio</h3>
              <p className="text-xs text-zinc-400">30-Page Comprehensive Overview Document</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePrintOrDownload(false)}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-200 border border-white/10 flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span className="hidden sm:inline">Print Document</span>
            </button>

            <button
              onClick={() => handlePrintOrDownload(true)}
              className="px-4 py-2 rounded-xl bg-[#FF6B35] hover:bg-[#FF8855] text-xs font-bold text-white shadow-lg flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Executive Portfolio Preview Content */}
        <div className="space-y-6 p-4 sm:p-6 bg-zinc-950/80 rounded-2xl border border-white/10">
          
          {/* Cover Header */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 to-[#1A1A22] border border-[#FF6B35]/30 text-center space-y-4">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#FF6B35] mx-auto shadow-2xl bg-white p-1">
              <Image src="/logo.jpg" alt="Logo" fill className="object-contain rounded-full" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">KARYA SAARTHI</h1>
              <p className="text-xs sm:text-sm font-mono text-[#FF6B35] font-extrabold uppercase tracking-widest mt-1">
                {BRAND.tagline}
              </p>
            </div>
            <p className="text-xs text-zinc-300 max-w-xl mx-auto leading-relaxed">{BRAND.mission}</p>
          </div>

          {/* Table of Contents */}
          <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
              Executive Document Index (30 Pages Overview):
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-zinc-300">
              <div>• Page 1: Executive Summary</div>
              <div>• Page 2-4: Core Services</div>
              <div>• Page 5-18: Case Studies</div>
              <div>• Page 19-22: Tech Architecture</div>
              <div>• Page 23-26: Team & Leadership</div>
              <div>• Page 27-30: Pricing & Terms</div>
            </div>
          </div>

          {/* Key Achievements Grid */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company Performance Metrics
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/10">
                <div className="text-xl sm:text-2xl font-extrabold text-[#FF6B35]">{BRAND.keyStats.revenueFirst3Months}</div>
                <div className="text-[10px] text-zinc-400">First 3 Months Revenue</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/10">
                <div className="text-xl sm:text-2xl font-extrabold text-white">{BRAND.keyStats.totalProjects}</div>
                <div className="text-[10px] text-zinc-400">Projects Delivered</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/10">
                <div className="text-xl sm:text-2xl font-extrabold text-[#1BAC6E]">{BRAND.keyStats.rating}</div>
                <div className="text-[10px] text-zinc-400">Satisfaction Score</div>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-white/10">
                <div className="text-xl sm:text-2xl font-extrabold text-blue-400">{BRAND.keyStats.satisfaction}</div>
                <div className="text-[10px] text-zinc-400">Client Retention</div>
              </div>
            </div>
          </div>

          {/* Core Services Section */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Primary Service Offerings & Pricing Tiers
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {SERVICES.map((s) => (
                <div key={s.id} className="p-3 rounded-xl bg-zinc-900 border border-white/10 space-y-1">
                  <div className="flex justify-between items-center font-bold text-white">
                    <span>{s.title}</span>
                    <span className="text-[#FF6B35] font-mono text-[11px]">{s.priceRange}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-2">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Case Study Summaries */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Featured Case Studies & ROI Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {CASE_STUDIES.map((c) => (
                <div key={c.id} className="p-3 rounded-xl bg-zinc-900 border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-[#FF6B35] block">{c.industry} • {c.client}</span>
                  <div className="font-bold text-white">{c.title}</div>
                  <p className="text-zinc-300 text-[11px] line-clamp-1">✓ {c.results[0]}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
          <span>Official Karya Saarthi Executive Portfolio Document (2026)</span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handlePrintOrDownload(false)}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Print</span>
            </button>

            <button
              onClick={() => handlePrintOrDownload(true)}
              className="px-6 py-2 rounded-xl bg-[#FF6B35] hover:bg-[#FF8855] text-white font-bold shadow-lg flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
