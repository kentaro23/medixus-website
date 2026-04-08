/**
 * ProblemSection — Medixus Corporate Website
 * Design: Clinical Precision × Digital Frontier
 * Dark navy background with problem/solution contrast
 * Three-column problem layout + patient journey flow
 */

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, TrendingDown, Clock } from "lucide-react";

const PROBLEM_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663524632559/VQEhUo7WM2jaFy8cwq8fmk/medixus-problem-Gcb5oJVTKWLBtZjV9NKqdX.webp";
const ABSTRACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663524632559/VQEhUo7WM2jaFy8cwq8fmk/medixus-abstract-bg-BxLeuTS4CLM82C56ZS3pAZ.webp";

const problems = [
  {
    icon: AlertTriangle,
    category: "クリニック側の非効率",
    color: "border-blue-400/40 bg-blue-400/10",
    iconColor: "text-blue-300",
    stats: [
      { value: "100件超/日", label: "受付の電話対応件数" },
      { value: "30〜40万円/月", label: "複数SaaS契約コスト" },
      { value: "0.26倍", label: "医療事務の有効求人倍率" },
    ],
  },
  {
    icon: TrendingDown,
    category: "患者側の離脱",
    color: "border-cyan-400/40 bg-cyan-400/10",
    iconColor: "text-cyan-300",
    stats: [
      { value: "4,300万人", label: "高血圧患者数" },
      { value: "40%", label: "1年以内に治療中断" },
      { value: "42.5%", label: "花粉症罹患率" },
    ],
  },
  {
    icon: Clock,
    category: "DX化の遅延",
    color: "border-indigo-400/40 bg-indigo-400/10",
    iconColor: "text-indigo-300",
    stats: [
      { value: "10万院", label: "全国クリニック数" },
      { value: "10%", label: "オンライン診療届出率" },
      { value: "3,000件", label: "DX導入済みクリニック" },
    ],
  },
];

const patientJourney = [
  {
    step: "症状出現",
    problems: ["何科にいけばいい？", "病院の評価は？"],
    solution: "症状から病院検索・評価も含めリコメンド",
  },
  {
    step: "病院検索",
    problems: ["病院までが遠い", "時間がない"],
    solution: "患者の動画をAIが分析",
  },
  {
    step: "問診",
    problems: ["1時間まち", "薬もらうだけなのに"],
    solution: "オンライン診察・待ち時間0",
  },
  {
    step: "診察",
    problems: ["検査まで待たないと", "今どういう状況？"],
    solution: "自動検査・現在の状況を確認",
  },
  {
    step: "検査・処方",
    problems: ["薬局遠い", "再診予約がめんどい"],
    solution: "家に薬が届く・遠隔モニタリング",
  },
];

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

export default function ProblemSection() {
  const { ref, inView } = useInView();

  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ABSTRACT_BG} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/95 to-slate-950" />
      </div>

      <div className="relative container">
        {/* Section Header */}
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-tech text-sm font-semibold tracking-widest uppercase">
              The Problem
            </span>
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            現在の医療が抱える
            <span className="text-cyan-300"> 3つの問題</span>
          </h2>
          <p
            className={`text-blue-200/80 text-lg leading-relaxed transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            日本の医療は、クリニック・患者・DX化の三方向で深刻な課題を抱えています。
            Medixusはこれらを同時に解決します。
          </p>
        </div>

        {/* Problem image */}
        <div
          className={`rounded-2xl overflow-hidden mb-12 shadow-2xl transition-all duration-700 delay-200 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src={PROBLEM_IMAGE}
            alt="現在の医療が抱える問題"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {problems.map((problem, i) => (
            <div
              key={problem.category}
              className={`rounded-2xl border ${problem.color} p-6 backdrop-blur-sm transition-all duration-700 card-hover ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 2) * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <problem.icon className={`${problem.iconColor}`} size={22} />
                <h3 className="font-semibold text-white text-lg">{problem.category}</h3>
              </div>
              <div className="space-y-4">
                {problem.stats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline justify-between">
                    <span className="text-white/70 text-sm">{stat.label}</span>
                    <span className="font-tech font-bold text-white text-lg">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Patient Journey */}
        <div
          className={`transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl font-bold text-white mb-3">
              Medixusが描く未来の患者体験
            </h3>
            <p className="text-blue-200/70">
              症状の発現から処方まで、すべてのステップをAIが最適化します
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-3">
            {patientJourney.map((item, i) => (
              <div key={item.step} className="relative">
                {/* Arrow connector */}
                {i < patientJourney.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-1.5 z-10 text-cyan-400/60 text-xl">→</div>
                )}
                <div className="rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="text-center mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="font-display font-bold text-white text-sm">{item.step}</div>
                  </div>
                  <div className="space-y-1 mb-3">
                    {item.problems.map((p) => (
                      <div key={p} className="text-red-300/70 text-xs flex items-start gap-1">
                        <span className="mt-0.5 flex-shrink-0">✗</span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-cyan-300 text-xs leading-relaxed flex items-start gap-1">
                      <span className="flex-shrink-0 text-cyan-400">✓</span>
                      <span>{item.solution}</span>
                    </div>
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
