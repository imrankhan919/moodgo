import { Link } from "react-router-dom"

function TicketCard({ order }) {
  const statusColors = {
    confirmed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    cancelled: 'bg-red-500/10 text-red-400 border-red-500/20',
    pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
  }

  return (
    <div className="group bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#4F8EF7]/30">
      <div className="flex flex-col sm:flex-row">
        {/* Left Gradient Border */}
        <div className="w-full sm:w-2 h-2 sm:h-auto bg-gradient-to-b from-[#4F8EF7] to-[#8B5CF6] flex-shrink-0" />

        {/* Main Content */}
        <div className="flex-1 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Link to={`/events/order.event._id`}>
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {order.event.title}
                  </h3>
                </Link>
                <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full border uppercase tracking-wider ${statusColors[order.status]}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {order.status}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-[#6B7280] text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {new Date(order.createdAt).toLocaleDateString('en-IN')}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                  {order.seats} {order.tickets === 1 ? 'ticket' : 'tickets'}
                </span>
                {/* <img className="h-18" src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${order._id}`} alt="" /> */}

              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
              <span className="text-[#4F8EF7] font-bold text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>
                ₹{order.billedAmount}
              </span>
              <div className="px-3 py-1.5 bg-[#0A0A0F] rounded-lg border border-[#1F1F2E]">
                <span className="text-[#6B7280] text-[10px] uppercase tracking-wider block" style={{ fontFamily: 'DM Sans, sans-serif' }}>Ticket Code</span>
                <span className="text-white text-sm font-mono font-bold">{order._id}</span>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
