import { Link, useSearchParams } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { events } from '../data/mockData'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getEvents } from '../features/event/eventSlice'
import LoadingScreen from '../components/LoadingScreen'

function Events() {

  const { events, eventLoading, eventSuccess, eventError, eventErrorMessage } = useSelector(state => state.event)
  const dispatch = useDispatch()




  useEffect(() => {
    // Fetch Events
    dispatch(getEvents())
  }, [])


  if (eventLoading) {
    return <LoadingScreen />
  }



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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Events
