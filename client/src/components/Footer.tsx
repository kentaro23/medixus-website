/**
 * Footer — Medixus Corporate Website
 * Design: Clinical Precision × Digital Frontier
 * Dark navy footer with company info
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm font-tech">M</span>
              </div>
              <span className="font-tech font-bold text-xl tracking-tight">Medixus</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              すべての人に、最高の医療を。
              <br />
              日本初のAI×スマートクリニックとして、
              医療のアクセス格差をなくします。
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-xs font-tech">Pre-Seed 資金調達中</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase font-tech">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "事業内容", href: "#service" },
                { label: "課題と解決策", href: "#problem" },
                { label: "Vision / Mission", href: "#vision" },
                { label: "チーム", href: "#team" },
                { label: "資金調達", href: "#funding" },
                { label: "お問い合わせ", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-cyan-300 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase font-tech">
              Company
            </h4>
            <dl className="space-y-3">
              <div>
                <dt className="text-white/40 text-xs mb-0.5">会社名</dt>
                <dd className="text-white/80 text-sm">株式会社 Medixus</dd>
              </div>
              <div>
                <dt className="text-white/40 text-xs mb-0.5">事業内容</dt>
                <dd className="text-white/80 text-sm">AI×スマートクリニック運営OS開発・提供</dd>
              </div>
              <div>
                <dt className="text-white/40 text-xs mb-0.5">代表取締役</dt>
                <dd className="text-white/80 text-sm">大原</dd>
              </div>
              <div>
                <dt className="text-white/40 text-xs mb-0.5">調達ステージ</dt>
                <dd className="text-white/80 text-sm">Pre-Seed（1,000万円）</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} 株式会社 Medixus. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/30 text-xs">プライバシーポリシー</span>
            <span className="text-white/30 text-xs">利用規約</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
