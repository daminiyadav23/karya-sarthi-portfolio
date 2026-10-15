import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karya Saarthi | Real Work. Real Learning. Real Growth.",
  description: "India's first Teach + Complete project solutions company. Custom Web Development, Mobile Apps, Digital Marketing, AI/ML, Research & Business Consulting.",
  keywords: ["Karya Saarthi", "Project Solutions", "Web Development", "Mobile Apps", "AI ML", "Digital Marketing", "Research Support", "Business Consulting"],
  openGraph: {
    title: "Karya Saarthi - Official Company Portfolio",
    description: "Bridging the gap between learning and doing. 500+ projects completed, 98% satisfaction rate.",
    images: ["/logo.jpg"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} dark scroll-smooth`}>
      <body className="bg-[#0E0E11] text-[#F7F7F7] font-sans antialiased min-h-screen flex flex-col selection:bg-[#FF6B35] selection:text-white">
        {children}
      </body>
    </html>
  );
}
