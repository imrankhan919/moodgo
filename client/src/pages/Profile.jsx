import { useSelector } from 'react-redux'
import { orders } from '../data/mockData'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Profile() {

  const { user } = useSelector(state => state.auth)

  const navigate = useNavigate()

  const userOrders = orders.slice(0, 4)
  const tabs = ['My Bookings', 'Saved Events', 'Settings']
  const activeTab = 'My Bookings'

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }

    if (user.isAdmin) {
      navigate("/admin")
    }

  }, [user])


  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-20" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* Cover Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
        {/* Avatar + Name */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mb-8">
          <img src={'https://i.pinimg.com/564x/81/8a/1b/818a1b89a57c2ee0fb7619b95e11aebd.jpg'} alt={user.name} className="w-32 h-32 rounded-2xl border-4 border-[#0A0A0F] shadow-xl object-cover" />
          <div className="text-center sm:text-left sm:pb-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{user.name}</h1>
            <p className="text-[#6B7280] text-sm">{user.email}</p>
            <p className="text-[#6B7280] text-xs mt-1">Member since {new Date(user.createdAt).toLocaleDateString('en-IN')}</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Bookings', value: user.totalBookings },
            { label: 'Events Attended', value: 12 },
            { label: 'Reviews Written', value: 7 }
          ].map((stat, i) => (
            <div key={i} className="bg-[#111118] rounded-xl border border-[#1F1F2E] p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] bg-clip-text text-transparent" style={{ fontFamily: 'Syne, sans-serif' }}>{stat.value}</p>
              <p className="text-[#6B7280] text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[#1F1F2E] pb-4">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${tab === activeTab
                ? 'bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white'
                : 'text-[#6B7280] hover:text-white'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* My Bookings Content */}
        <div className="space-y-4">
          {userOrders.map(order => (
            <div key={order.id} className="bg-[#111118] rounded-xl border border-[#1F1F2E] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#4F8EF7]/30 transition-all duration-300">
              <div>
                <h3 className="text-white font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{order.eventTitle}</h3>
                <p className="text-[#6B7280] text-sm">{order.bookedAt} · {order.tickets} ticket(s)</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-wider ${order.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                  order.status === 'cancelled' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                    'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                  }`}>
                  {order.status}
                </span>
                <span className="text-[#4F8EF7] font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>${order.totalAmount}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Settings Preview (hidden since not active tab, but we show it as UI concept) */}
        {activeTab === 'Settings' && (
          <div className="space-y-5">
            {[
              { label: 'Full Name', placeholder: user.name },
              { label: 'Email', placeholder: user.email },
              { label: 'Password', placeholder: '••••••••', type: 'password' }
            ].map((field, i) => (
              <div key={i}>
                <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">{field.label}</label>
                <input
                  type={field.type || 'text'}
                  placeholder={field.placeholder}
                  className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300"
                  readOnly
                />
              </div>
            ))}
            <button className="px-6 py-3 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-medium rounded-xl hover:scale-105 transition-all duration-300">Save Changes</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
