import { Link, useSearchParams } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { events } from '../data/mockData'

function Events() {
  const [searchParams] = useSearchParams()
  const categoryFilter = searchParams.get('category') || 'All'
  const categories = ['All', 'Music', 'Tech', 'Art', 'Food', 'Sports']

  const filteredEvents = categoryFilter === 'All'
    ? events
    : events.filter(e => e.category === categoryFilter)

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-24 pb-20" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Explore Events
          </h1>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
            Discover events that match your vibe. Filter by category, search by name, and find your next great experience.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center gap-3 bg-[#111118] border border-[#1F1F2E] rounded-2xl px-5 py-4 focus-within:border-[#4F8EF7]/50 transition-all duration-300">
            <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search events, artists, venues..."
              className="flex-1 bg-transparent text-white text-sm outline-none placeholder-[#6B7280]"
              readOnly
            />
          </div>
        </div>

        {/* Filter Pills + Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Link
                key={cat}
                to={cat === 'All' ? '/events' : `/events?category=${cat}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  (cat === categoryFilter || (cat === 'All' && !searchParams.get('category')))
                    ? 'bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white shadow-[0_0_20px_rgba(79,142,247,0.2)]'
                    : 'bg-[#111118] text-[#6B7280] border border-[#1F1F2E] hover:text-white hover:border-[#4F8EF7]/30'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
          <select className="bg-[#111118] text-white text-sm border border-[#1F1F2E] rounded-xl px-4 py-2.5 outline-none cursor-pointer">
            <option>Sort by: Date</option>
            <option>Sort by: Price</option>
            <option>Sort by: Rating</option>
          </select>
        </div>

        {/* Results Count */}
        <p className="text-[#6B7280] text-sm mb-6">
          Showing <span className="text-white font-medium">{filteredEvents.length}</span> events
          {categoryFilter !== 'All' && <span> in <span className="text-[#4F8EF7]">{categoryFilter}</span></span>}
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-white text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>No events found</p>
            <p className="text-[#6B7280] text-sm">Try a different category or search term.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Events
