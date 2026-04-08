/**
 * VisionSection — Medixus Corporate Website
 * Design: Clinical Precision × Digital Frontier
 * Clean white section with bold typography for Vision/Mission
 */

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

export default function VisionSection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vision */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-8 bg-gradient-to-r from-blue-600 to-cyan-400" />
              <span className="text-blue-600 font-tech text-sm font-semibold tracking-widest uppercase">Vision</span>
            </div>
            <div className="relative pl-6"
              style={{ borderLeft: "4px solid #2563EB" }}
            >
              <div className="text-6xl text-blue-200/60 font-serif leading-none mb-2 select-none">"</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                すべての人に、
                <br />
                <span className="text-gradient-blue">最高の医療を</span>
              </h2>
              <div className="text-6xl text-blue-200/60 font-serif leading-none text-right select-none">"</div>
            </div>
            <p className="text-slate-600 mt-6 leading-relaxed">
              医療へのアクセスは、すべての人の権利です。
              Medixusは、地理的・時間的・経済的な障壁をなくし、
              誰もが最高品質の医療を受けられる社会を目指します。
            </p>
          </div>

          {/* Mission */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-blue-600" />
              <span className="text-cyan-600 font-tech text-sm font-semibold tracking-widest uppercase">Mission</span>
            </div>
            <div className="relative pl-6"
              style={{ borderLeft: "4px solid #06B6D4" }}
            >
              <div className="text-6xl text-cyan-200/60 font-serif leading-none mb-2 select-none">"</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                医療の待ち時間と
                <br />
                アクセス格差を
                <br />
                <span className="text-gradient-blue">AIでなくす</span>
              </h2>
              <div className="text-6xl text-cyan-200/60 font-serif leading-none text-right select-none">"</div>
            </div>
            <p className="text-slate-600 mt-6 leading-relaxed">
              日本全国10万のクリニックをAIで繋ぎ、
              医師1人あたりの診療供給能力を10倍から100倍へ。
              医療の待ち時間とアクセス格差を根本から解決します。
            </p>
          </div>
        </div>

        {/* Divider stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "10〜100x", label: "医師1人あたりの供給能力向上" },
            { value: "即日", label: "既存システムからの移行期間" },
            { value: "0", label: "目指す待ち時間（分）" },
            { value: "100%", label: "治療継続率の向上目標" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="font-tech text-3xl font-bold text-gradient-blue mb-2">{stat.value}</div>
              <div className="text-slate-500 text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
