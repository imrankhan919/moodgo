import { Link } from 'react-router-dom'

function EventCard({ event }) {
  const categoryColors = {
    Music: 'from-pink-500 to-purple-500',
    Tech: 'from-blue-500 to-cyan-500',
    Art: 'from-orange-500 to-red-500',
    Food: 'from-green-500 to-emerald-500',
    Sports: 'from-yellow-500 to-orange-500'
  }



  return (
    <Link
      to={`/events/${event._id}`}
      className="group block bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#4F8EF7]/30 hover:shadow-[0_8px_30px_rgba(79,142,247,0.1)]"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.eventImage}
          alt={event.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${categoryColors[event.category] || 'from-[#4F8EF7] to-[#8B5CF6]'}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {event.status}
        </span>

        <span className="absolute bg-white top-3 right-3 px-2 py-1 text-[10px] font-bold text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-full uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          ⌛ {event.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-[#4F8EF7] transition-all duration-300" style={{ fontFamily: 'Syne, sans-serif' }}>
          {event.title}
        </h3>
        <div className="flex items-center gap-2 text-[#6B7280] text-xs mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span>{event.eventDate}</span>
          <span className="text-[#1F1F2E]">|</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span>{event.eventLocation}</span>
        </div>
        <div className="flex items-center justify-between">
          {/* <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-white text-sm font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>{event.rating}</span>
            <span className="text-[#6B7280] text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>({event.reviewCount})</span>
          </div> */}
          <span className="text-[#4F8EF7] font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
            ₹{event.ticketPrice}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default EventCard
