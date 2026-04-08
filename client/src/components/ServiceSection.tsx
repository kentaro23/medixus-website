/**
 * ServiceSection — Medixus Corporate Website
 * Design: Clinical Precision × Digital Frontier
 * Executive summary + Medixus OS features
 * Light background with blue accent cards
 */

import { useEffect, useRef, useState } from "react";
import { Clock, Phone, Users, Zap, RefreshCw, Link2 } from "lucide-react";

const SOLUTION_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663524632559/VQEhUo7WM2jaFy8cwq8fmk/medixus-solution-QCsFzcUixzR25L9Xsqdf4R.webp";

const features = [
  {
    icon: Clock,
    title: "待ち時間ゼロへ",
    description: "AIによる自動問診・予約最適化で、患者の待ち時間を大幅に削減。オンライン診察で待ち時間0を実現します。",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "電話対応を自動化",
    description: "1日100件超の電話対応をAIが代替。受付スタッフの業務負担を根本から解消し、医療の質に集中できる環境を構築します。",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "患者管理の一元化",
    description: "治療継続率の向上に寄与する患者フォローアップ機能。高血圧・花粉症など慢性疾患の治療中断を防ぎます。",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: Zap,
    title: "即日稼働",
    description: "既存のSaaSにはRPA連携で接続するため、システム入替なしで即日稼働が可能。導入コストを最小化します。",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: RefreshCw,
    title: "運営コスト削減",
    description: "複数SaaS契約による月額30〜40万円のコストを一元管理。医療事務の人手不足問題も同時に解決します。",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Link2,
    title: "既存システムと連携",
    description: "RPA連携により、現在使用中の電子カルテ・予約システム・会計システムとシームレスに統合します。",
    color: "from-indigo-500 to-blue-500",
  },
];

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

export default function ServiceSection() {
  const { ref, inView } = useInView();

  return (
    <section id="service" className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div ref={ref} className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-blue-600 to-cyan-400" />
            <span className="text-blue-600 font-tech text-sm font-semibold tracking-widest uppercase">
              Our Service
            </span>
          </div>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Medixus OS —
            <br />
            <span className="text-gradient-blue">クリニック運営を再設計する</span>
          </h2>
          <p
            className={`text-slate-600 text-lg leading-relaxed transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Medixus OSは、クリニックの非診療業務をAIで再設計し、
            待ち時間・電話対応・受付負担を減らす運営プラットフォームです。
            患者管理も並行して行い、治療継続率の上昇に寄与します。
          </p>
        </div>

        {/* Two-column layout: image + features */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Image */}
          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src={SOLUTION_IMAGE}
              alt="Medixus OS ダッシュボード"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <Zap className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Medixus OS</div>
                    <div className="text-white/70 text-xs">既存システムと即日連携</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {features.slice(0, 3).map((feature, i) => (
              <div
                key={feature.title}
                className={`flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 card-hover`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <feature.icon className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom features grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.slice(3).map((feature, i) => (
            <div
              key={feature.title}
              className={`p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-500 card-hover ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 3) * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-md`}>
                <feature.icon className="text-white" size={22} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
