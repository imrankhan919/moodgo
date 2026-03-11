import { Link } from 'react-router-dom'
import TicketCard from '../components/TicketCard'
import { orders } from '../data/mockData'

function MyTickets() {
  const tabs = ['All', 'Upcoming', 'Cancelled']
  const activeTab = 'All'

  const filteredOrders = activeTab === 'All'
    ? orders
    : activeTab === 'Upcoming'
      ? orders.filter(o => o.status === 'confirmed' || o.status === 'pending')
      : orders.filter(o => o.status === 'cancelled')

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-24 pb-20" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              My Tickets
            </h1>
            <p className="text-[#6B7280] text-sm mt-1">Manage your event bookings</p>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full text-[#4F8EF7] text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
            {orders.length} tickets
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                tab === activeTab
                  ? 'bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white'
                  : 'bg-[#111118] text-[#6B7280] border border-[#1F1F2E] hover:text-white hover:border-[#4F8EF7]/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {filteredOrders.map(order => (
            <TicketCard key={order.id} order={order} />
          ))}
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#111118] border border-[#1F1F2E] flex items-center justify-center">
              <span className="text-3xl">🎫</span>
            </div>
            <p className="text-white text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>No tickets found</p>
            <p className="text-[#6B7280] text-sm mb-6">You haven't booked any events yet.</p>
            <Link to="/events" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-medium rounded-full hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] transition-all duration-300 hover:scale-105">
              Explore Events
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyTickets
