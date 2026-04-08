/**
 * ContactSection — Medixus Corporate Website
 * Design: Clinical Precision × Digital Frontier
 * Contact form with clean white layout
 */

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Building2, User, MessageSquare, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

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

const contactTypes = [
  { value: "clinic", label: "クリニック導入のご相談" },
  { value: "investor", label: "投資家・出資のご相談" },
  { value: "media", label: "取材・メディアのご依頼" },
  { value: "partner", label: "パートナーシップのご相談" },
  { value: "other", label: "その他のお問い合わせ" },
];

export default function ContactSection() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    toast.success("お問い合わせを受け付けました。担当者より3営業日以内にご連絡いたします。");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-gradient-to-r from-blue-600 to-cyan-400" />
              <span className="text-blue-600 font-tech text-sm font-semibold tracking-widest uppercase">
                Contact
              </span>
            </div>
            <h2
              className={`font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              お問い合わせ・
              <br />
              <span className="text-gradient-blue">資料請求</span>
            </h2>
            <p
              className={`text-slate-600 text-lg leading-relaxed mb-10 transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              クリニック導入のご相談、投資家の方からのお問い合わせ、
              取材・メディアのご依頼など、お気軽にご連絡ください。
              担当者より3営業日以内にご返信いたします。
            </p>

            {/* Contact info cards */}
            <div
              className={`space-y-4 transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                {
                  icon: Building2,
                  title: "クリニック向け",
                  desc: "Medixus OS導入のご相談・デモのご依頼",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: User,
                  title: "投資家向け",
                  desc: "Pre-Seedラウンドへの参加・詳細資料のご請求",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  icon: Mail,
                  title: "メディア・パートナー向け",
                  desc: "取材依頼・業務提携のご相談",
                  color: "from-indigo-500 to-blue-500",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <item.icon className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm mb-0.5">{item.title}</div>
                    <div className="text-slate-500 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`bg-white rounded-2xl shadow-xl border border-slate-100 p-8 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  送信完了
                </h3>
                <p className="text-slate-600">
                  お問い合わせありがとうございます。
                  <br />
                  担当者より3営業日以内にご連絡いたします。
                </p>
                <Button
                  className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  onClick={() => setSubmitted(false)}
                >
                  新しいお問い合わせ
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="山田 太郎"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    所属・組織名
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="〇〇クリニック / 〇〇ベンチャーキャピタル"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@clinic.jp"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 bg-white"
                  >
                    <option value="">選択してください</option>
                    {contactTypes.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-slate-400" size={16} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="お問い合わせ内容をご記入ください"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-md hover:shadow-blue-300/30 transition-all font-medium py-6"
                >
                  送信する
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-slate-400 text-xs text-center">
                  送信いただいた情報は、お問い合わせへの返答のみに使用します。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
