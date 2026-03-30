import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCoupons } from "../../features/admin/adminSlice"
import { toast } from "react-toastify"
import LoadingScreen from "../../components/LoadingScreen"


function AdminCoupons() {

  const { coupons, adminLoading, adminSuccess, adminError, adminErrorMessage } = useSelector(state => state.admin)

  const dispatch = useDispatch()



  useEffect(() => {

    if (!adminError) {
      // Fetch Ratings
      dispatch(getAllCoupons())
    }


    if (adminError, adminErrorMessage) {
      toast.error(adminErrorMessage, { position: "top-center", theme: "dark" })
    }


  }, [adminError, adminErrorMessage])


  if (adminLoading) {
    return <LoadingScreen />
  }





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
                {['Code', 'Discount', 'Status', 'createdAt'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[#6B7280] text-xs uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {coupons.map(coupon => (
                <tr key={coupon._id} className="border-b border-[#1F1F2E] last:border-0 hover:bg-[#1F1F2E]/30 transition-all duration-300">
                  <td className="px-6 py-4">
                    <span className="text-white text-sm font-mono font-bold bg-[#0A0A0F] px-3 py-1 rounded-lg border border-[#1F1F2E]">{coupon.couponCode}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[#4F8EF7] text-sm font-bold">{coupon.couponDiscount}%</span>
                  </td>
                  <td className="px-6 py-4">
                    {/* Toggle Switch */}
                    <div className={`relative w-11 h-6 rounded-full cursor-pointer transition-all duration-300 ${coupon.isActive ? 'bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6]' : 'bg-[#1F1F2E]'}`}>
                      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-300 ${coupon.isActive ? 'left-[22px]' : 'left-0.5'}`} />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[#4F8EF7] text-sm font-bold">{new Date(coupon.createdAt).toLocaleDateString('en-IN')}</span>
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
