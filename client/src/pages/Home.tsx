/**
 * Home — Medixus Corporate Website
 * Design: Clinical Precision × Digital Frontier
 * Single-page layout with all sections
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SummarySection from "@/components/SummarySection";
import ServiceSection from "@/components/ServiceSection";
import VisionSection from "@/components/VisionSection";
import ProblemSection from "@/components/ProblemSection";
import TeamSection from "@/components/TeamSection";
import FundingSection from "@/components/FundingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SummarySection />
        <ServiceSection />
        <div id="vision">
          <VisionSection />
        </div>
        <ProblemSection />
        <TeamSection />
        <FundingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
