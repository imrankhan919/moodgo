import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents, getAllOrders, getAllUsers } from '../../features/admin/adminSlice'
import LoadingScreen from '../../components/LoadingScreen'

function AdminDashboard() {

  const { users, events, orders, adminLoading, adminSuccess, adminError, adminErrorMessage } = useSelector(state => state.admin)

  const dispatch = useDispatch()

  const totalRevenue = orders.reduce((sum, o) => sum + o.billedAmount, 0)
  const recentOrders = orders.slice(0, 5)

  const stats = [
    { label: 'Total Users', value: users?.length, icon: '👥', color: 'from-blue-500 to-cyan-500' },
    { label: 'Total Events', value: events?.length, icon: '🎪', color: 'from-violet-500 to-purple-500' },
    { label: 'Total Orders', value: orders?.length, icon: '📦', color: 'from-emerald-500 to-green-500' },
    { label: 'Revenue', value: `₹${totalRevenue.toLocaleString()}`, icon: '💰', color: 'from-amber-500 to-orange-500' }
  ]


  useEffect(() => {

    if (!adminError) {
      // Fetch Users
      dispatch(getAllUsers())
      // Fetch Events
      dispatch(getAllEvents())
      // Fetch Orders
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
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Dashboard</h1>
        <p className="text-[#6B7280] text-sm mt-1">Welcome back, Alex. Here's what's happening.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#111118] rounded-2xl border border-[#1F1F2E] p-5 hover:border-[#4F8EF7]/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <span className="text-lg">{stat.icon}</span>
              </div>
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{stat.value}</p>
            <p className="text-[#6B7280] text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-[#1F1F2E] flex items-center justify-between">
          <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Recent Orders</h2>
          <Link to="/admin/orders" className="text-[#4F8EF7] text-sm hover:underline">View all</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1F1F2E]">
                {['Order ID', 'User', 'Event', 'Amount', 'Status'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[#6B7280] text-xs uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order._id} className="border-b border-[#1F1F2E] last:border-0 hover:bg-[#1F1F2E]/30 transition-all duration-300">
                  <td className="px-6 py-4 text-white text-sm font-mono">{order._id}</td>
                  <td className="px-6 py-4 text-white text-sm">{order.user.name}</td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm truncate max-w-[200px]">{order.event.title}</td>
                  <td className="px-6 py-4 text-white text-sm font-medium">₹{order.billedAmount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-wider ${order.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      order.status === 'cancelled' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                        'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                      }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/admin/events" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-medium rounded-xl hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] transition-all duration-300 hover:scale-105">
          ➕ Create Event
        </Link>
        <Link to="/admin/coupons" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#1F1F2E] text-white font-medium rounded-xl hover:border-[#4F8EF7]/50 transition-all duration-300">
          🎟️ Add Coupon
        </Link>
      </div>
    </div>
  )
}

export default AdminDashboard
