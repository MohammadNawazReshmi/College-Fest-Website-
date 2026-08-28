import { useState } from 'react';
import { Gift, Copy, Check } from 'lucide-react';
import { VOUCHERS_DATA } from '../data/hacknovaData';

export default function VouchersSection() {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="vouchers" className="py-20 w-full relative bg-gradient-to-b from-transparent via-orange-50/20 to-transparent">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" /> Delegate Rewards
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            EXCLUSIVE <span className="gradient-teal">FEST VOUCHERS</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            All registered participants receive instant access to food, cloud credits, and swag coupons for CODECHAKRA 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VOUCHERS_DATA.map((voucher) => {
            const isCopied = copiedId === voucher.id;
            return (
              <div
                key={voucher.id}
                className="teal-glass-card rounded-3xl p-6 bg-white flex flex-col justify-between border-dashed border-2 border-orange-200 relative overflow-hidden"
              >
                {/* Visual Circle Cutouts for Ticket aesthetic */}
                <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-50 border-r border-orange-200"></div>
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-50 border-l border-orange-200"></div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-orange-100 text-orange-800 px-3 py-1 rounded-lg">
                      {voucher.tag}
                    </span>
                    <span className="text-sm font-black text-rose-600">{voucher.discount}</span>
                  </div>

                  <h3 className="font-extrabold text-lg text-slate-900 mb-2 leading-snug">
                    {voucher.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    {voucher.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-200">
                    <code className="font-mono text-xs font-bold text-slate-700">{voucher.code}</code>
                    <button
                      onClick={() => copyToClipboard(voucher.code, voucher.id)}
                      className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                        isCopied
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy Code
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
