import { events } from '../../data/mockData'

function EventFormModal({ event, isEdit }) {
  const title = isEdit ? 'Edit Event' : 'Create New Event'
  const submitLabel = isEdit ? 'Save Changes' : 'Create Event'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-[fadeInUp_0.2s_ease_forwards]">
      <div className="bg-[#111118] border border-[#1F1F2E] rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F2E]">
          <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
          <summary className="list-none cursor-pointer p-1.5 rounded-lg hover:bg-[#1F1F2E] text-[#6B7280] hover:text-white transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </summary>
        </div>
        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {/* Image Upload */}
          <div>
            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Event Image</label>
            {isEdit && event?.image && (
              <div className="mb-3 relative rounded-xl overflow-hidden border border-[#1F1F2E]">
                <img src={event.image} alt="Current" className="w-full h-32 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-xs font-medium bg-[#0A0A0F]/80 px-3 py-1.5 rounded-lg backdrop-blur-sm">Click below to replace</span>
                </div>
              </div>
            )}
            <label className="flex flex-col items-center justify-center w-full h-28 bg-[#0A0A0F] border-2 border-dashed border-[#1F1F2E] rounded-xl cursor-pointer hover:border-[#4F8EF7]/50 hover:bg-[#4F8EF7]/5 transition-all duration-300 group">
              <div className="flex flex-col items-center justify-center">
                <svg className="w-8 h-8 text-[#6B7280] group-hover:text-[#4F8EF7] transition-all duration-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-[#6B7280] text-xs group-hover:text-[#4F8EF7] transition-all duration-300">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-[#6B7280]/50 text-[10px] mt-1">PNG, JPG, WebP up to 5MB</p>
              </div>
              <input type="file" accept="image/png,image/jpeg,image/webp" className="hidden" />
            </label>
          </div>

          <div>
            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Event Title</label>
            <input type="text" defaultValue={isEdit ? event?.title : ''} placeholder="Enter event title" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Category</label>
              <select defaultValue={isEdit ? event?.category : 'Music'} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4F8EF7] transition-all duration-300 cursor-pointer">
                {['Music', 'Tech', 'Art', 'Food', 'Sports'].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Price ($)</label>
              <input type="number" defaultValue={isEdit ? event?.price : ''} placeholder="0" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Date</label>
              <input type="date" defaultValue={isEdit ? event?.date : ''} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4F8EF7] transition-all duration-300" />
            </div>
            <div>
              <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Time</label>
              <input type="time" defaultValue={isEdit ? event?.time : ''} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4F8EF7] transition-all duration-300" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Location</label>
              <input type="text" defaultValue={isEdit ? event?.location : ''} placeholder="Venue name" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" />
            </div>
            <div>
              <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">City</label>
              <input type="text" defaultValue={isEdit ? event?.city : ''} placeholder="City" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" />
            </div>
          </div>
          <div>
            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Total Tickets</label>
            <input type="number" defaultValue={isEdit ? event?.totalTickets : ''} placeholder="0" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" />
          </div>
          <div>
            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Description</label>
            <textarea defaultValue={isEdit ? event?.description : ''} placeholder="Describe the event..." rows={3} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300 resize-none" />
          </div>
        </div>
        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#1F1F2E]">
          <summary className="list-none cursor-pointer px-5 py-2.5 border border-[#1F1F2E] text-[#6B7280] text-sm rounded-xl hover:text-white hover:border-[#6B7280] transition-all duration-300">
            Cancel
          </summary>
          <button className="px-5 py-2.5 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-medium rounded-xl hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] hover:scale-105 transition-all duration-300">
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

function AdminEvents() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Events</h1>
          <p className="text-[#6B7280] text-sm mt-1">Manage all events on the platform</p>
        </div>
        {/* Create Event - opens modal */}
        <details className="relative">
          <summary className="list-none cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-medium rounded-xl hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] transition-all duration-300 hover:scale-105">
            ➕ Create Event
          </summary>
          <EventFormModal isEdit={false} />
        </details>
      </div>

      {/* Table */}
      <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1F1F2E]">
                {['Event', 'Category', 'Date', 'Price', 'Tickets Left', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[#6B7280] text-xs uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id} className="border-b border-[#1F1F2E] last:border-0 hover:bg-[#1F1F2E]/30 transition-all duration-300">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={event.image} alt={event.title} className="w-12 h-9 rounded-lg object-cover border border-[#1F1F2E]" />
                      <span className="text-white text-sm font-medium truncate max-w-[200px]">{event.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 text-[10px] font-semibold text-[#4F8EF7] bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full uppercase tracking-wider">
                      {event.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">{event.date}</td>
                  <td className="px-6 py-4 text-white text-sm font-medium">${event.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-[#1F1F2E] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-full" style={{ width: `${(event.availableTickets / event.totalTickets) * 100}%` }} />
                      </div>
                      <span className="text-[#6B7280] text-xs">{event.availableTickets}/{event.totalTickets}</span>
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
