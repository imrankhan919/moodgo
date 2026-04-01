import { useParams, Link } from 'react-router-dom'
import { events } from '../data/mockData'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import { getEvent } from '../features/event/eventSlice'
import { toast } from 'react-toastify'

function BookTicket() {

  const { order } = useSelector(state => state.order)
  const { event, eventComments, eventLoading, eventSuccess, eventError, eventErrorMessage } = useSelector(state => state.event)

  const { eid } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {





    if (!eventError && !eventErrorMessage) {
      // Fetch Event
      dispatch(getEvent(eid))
    }

    if (eventError && eventErrorMessage) {
      toast.error(eventErrorMessage, { position: "top-center", theme: "dark" })
    }


  }, [eventError, eventErrorMessage])

  if (eventLoading) {
    return <LoadingScreen text='Event Loading...' />
  }


  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-24 pb-20" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-0 mb-12">
          {[
            { step: 1, label: 'Details' },
            { step: 2, label: 'Payment' },
            { step: 3, label: 'Confirmation' }
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${item.step <= 3 ? 'bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white' : 'bg-[#1F1F2E] text-[#6B7280]'
                  }`}>
                  {item.step < 3 ? '✓' : item.step === 3 ? '✓' : item.step}
                </div>
                <span className={`text-xs mt-2 ${item.step <= 3 ? 'text-white' : 'text-[#6B7280]'}`}>{item.label}</span>
              </div>
              {i < 2 && (
                <div className={`w-16 sm:w-24 h-0.5 mx-2 mb-5 ${item.step < 3 ? 'bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6]' : 'bg-[#1F1F2E]'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Success State (Step 3) */}
        <div className="text-center mb-10">
          {/* Confetti Dots */}
          <div className="relative inline-block mb-8">
            {[
              { color: '#4F8EF7', x: -40, y: -20, delay: '0s' },
              { color: '#8B5CF6', x: 40, y: -30, delay: '0.2s' },
              { color: '#4F8EF7', x: -50, y: 20, delay: '0.4s' },
              { color: '#8B5CF6', x: 50, y: 10, delay: '0.6s' },
              { color: '#F59E0B', x: -20, y: -40, delay: '0.1s' },
              { color: '#10B981', x: 30, y: -10, delay: '0.3s' },
              { color: '#EF4444', x: -30, y: 30, delay: '0.5s' },
              { color: '#F59E0B', x: 20, y: 40, delay: '0.7s' }
            ].map((dot, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-[confetti_2s_ease_forwards_infinite]"
                style={{ backgroundColor: dot.color, left: `calc(50% + ${dot.x}px)`, top: `calc(50% + ${dot.y}px)`, animationDelay: dot.delay }}
              />
            ))}
            {/* Checkmark Circle */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_40px_rgba(79,142,247,0.3)]">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ strokeDasharray: 100, animation: 'checkmark 0.8s ease forwards' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Booking Confirmed!</h1>
          <p className="text-[#6B7280] text-base max-w-md mx-auto">Your tickets have been booked successfully. Check your email for the confirmation details.</p>
        </div>

        {/* Ticket Summary Card */}
        <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-[#4F8EF7]/10 to-[#8B5CF6]/10 px-6 py-4 border-b border-[#1F1F2E]">
            <h3 className="text-white font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>Booking Details</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <img src={event.image} alt={event.title} className="w-20 h-20 rounded-xl object-cover border border-[#1F1F2E]" />
              <div>
                <h4 className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>{event.title}</h4>
                <p className="text-[#6B7280] text-sm">{event.date} · {event.time} · {event.location}, {event.city}</p>
              </div>
            </div>
            <div className="border-t border-dashed border-[#1F1F2E] pt-4 space-y-3">
              {[
                { label: 'Tickets', value: '2' },
                { label: 'Price per ticket', value: `$${event.price}` },
                { label: 'Total Amount', value: `${order.billedAmount}`, highlight: true }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[#6B7280] text-sm">{row.label}</span>
                  <span className={`text-sm font-bold ${row.highlight ? 'text-[#4F8EF7] text-lg' : 'text-white'}`} style={row.highlight ? { fontFamily: 'Syne, sans-serif' } : {}}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ticket Code */}
        <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] p-6 text-center mb-8">
          <p className="text-[#6B7280] text-xs uppercase tracking-wider mb-2">Your Ticket Code</p>
          <p className="text-3xl font-mono font-bold bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] bg-clip-text text-transparent tracking-widest">
            MOOD-7X9K2
          </p>
          <p className="text-[#6B7280] text-xs mt-2">Show this code at the venue entrance</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/my-tickets" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(79,142,247,0.4)] transition-all duration-300 hover:scale-105">
            View My Tickets
          </Link>
          <Link to="/events" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1F1F2E] text-white font-medium rounded-xl hover:border-[#4F8EF7]/50 hover:bg-[#4F8EF7]/5 transition-all duration-300">
            Browse More Events
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookTicket
