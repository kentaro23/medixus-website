/**
 * FundingSection — Medixus Corporate Website
 * Design: Clinical Precision × Digital Frontier
 * Dark navy background, investment opportunity highlight
 */

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Target, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663524632559/VQEhUo7WM2jaFy8cwq8fmk/medixus-hero-hMpfpbf8ivTxpbUAmsaJPw.webp";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function FundingSection() {
  const { ref, inView } = useInView();

  return (
    <section id="funding" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
      </div>

      <div className="relative container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-400 to-blue-500" />
              <span className="text-cyan-400 font-tech text-sm font-semibold tracking-widest uppercase">
                Investment
              </span>
            </div>
            <h2
              className={`font-display text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Pre-Seed
              <br />
              <span className="text-gradient-blue">資金調達中</span>
            </h2>
            <p
              className={`text-blue-200/80 text-lg leading-relaxed mb-8 transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              日本の医療課題を解決するMedixusの事業拡大に向けて、
              Pre-Seedラウンドで1,000万円の資金調達を行っています。
              1号店開設とPoC実証を通じて、スケーラブルなビジネスモデルを確立します。
            </p>

            {/* Funding details */}
            <div
              className={`grid grid-cols-2 gap-4 mb-8 transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-tech text-3xl font-bold text-white mb-1">1,000<span className="text-cyan-400 text-xl">万円</span></div>
                <div className="text-white/60 text-sm">調達目標額</div>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="font-tech text-3xl font-bold text-white mb-1">Pre<span className="text-cyan-400 text-xl">-Seed</span></div>
                <div className="text-white/60 text-sm">調達ステージ</div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-xl hover:shadow-blue-500/30 transition-all font-medium px-8 py-6 text-base"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              投資家の方はこちら
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right: Use of funds */}
          <div
            className={`space-y-5 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              資金の使途
            </h3>
            {[
              {
                icon: Rocket,
                title: "1号店開設",
                description: "AIスマートクリニックの第1号店を開設し、実際の医療現場での運用を開始します。",
                percentage: "50%",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Target,
                title: "PoC実証",
                description: "Medixus OSの有効性を実証するためのPoC（概念実証）を実施します。",
                percentage: "30%",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: TrendingUp,
                title: "プロダクト開発",
                description: "AIシステムの開発・改善と、RPA連携機能の強化を進めます。",
                percentage: "20%",
                color: "from-indigo-500 to-blue-500",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <item.icon className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <span className="font-tech font-bold text-cyan-400">{item.percentage}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  {/* Progress bar */}
                  <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: inView ? item.percentage : "0%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
