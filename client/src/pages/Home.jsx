import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import EventCard from '../components/EventCard'
import { comments } from '../data/mockData'
import { useEffect } from 'react'
import { getEvents } from '../features/event/eventSlice'
import LoadingScreen from '../components/LoadingScreen'

function Home() {

  const { events, eventLoading, eventSuccess, eventError, eventErrorMessage } = useSelector(state => state.event)

  const dispatch = useDispatch()

  const featuredEvents = events.filter(e => e.isActive)
  const categories = [
    { emoji: '🎵', label: 'Music' },
    { emoji: '💻', label: 'Tech' },
    { emoji: '🎨', label: 'Art' },
    { emoji: '🍕', label: 'Food' },
    { emoji: '⚽', label: 'Sports' },
    { emoji: '🎭', label: 'Theatre' }
  ]
  const trustedLogos = ['Spotify', 'Google', 'Meta', 'Apple', 'Netflix', 'Spotify', 'Google', 'Meta', 'Apple', 'Netflix']
  const testimonials = comments.filter(c => c.rating >= 4).slice(0, 3)


  useEffect(() => {
    // Fetch Events
    dispatch(getEvents())
  }, [])


  if (eventLoading) {
    return <LoadingScreen />
  }


  return (
    <div className="min-h-screen bg-[#0A0A0F]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* ══════════════ HERO SECTION ══════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[#4F8EF7]/10 blur-[150px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />
          <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-[#4F8EF7]/5 blur-[100px]" />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
          {/* Grain SVG Filter */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          {/* Badge */}
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease_forwards] mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 text-[#4F8EF7] text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#4F8EF7] animate-pulse" />
              AI-Powered Event Discovery
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-white leading-[1.0] mb-8 opacity-0 animate-[fadeInUp_0.6s_ease_forwards] tracking-tight" style={{ fontFamily: 'Syne, sans-serif', animationDelay: '0.1s' }}>
            Find Your Next
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-[#4F8EF7] via-[#7C6CF7] to-[#8B5CF6] bg-clip-text text-transparent">Unforgettable</span>
            </span>
            <br />
            Experience
          </h1>

          {/* Subtitle */}
          <p className="text-[#9CA3AF] text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-[fadeInUp_0.6s_ease_forwards] leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Tell us your mood. Our AI finds the perfect events — from intimate acoustic nights to massive festivals. Discover, book, and vibe.
          </p>

          {/* Search Bar CTA */}
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease_forwards] mb-14" style={{ animationDelay: '0.3s' }}>
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 bg-[#111118]/80 backdrop-blur-xl border border-[#1F1F2E] rounded-2xl p-2.5 hover:border-[#4F8EF7]/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3 flex-1 px-4 py-2 w-full">
                <svg className="w-5 h-5 text-[#4F8EF7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input type="text" placeholder="Search events, moods, artists, cities..." className="bg-transparent text-white text-sm outline-none placeholder-[#6B7280] flex-1 w-full" readOnly />
              </div>
              <Link to="/events" className="flex-shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold text-sm rounded-xl hover:shadow-[0_0_25px_rgba(79,142,247,0.4)] transition-all duration-300 hover:scale-105">
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>

          {/* Stats Row */}
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease_forwards] mb-16" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              {[
                { value: '10K+', label: 'Events Hosted' },
                { value: '50K+', label: 'Happy Attendees' },
                { value: '4.9', label: 'Avg. Rating', extra: '★' },
                { value: '120+', label: 'Cities Worldwide' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] bg-clip-text text-transparent" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {stat.value} {stat.extra && <span className="text-yellow-400 text-xl">{stat.extra}</span>}
                  </p>
                  <p className="text-[#6B7280] text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Events Preview Strip */}
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease_forwards]" style={{ animationDelay: '0.5s' }}>
            <p className="text-[#6B7280] text-xs uppercase tracking-[0.2em] mb-5">🔥 Trending right now</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {featuredEvents.slice(0, 3).map((event) => (
                <Link
                  key={event.id}
                  to={`/events/${event.id}`}
                  className="group flex items-center gap-4 bg-[#111118]/60 backdrop-blur-lg border border-[#1F1F2E] rounded-2xl p-3 pr-6 hover:border-[#4F8EF7]/30 hover:bg-[#111118] transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={event.image} alt={event.title} className="w-14 h-14 rounded-xl object-cover border border-[#1F1F2E] group-hover:border-[#4F8EF7]/30 transition-all duration-300" />
                  <div className="text-left">
                    <h4 className="text-white text-sm font-bold line-clamp-1 group-hover:text-[#4F8EF7] transition-all duration-300" style={{ fontFamily: 'Syne, sans-serif' }}>{event.title}</h4>
                    <p className="text-[#6B7280] text-xs mt-0.5">{event.date} · {event.city}</p>
                  </div>
                  <span className="text-[#4F8EF7] font-bold text-sm ml-auto" style={{ fontFamily: 'Syne, sans-serif' }}>${event.price}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TRUSTED BY (Marquee) ══════════════ */}
      <section className="py-12 border-y border-[#1F1F2E] overflow-hidden">
        <p className="text-center text-[#6B7280] text-xs uppercase tracking-[0.2em] mb-6">Trusted by leading brands worldwide</p>
        <div className="relative">
          <div className="flex gap-16 animate-[marquee_20s_linear_infinite]" style={{ width: 'max-content' }}>
            {[...trustedLogos, ...trustedLogos].map((logo, i) => (
              <span key={i} className="text-[#6B7280]/30 text-2xl font-bold whitespace-nowrap" style={{ fontFamily: 'Syne, sans-serif' }}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FEATURED EVENTS ══════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[#4F8EF7] text-xs font-semibold uppercase tracking-[0.2em]">Curated for you</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: 'Syne, sans-serif' }}>Featured Events</h2>
          </div>
          <Link to="/events" className="hidden sm:inline-flex items-center gap-2 text-[#4F8EF7] text-sm font-medium hover:gap-3 transition-all duration-300">
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map(event => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </section>

      {/* ══════════════ CATEGORIES ══════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#8B5CF6] text-xs font-semibold uppercase tracking-[0.2em]">Browse by interest</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: 'Syne, sans-serif' }}>Explore Categories</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <Link
              key={cat.label}
              to={`/events?category=${cat.label}`}
              className="group flex items-center gap-3 px-6 py-4 bg-[#111118] border border-[#1F1F2E] rounded-2xl hover:bg-gradient-to-r hover:from-[#4F8EF7] hover:to-[#8B5CF6] hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(79,142,247,0.2)]"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="text-white font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#4F8EF7] text-xs font-semibold uppercase tracking-[0.2em]">Simple & seamless</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: 'Syne, sans-serif' }}>How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Browse', desc: 'Explore thousands of events curated by our AI based on your interests and mood.' },
            { step: '02', title: 'Book', desc: 'Secure your spot with instant booking. Apply coupons and get the best deals.' },
            { step: '03', title: 'Attend', desc: 'Show your digital ticket and enjoy an unforgettable experience.' }
          ].map((item, i) => (
            <div key={i} className="relative text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_30px_rgba(79,142,247,0.2)] group-hover:shadow-[0_0_50px_rgba(79,142,247,0.3)] transition-all duration-300 group-hover:scale-110">
                <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{item.step}</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{item.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ AI ASSISTANT CTA ══════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative bg-[#111118] rounded-3xl border border-[#1F1F2E] overflow-hidden p-8 md:p-14">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4F8EF7]/10 to-[#8B5CF6]/10 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F8EF7] to-transparent" />

          <div className="relative flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 text-[#4F8EF7] text-xs font-medium mb-4">
                🤖 AI-Powered
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                Ask our AI anything about events
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed mb-6 max-w-lg">
                Get personalized event recommendations, find events matching your mood, compare options, and more — all through a natural conversation with MoodGo AI.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-medium rounded-full hover:shadow-[0_0_30px_rgba(79,142,247,0.4)] transition-all duration-300 hover:scale-105">
                Try AI Assistant
                <span>✨</span>
              </button>
            </div>

            {/* Mock Chat Preview */}
            <div className="flex-shrink-0 w-full md:w-72 bg-[#0A0A0F] rounded-2xl border border-[#1F1F2E] p-4 space-y-3">
              <div className="flex items-center gap-2 pb-3 border-b border-[#1F1F2E]">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center">
                  <span className="text-[8px]">🤖</span>
                </div>
                <span className="text-white text-xs font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>MoodGo AI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-auto" />
              </div>
              <div className="bg-[#1F1F2E] rounded-xl px-3 py-2">
                <p className="text-white text-[11px]">What kind of vibe are you in the mood for? 🎶</p>
              </div>
              <div className="bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-xl px-3 py-2 ml-auto max-w-[80%]">
                <p className="text-white text-[11px]">Something chill, maybe acoustic</p>
              </div>
              <div className="bg-[#1F1F2E] rounded-xl px-3 py-2">
                <p className="text-white text-[11px]">Found it! Acoustic Sunset Sessions in Miami 🌅</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#8B5CF6] text-xs font-semibold uppercase tracking-[0.2em]">What people say</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: 'Syne, sans-serif' }}>Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(comment => (
            <div key={comment.id} className="bg-[#111118] rounded-2xl border border-[#1F1F2E] p-6 hover:border-[#4F8EF7]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`text-sm ${i < comment.rating ? 'text-yellow-400' : 'text-[#1F1F2E]'}`}>★</span>
                ))}
              </div>
              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">"{comment.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#1F1F2E]">
                <img src={comment.avatar} alt={comment.userName} className="w-10 h-10 rounded-full border-2 border-[#1F1F2E]" />
                <div>
                  <p className="text-white text-sm font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>{comment.userName}</p>
                  <p className="text-[#6B7280] text-xs">{comment.createdAt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
