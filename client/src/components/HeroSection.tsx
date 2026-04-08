/**
 * HeroSection — Medixus Corporate Website
 * Design: Clinical Precision × Digital Frontier
 * Full-bleed dark hero with AI clinic imagery, asymmetric layout
 * White text on dark navy/image overlay
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663524632559/VQEhUo7WM2jaFy8cwq8fmk/medixus-hero-hMpfpbf8ivTxpbUAmsaJPw.webp";

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const clinics = useCountUp(100000, 2200, visible);
  const patients = useCountUp(43, 1800, visible);
  const reduction = useCountUp(100, 2000, visible);

  const handleScroll = () => {
    const el = document.querySelector("#service");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Medixus スマートクリニック"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/75 to-slate-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative container py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/20 border border-cyan-400/40 mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-xs font-tech font-medium tracking-wider uppercase">
              日本初のAI×スマートクリニック
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            すべての人に、
            <br />
            <span className="text-gradient-blue">最高の医療を</span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg md:text-xl text-blue-100/90 mb-4 font-medium transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            医師1人あたりの供給能力を
            <span className="text-cyan-300 font-bold"> 10倍から100倍へ</span>
          </p>
          <p
            className={`text-base md:text-lg text-white/70 mb-10 max-w-xl leading-relaxed transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Medixus OSは、クリニックの非診療業務をAIで再設計し、
            待ち時間・電話対応・受付負担を根本から解決する
            クリニック運営プラットフォームです。
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-xl hover:shadow-blue-500/30 transition-all font-medium px-8 py-6 text-base"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              資料請求・お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-6 text-base"
              onClick={() => {
                const el = document.querySelector("#service");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              事業内容を見る
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-6 max-w-lg transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="text-center">
              <div className="font-tech text-3xl md:text-4xl font-bold text-white">
                {clinics.toLocaleString()}
                <span className="text-cyan-400 text-lg">+</span>
              </div>
              <div className="text-white/60 text-xs mt-1">全国クリニック数</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="font-tech text-3xl md:text-4xl font-bold text-white">
                {patients}
                <span className="text-cyan-400 text-lg">M人</span>
              </div>
              <div className="text-white/60 text-xs mt-1">高血圧患者数</div>
            </div>
            <div className="text-center">
              <div className="font-tech text-3xl md:text-4xl font-bold text-white">
                {reduction}
                <span className="text-cyan-400 text-lg">x</span>
              </div>
              <div className="text-white/60 text-xs mt-1">供給能力向上目標</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="スクロール"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
