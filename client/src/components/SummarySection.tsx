/**
 * SummarySection — Medixus Corporate Website
 * Design: Clinical Precision × Digital Frontier
 * Executive summary with key metrics
 * Clean white with blue accent strip
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

const highlights = [
  {
    number: "10万",
    unit: "院",
    label: "全国クリニック数",
    sub: "うちDX導入はわずか3,000件",
    color: "from-blue-600 to-blue-700",
  },
  {
    number: "4,300",
    unit: "万人",
    label: "高血圧患者数",
    sub: "40%が1年以内に治療中断",
    color: "from-cyan-500 to-blue-600",
  },
  {
    number: "30〜40",
    unit: "万円/月",
    label: "クリニックのSaaSコスト",
    sub: "複数社との個別契約が常態化",
    color: "from-blue-500 to-indigo-600",
  },
  {
    number: "即日",
    unit: "",
    label: "稼働開始",
    sub: "RPA連携でシステム入替不要",
    color: "from-cyan-400 to-blue-500",
  },
];

export default function SummarySection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-16 bg-gradient-to-r from-blue-950 to-slate-900">
      <div className="container">
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`} />
              <div className="absolute inset-0 border border-white/10 rounded-2xl" />

              <div className="relative">
                <div className="font-tech text-4xl font-bold text-white mb-0.5">
                  {item.number}
                  <span className="text-cyan-300 text-xl ml-0.5">{item.unit}</span>
                </div>
                <div className="font-semibold text-white/90 text-sm mb-2">{item.label}</div>
                <div className="text-white/50 text-xs">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
