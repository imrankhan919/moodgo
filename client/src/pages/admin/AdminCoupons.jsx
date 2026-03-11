import { coupons } from '../../data/mockData'

function AdminCoupons() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Coupons</h1>
          <p className="text-[#6B7280] text-sm mt-1">Manage discount coupons</p>
        </div>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-medium rounded-xl hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] transition-all duration-300 hover:scale-105">
          ➕ Create Coupon
        </button>
      </div>

      {/* Inline Create Form (preview) */}
      <div className="bg-[#111118] rounded-2xl border border-[#4F8EF7]/30 p-5 mb-6 animate-[slideUp_0.3s_ease_forwards]">
        <h3 className="text-white text-sm font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>New Coupon</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-[#6B7280] text-[10px] uppercase tracking-wider mb-1">Code</label>
            <input type="text" placeholder="SAVE25" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-lg px-3 py-2.5 text-white text-sm font-mono outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" readOnly />
          </div>
          <div>
            <label className="block text-[#6B7280] text-[10px] uppercase tracking-wider mb-1">Discount %</label>
            <input type="number" placeholder="25" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-lg px-3 py-2.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" readOnly />
          </div>
          <div>
            <label className="block text-[#6B7280] text-[10px] uppercase tracking-wider mb-1">Max Uses</label>
            <input type="number" placeholder="100" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-lg px-3 py-2.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" readOnly />
          </div>
          <div>
            <label className="block text-[#6B7280] text-[10px] uppercase tracking-wider mb-1">Expires</label>
            <input type="date" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-lg px-3 py-2.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" readOnly />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="px-4 py-2 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-medium rounded-lg hover:scale-105 transition-all duration-300">Save Coupon</button>
          <button className="px-4 py-2 border border-[#1F1F2E] text-[#6B7280] text-sm rounded-lg hover:text-white transition-all duration-300">Cancel</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1F1F2E]">
                {['Code', 'Discount', 'Usage', 'Expires', 'Status', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[#6B7280] text-xs uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {coupons.map(coupon => (
                <tr key={coupon.id} className="border-b border-[#1F1F2E] last:border-0 hover:bg-[#1F1F2E]/30 transition-all duration-300">
                  <td className="px-6 py-4">
                    <span className="text-white text-sm font-mono font-bold bg-[#0A0A0F] px-3 py-1 rounded-lg border border-[#1F1F2E]">{coupon.code}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[#4F8EF7] text-sm font-bold">{coupon.discount}%</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-[#1F1F2E] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-full" style={{ width: `${(coupon.usedCount / coupon.maxUses) * 100}%` }} />
                      </div>
                      <span className="text-[#6B7280] text-xs">{coupon.usedCount}/{coupon.maxUses}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">{coupon.expiresAt}</td>
                  <td className="px-6 py-4">
                    {/* Toggle Switch */}
                    <div className={`relative w-11 h-6 rounded-full cursor-pointer transition-all duration-300 ${coupon.isActive ? 'bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6]' : 'bg-[#1F1F2E]'}`}>
                      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-300 ${coupon.isActive ? 'left-[22px]' : 'left-0.5'}`} />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {/* Actions Dropdown */}
                    <details className="relative">
                      <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-[#1F1F2E] text-[#6B7280] hover:text-white transition-all duration-300" title="Actions">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                      </summary>
                      <div className="absolute right-0 top-full mt-1 w-56 bg-[#111118] border border-[#1F1F2E] rounded-xl shadow-2xl z-40 animate-[slideUp_0.2s_ease_forwards] overflow-hidden">
                        {/* Dropdown Header */}
                        <div className="px-4 py-2.5 border-b border-[#1F1F2E]">
                          <p className="text-white text-xs font-medium font-mono">{coupon.code}</p>
                          <p className="text-[#6B7280] text-[10px]">{coupon.discount}% off · {coupon.usedCount} used</p>
                        </div>
                        {/* Edit Fields Inline */}
                        <div className="p-3 space-y-3 border-b border-[#1F1F2E]">
                          <div>
                            <label className="block text-[#6B7280] text-[9px] uppercase tracking-wider mb-1">Discount %</label>
                            <input type="number" defaultValue={coupon.discount} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-[#4F8EF7] transition-all duration-300" />
                          </div>
                          <div>
                            <label className="block text-[#6B7280] text-[9px] uppercase tracking-wider mb-1">Max Uses</label>
                            <input type="number" defaultValue={coupon.maxUses} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-[#4F8EF7] transition-all duration-300" />
                          </div>
                          <div>
                            <label className="block text-[#6B7280] text-[9px] uppercase tracking-wider mb-1">Expires</label>
                            <input type="date" defaultValue={coupon.expiresAt} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-lg px-3 py-2 text-white text-xs outline-none focus:border-[#4F8EF7] transition-all duration-300" />
                          </div>
                          <button className="w-full py-2 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-xs font-medium rounded-lg hover:scale-105 transition-all duration-300">
                            Update Coupon
                          </button>
                        </div>
                        {/* Actions */}
                        <div className="p-1.5">
                          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#6B7280] hover:text-white hover:bg-[#1F1F2E] transition-all duration-300">
                            <span>📋</span>
                            <span>Copy Code</span>
                          </button>
                          <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                            coupon.isActive
                              ? 'text-yellow-400/70 hover:text-yellow-400 hover:bg-yellow-500/5'
                              : 'text-emerald-400/70 hover:text-emerald-400 hover:bg-emerald-500/5'
                          }`}>
                            <span>{coupon.isActive ? '⏸️' : '▶️'}</span>
                            <span>{coupon.isActive ? 'Deactivate' : 'Activate'}</span>
                          </button>
                          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/5 transition-all duration-300">
                            <span>🗑️</span>
                            <span>Delete Coupon</span>
                          </button>
                        </div>
                      </div>
                    </details>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminCoupons
