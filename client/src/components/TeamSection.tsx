/**
 * TeamSection — Medixus Corporate Website
 * Design: Clinical Precision × Digital Frontier
 * Team members with professional card layout
 */

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, Star } from "lucide-react";

const TEAM_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663524632559/VQEhUo7WM2jaFy8cwq8fmk/medixus-team-3shfGZ3qkaMntPd7Rzt25m.webp";

const teamMembers = [
  {
    name: "大原",
    role: "代表取締役 / CEO",
    university: "北里大学医学部・分子遺伝学在籍",
    responsibilities: "事業企画、資金調達、対外交渉を統括",
    icon: GraduationCap,
    gradient: "from-blue-600 to-blue-800",
    initials: "O",
  },
  {
    name: "CTO候補",
    role: "CTO（交渉中）",
    university: "東京大学理学部情報科学科出身",
    responsibilities: "プロダクト開発のリード、技術戦略の策定。現在参画に向けて交渉中",
    icon: Briefcase,
    gradient: "from-cyan-500 to-blue-600",
    initials: "C",
  },
];

const advisors = [
  {
    role: "医学部教授",
    description: "医療現場の知見と研究機関との連携をサポート",
    icon: GraduationCap,
  },
  {
    role: "オンライン薬局創設者",
    description: "医療DXと薬局業界の実践的知識を提供",
    icon: Star,
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

export default function TeamSection() {
  const { ref, inView } = useInView();

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div ref={ref} className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-blue-600 to-cyan-400" />
            <span className="text-blue-600 font-tech text-sm font-semibold tracking-widest uppercase">
              Our Team
            </span>
          </div>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            医療×テクノロジーの
            <br />
            <span className="text-gradient-blue">専門チーム</span>
          </h2>
          <p
            className={`text-slate-600 text-lg transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            医学と情報科学の最前線で活躍するメンバーが、
            日本の医療課題に真正面から取り組みます。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Team image */}
          <div
            className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <img
              src={TEAM_IMAGE}
              alt="Medixusチーム"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>

          {/* Team members */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="font-display text-xl font-bold text-slate-700 mb-4">経営陣</h3>
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 card-hover"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <span className="text-white font-bold text-xl font-tech">{member.initials}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <span className="font-bold text-slate-900 text-lg">{member.name}</span>
                      <span className="ml-2 text-sm text-blue-600 font-medium">{member.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-2">
                    <GraduationCap size={14} className="text-blue-400" />
                    <span>{member.university}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.responsibilities}</p>
                </div>
              </div>
            ))}

            {/* Advisors */}
            <div className="mt-8">
              <h3 className="font-display text-xl font-bold text-slate-700 mb-4">
                アドバイザー予定
                <span className="ml-2 text-sm font-normal text-slate-400">（交渉中）</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {advisors.map((advisor) => (
                  <div
                    key={advisor.role}
                    className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:border-blue-200 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-3 shadow-sm">
                      <advisor.icon className="text-white" size={16} />
                    </div>
                    <div className="font-semibold text-slate-800 text-sm mb-1">{advisor.role}</div>
                    <p className="text-slate-500 text-xs leading-relaxed">{advisor.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
