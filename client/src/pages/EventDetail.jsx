import { useParams, Link, useNavigate } from 'react-router-dom'
import { events, comments } from '../data/mockData'
import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../components/LoadingScreen'
import { useEffect, useState } from 'react'
import { getEvent, getEventComments } from '../features/event/eventSlice'
import { toast } from 'react-toastify'
import { applyCoupon, ticketBook } from '../features/orders/orderSlice'
import CommentForm from '../components/CommentForm'

function EventDetail() {
  const { eid } = useParams()
  const { user } = useSelector(state => state.auth)
  const { event, eventComments, eventLoading, eventSuccess, eventError, eventErrorMessage } = useSelector(state => state.event)
  const { coupon, order, orderLoading, orderSuccess, orderError, orderErrorMessage } = useSelector(state => state.order)

  const [ticketCount, setTicketCount] = useState(1)
  const [couponCode, setCouponCode] = useState("")


  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleApplyCoupon = (e) => {
    e.preventDefault()
    dispatch(applyCoupon({ couponCode }))
  }


  const handleTicketBooking = () => {

    dispatch(ticketBook({
      eventId: eid,
      numberOfSeats: ticketCount,
      couponCode: couponCode || null
    }))

    if (orderSuccess && order) {
      navigate("/auth/book/" + eid)
    }


  }




  useEffect(() => {




    if (!eventError && !eventErrorMessage) {
      // Fetch Event
      dispatch(getEvent(eid))
      dispatch(getEventComments(eid))
    }

    if (eventError && eventErrorMessage || orderError && orderErrorMessage) {
      toast.error(eventErrorMessage || orderErrorMessage, { position: "top-center", theme: "dark" })
    }


  }, [eventError, eventErrorMessage, orderError, orderErrorMessage])



  if (eventLoading || orderLoading) {
    return <LoadingScreen text='Event Loading...' />
  }


  return (
    <div className="min-h-screen bg-[#0A0A0F]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={event.eventImage} alt={event.title} className="w-full h-full object-cover" />
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
              <p className="text-[#6B7280] text-sm">by <span className="text-[#4F8EF7]">{event.eventArtistName}</span></p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: 'Date', value: event.eventDate },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: 'Duration', value: event.duration },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: 'Venue', value: `${event.eventLocation}` }
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

            {/* Comment Form */}
            {
              user && <CommentForm />
            }

            {/* Comments */}
            <div>
              <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Reviews ({eventComments.length})
              </h2>
              <div className="space-y-4">
                {eventComments.length > 0 ? eventComments.map(comment => (
                  <div key={comment._id} className="bg-[#111118] rounded-xl border border-[#1F1F2E] p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 p-1 rounded-full bg-gray-800 border border-white text-white text-center flex itemse-center justify-center font-bold">
                        <p>{comment.user.name[0].toUpperCase()}</p>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-white text-sm font-medium">{comment.user.name}</p>
                          <p className="text-[#6B7280] text-xs">{new Date(comment.createdAt).toLocaleDateString('en-IN')}</p>
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
                  <p className="text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>₹{event.ticketPrice}</p>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-[#4F8EF7]/10 rounded-full">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-white text-sm font-medium">{event.rating}</span>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-[#6B7280]">Available Seats</span>
                  <span className="text-white font-medium">{event.totalSeats}</span>
                </div>
              </div>

              {/* Ticket Count Selector */}
              <div className="flex items-center justify-between bg-[#0A0A0F] rounded-xl p-4 mb-4 border border-[#1F1F2E]">
                <span className="text-white text-sm">Tickets</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setTicketCount(ticketCount === 1 ? 1 : ticketCount - 1)} className="w-8 h-8 rounded-lg bg-[#1F1F2E] text-white flex items-center justify-center hover:bg-[#4F8EF7]/20 transition-all duration-300">−</button>
                  <span className="text-white font-bold w-8 text-center">{ticketCount}</span>
                  <button onClick={() => setTicketCount(ticketCount === 5 ? 5 : ticketCount + 1)} className="w-8 h-8 rounded-lg bg-[#1F1F2E] text-white flex items-center justify-center hover:bg-[#4F8EF7]/20 transition-all duration-300">+</button>
                </div>
              </div>

              {/* Coupon */}
              <div className="flex items-center gap-2 mb-6">
                <form onSubmit={handleApplyCoupon}>
                  <input
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    type="text"
                    placeholder="Coupon code"
                    className={coupon?.isActive ? "flex-1 bg-green-900 border border-green-600 mr-2 rounded-xl px-4 py-2.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7]/50 transition-all duration-300" : "flex-1 bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-2.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7]/50 transition-all duration-300"}
                  />
                  <button type='submit' disabled={couponCode === ""} className="px-4 py-2.5 text-sm text-[#4F8EF7] border border-[#4F8EF7]/30 rounded-xl hover:bg-[#4F8EF7]/10 transition-all duration-300 disabled:hidden">
                    Apply
                  </button>
                  {
                    coupon.isActive && <p className='text-green-500 text-xs my-4 ml-2 '>Coupon Applied</p>
                  }
                </form>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between py-4 border-t border-[#1F1F2E] mb-6">
                <span className="text-[#6B7280] text-sm">Total ({ticketCount} tickets)</span>
                <span className="text-white text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>₹ {coupon?.isActive ? event.ticketPrice * ticketCount - event.ticketPrice * ticketCount * coupon?.couponDiscount / 100 : event.ticketPrice * ticketCount}</span>
              </div>

              {
                !user ? (
                  <Link
                    to={`/login`}
                    className="block w-full py-4 text-center text-white font-semibold bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-xl hover:shadow-[0_0_30px_rgba(79,142,247,0.4)] transition-all duration-300 hover:scale-105"
                  >
                    Login To Book Ticket
                  </Link>
                ) : (
                  <button
                    onClick={handleTicketBooking}
                    className="block w-full py-4 text-center text-white font-semibold bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-xl hover:shadow-[0_0_30px_rgba(79,142,247,0.4)] transition-all duration-300 hover:scale-105"
                  >
                    Book Ticket
                  </button>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
