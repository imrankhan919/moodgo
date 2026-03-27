import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrders } from "../../features/admin/adminSlice"
import { toast } from "react-toastify"
import LoadingScreen from "../../components/LoadingScreen"

function AdminOrders() {

  const { orders, adminLoading, adminSuccess, adminError, adminErrorMessage } = useSelector(state => state.admin)

  const dispatch = useDispatch()



  useEffect(() => {

    if (!adminError) {
      // Fetch Users
      dispatch(getAllOrders())
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
          <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Orders</h1>
          <p className="text-[#6B7280] text-sm mt-1">View and manage all orders</p>
        </div>
        <span className="text-[#6B7280] text-sm">{orders.length} orders total</span>
      </div>

      {/* Table */}
      <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1F1F2E]">
                {['Order ID', 'User', 'Event', 'Tickets', 'Amount', 'Status', 'Date', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[#6B7280] text-xs uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id} className="border-b border-[#1F1F2E] last:border-0 hover:bg-[#1F1F2E]/30 transition-all duration-300">
                  <td className="px-6 py-4 text-white text-sm font-mono">{order._id}</td>
                  <td className="px-6 py-4 text-white text-sm">{order.user.name}</td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm truncate max-w-[180px]">{order.event.title}</td>
                  <td className="px-6 py-4 text-white text-sm text-center">{order.totalSeats}</td>
                  <td className="px-6 py-4 text-white text-sm font-medium">${order.billedAmount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-wider ${order.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      order.status === 'cancelled' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                        'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                      }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">{new Date(order.createdAt).toLocaleDateString('en-IN')}</td>
                  <td className="px-6 py-4">
                    {/* Actions Dropdown */}
                    <details className="relative">
                      <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-[#1F1F2E] text-[#6B7280] hover:text-white transition-all duration-300" title="Actions">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                      </summary>
                      <div className="absolute right-0 top-full mt-1 w-52 bg-[#111118] border border-[#1F1F2E] rounded-xl shadow-2xl z-40 animate-[slideUp_0.2s_ease_forwards] overflow-hidden">
                        {/* Dropdown Header */}
                        <div className="px-4 py-2.5 border-b border-[#1F1F2E]">
                          <p className="text-white text-xs font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>Update Status</p>
                        </div>
                        {/* Status Options */}
                        <div className="p-1.5">
                          {[
                            { value: 'confirmed', label: 'Confirmed', icon: '✅', color: 'text-emerald-400' },
                            { value: 'pending', label: 'Pending', icon: '⏳', color: 'text-yellow-400' },
                            { value: 'cancelled', label: 'Cancelled', icon: '❌', color: 'text-red-400' }
                          ].map(status => (
                            <button
                              key={status.value}
                              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ${order.status === status.value
                                ? 'bg-[#4F8EF7]/10 text-white'
                                : 'text-[#6B7280] hover:text-white hover:bg-[#1F1F2E]'
                                }`}
                            >
                              <span className="text-sm">{status.icon}</span>
                              <span className={order.status === status.value ? status.color : ''}>{status.label}</span>
                              {order.status === status.value && (
                                <svg className="w-4 h-4 ml-auto text-[#4F8EF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                              )}
                            </button>
                          ))}
                        </div>
                        {/* Separator */}
                        <div className="border-t border-[#1F1F2E] p-1.5">
                          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#6B7280] hover:text-white hover:bg-[#1F1F2E] transition-all duration-300">
                            <span>👁️</span>
                            <span>View Details</span>
                          </button>
                          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#6B7280] hover:text-white hover:bg-[#1F1F2E] transition-all duration-300">
                            <span>📧</span>
                            <span>Send Notification</span>
                          </button>
                          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/5 transition-all duration-300">
                            <span>🗑️</span>
                            <span>Delete Order</span>
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

export default AdminOrders
