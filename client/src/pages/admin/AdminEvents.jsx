import { useDispatch, useSelector } from 'react-redux'
import { getAllEvents } from '../../features/admin/adminSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import LoadingScreen from '../../components/LoadingScreen'
import { EventFormModal } from '../../components/EventModal'
import { useState } from 'react'


function AdminEvents() {

  const { events, adminLoading, adminSuccess, adminError, adminErrorMessage } = useSelector(state => state.admin)

  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(showModal ? false : true)
  }

  useEffect(() => {

    if (!adminError) {
      // Fetch Users
      dispatch(getAllEvents())
    }


    if (adminError, adminErrorMessage) {
      toast.error(adminErrorMessage, { position: "top-center", theme: "dark" })
    }


  }, [adminError, adminErrorMessage])


  if (adminLoading) {
    return <LoadingScreen />
  }



  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Events</h1>
          <p className="text-[#6B7280] text-sm mt-1">Manage all events on the platform</p>
        </div>
        {/* Create Event - opens modal */}

        <button onClick={handleShowModal} className="list-none cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-medium rounded-xl hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] transition-all duration-300 hover:scale-105">
          ➕ Create Event
        </button>
        <EventFormModal isEdit={false} showModal={showModal} handleShowModal={handleShowModal} />
      </div>

      {/* Table */}
      <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1F1F2E]">
                {['Event', 'Duration', 'Date', 'Price', 'Tickets Left', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[#6B7280] text-xs uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events?.map(event => (
                <tr key={event._id} className="border-b border-[#1F1F2E] last:border-0 hover:bg-[#1F1F2E]/30 transition-all duration-300">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={event.eventImage} alt={event.title} className="w-12 h-9 rounded-lg object-cover border border-[#1F1F2E]" />
                      <span className="text-white text-sm font-medium truncate max-w-[200px]">{event.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 text-[10px] font-semibold text-[#4F8EF7] bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full uppercase tracking-wider">
                      {event.duration}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">{event.eventDate}</td>
                  <td className="px-6 py-4 text-white text-sm font-medium">₹{event.ticketPrice}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[#6B7280] text-xs">{event.totalSeats}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {/* Edit Event Modal Trigger */}
                      <details className="relative">
                        <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-[#4F8EF7]/10 text-[#6B7280] hover:text-[#4F8EF7] transition-all duration-300" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        </summary>
                        <EventFormModal event={event} isEdit={true} />
                      </details>

                      {/* Delete Dropdown */}
                      <details className="relative">
                        <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-red-500/10 text-[#6B7280] hover:text-red-400 transition-all duration-300" title="Delete">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </summary>
                        <div className="absolute right-0 top-full mt-1 w-56 bg-[#111118] border border-[#1F1F2E] rounded-xl shadow-2xl z-40 animate-[slideUp_0.2s_ease_forwards] p-4">
                          <p className="text-white text-sm font-medium mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>Delete event?</p>
                          <p className="text-[#6B7280] text-xs mb-3">This action cannot be undone.</p>
                          <div className="flex gap-2">
                            <button className="flex-1 px-3 py-2 bg-red-500/10 text-red-400 text-xs font-medium rounded-lg border border-red-500/20 hover:bg-red-500/20 transition-all duration-300">Delete</button>
                            <summary className="list-none cursor-pointer flex-1 px-3 py-2 text-center border border-[#1F1F2E] text-[#6B7280] text-xs rounded-lg hover:text-white transition-all duration-300">Cancel</summary>
                          </div>
                        </div>
                      </details>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminEvents
