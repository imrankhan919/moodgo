import { useParams, Link } from 'react-router-dom'
import { events, comments } from '../data/mockData'

function EventDetail() {
  const { id } = useParams()
  const event = events.find(e => e.id === Number(id)) || events[0]
  const eventComments = comments.filter(c => c.eventId === event.id)

  return (
    <div className="min-h-screen bg-[#0A0A0F]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent" />
        <Link to="/events" className="absolute top-24 left-4 sm:left-8 flex items-center gap-2 px-4 py-2 bg-[#111118]/80 backdrop-blur-sm border border-[#1F1F2E] rounded-full text-white text-sm hover:bg-[#111118] transition-all duration-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Details */}
          <div className="flex-1">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#4F8EF7] bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full mb-4">{event.category}</span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>{event.title}</h1>
              <p className="text-[#6B7280] text-sm">Organized by <span className="text-[#4F8EF7]">{event.organizer}</span></p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: 'Date', value: event.date },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: 'Time', value: event.time },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: 'Venue', value: `${event.location}, ${event.city}` }
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#111118] rounded-xl border border-[#1F1F2E] p-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4F8EF7]/10 flex items-center justify-center text-[#4F8EF7]">{info.icon}</div>
                  <div>
                    <p className="text-[#6B7280] text-xs uppercase tracking-wider">{info.label}</p>
                    <p className="text-white text-sm font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>About This Event</h2>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">{event.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {event.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs text-[#6B7280] bg-[#111118] border border-[#1F1F2E] rounded-full">#{tag}</span>
              ))}
            </div>

            {/* Comments */}
            <div>
              <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Reviews ({eventComments.length})
              </h2>
              <div className="space-y-4">
                {eventComments.length > 0 ? eventComments.map(comment => (
                  <div key={comment.id} className="bg-[#111118] rounded-xl border border-[#1F1F2E] p-5">
                    <div className="flex items-start gap-3">
                      <img src={comment.avatar} alt={comment.userName} className="w-10 h-10 rounded-full border-2 border-[#1F1F2E]" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-white text-sm font-medium">{comment.userName}</p>
                          <p className="text-[#6B7280] text-xs">{comment.createdAt}</p>
                        </div>
                        <div className="flex items-center gap-0.5 mb-2">
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={`text-xs ${i < comment.rating ? 'text-yellow-400' : 'text-[#1F1F2E]'}`}>★</span>
                          ))}
                        </div>
                        <p className="text-[#9CA3AF] text-sm leading-relaxed">{comment.text}</p>
                      </div>
                    </div>
                  </div>
                )) : (
                  <p className="text-[#6B7280] text-sm">No reviews yet. Be the first!</p>
                )}
              </div>
            </div>
          </div>

          {/* Right - Sticky Booking Sidebar */}
          <div className="lg:w-96">
            <div className="sticky top-24 bg-[#111118] rounded-2xl border border-[#1F1F2E] p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[#6B7280] text-xs uppercase tracking-wider">Price per ticket</p>
                  <p className="text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>${event.price}</p>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-[#4F8EF7]/10 rounded-full">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-white text-sm font-medium">{event.rating}</span>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#6B7280]">Available</span>
                  <span className="text-white font-medium">{event.availableTickets} / {event.totalTickets}</span>
                </div>
                <div className="w-full h-2 bg-[#1F1F2E] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-full" style={{ width: `${(event.availableTickets / event.totalTickets) * 100}%` }} />
                </div>
              </div>

              {/* Ticket Count Selector */}
              <div className="flex items-center justify-between bg-[#0A0A0F] rounded-xl p-4 mb-4 border border-[#1F1F2E]">
                <span className="text-white text-sm">Tickets</span>
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 rounded-lg bg-[#1F1F2E] text-white flex items-center justify-center hover:bg-[#4F8EF7]/20 transition-all duration-300">−</button>
                  <span className="text-white font-bold w-8 text-center">2</span>
                  <button className="w-8 h-8 rounded-lg bg-[#1F1F2E] text-white flex items-center justify-center hover:bg-[#4F8EF7]/20 transition-all duration-300">+</button>
                </div>
              </div>

              {/* Coupon */}
              <div className="flex items-center gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-2.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7]/50 transition-all duration-300"
                  readOnly
                />
                <button className="px-4 py-2.5 text-sm text-[#4F8EF7] border border-[#4F8EF7]/30 rounded-xl hover:bg-[#4F8EF7]/10 transition-all duration-300">
                  Apply
                </button>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between py-4 border-t border-[#1F1F2E] mb-6">
                <span className="text-[#6B7280] text-sm">Total (2 tickets)</span>
                <span className="text-white text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>${event.price * 2}</span>
              </div>

              <Link
                to={`/book/${event.id}`}
                className="block w-full py-4 text-center text-white font-semibold bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-xl hover:shadow-[0_0_30px_rgba(79,142,247,0.4)] transition-all duration-300 hover:scale-105"
              >
                Book Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
