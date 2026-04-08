import { useDispatch, useSelector } from 'react-redux'
import { editEvent, getAllEvents } from '../../features/admin/adminSlice'
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

  const handleEditEvent = (event) => {
    handleShowModal()
    dispatch(editEvent(event))
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
                      <button onClick={() => handleEditEvent(event)} className="relative">
                        <div className="list-none cursor-pointer p-2 rounded-lg hover:bg-[#4F8EF7]/10 text-[#6B7280] hover:text-[#4F8EF7] transition-all duration-300" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        </div>
                      </button>
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
