import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addEventAdmin, updateEventAdmin } from "../features/admin/adminSlice"
import { useEffectEvent } from "react"

export function EventFormModal({ event, isEdit, showModal, handleShowModal }) {

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)
    const { edit } = useSelector(state => state.admin)

    const submitLabel = isEdit ? 'Save Changes' : 'Create Event'

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        eventImage: "",
        eventDate: "",
        eventLocation: "",
        eventArtistName: "",
        ticketPrice: "",
        totalSeats: "",
        duration: "",
        isActive: true,
        status: ""
    })

    const { title, description, eventImage, eventDate, eventLocation, eventArtistName, ticketPrice, totalSeats, duration, isActive, status } = formData



    const handleChange = (e) => {
        if (e.target.name === "eventImage") {
            const file = e.target.files[0]
            if (file) {
                console.log("File selected:", file)  // Debug log
                setFormData({ ...formData, eventImage: file })
            }
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formDataToSend = new FormData()
        formDataToSend.append('title', title)
        formDataToSend.append('description', description)
        formDataToSend.append('eventDate', eventDate)
        formDataToSend.append('eventLocation', eventLocation)
        formDataToSend.append('eventArtistName', eventArtistName)
        formDataToSend.append('ticketPrice', ticketPrice)
        formDataToSend.append('totalSeats', totalSeats)
        formDataToSend.append('duration', duration)
        formDataToSend.append('eventImage', eventImage)
        formDataToSend.append('isActive', isActive)
        formDataToSend.append('status', status)


        !edit.isEdit ? dispatch(addEventAdmin(formDataToSend)) : dispatch(updateEventAdmin(formData))

        handleShowModal()


    }


    useEffect(() => {
        setFormData(edit.event)
    }, [edit])



    return (
        <div className={showModal ? "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-[fadeInUp_0.2s_ease_forwards]" : "hidden"}>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-[#111118] border border-[#1F1F2E] rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F2E]">
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
                    <button type="button" onClick={handleShowModal} className="list-none cursor-pointer p-1.5 rounded-lg hover:bg-[#1F1F2E] text-[#6B7280] hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-6 space-y-4">
                    {/* Image Upload */}
                    <div>
                        <label className="flex flex-col items-center justify-center w-full h-28 bg-[#0A0A0F] border-2 border-dashed border-[#1F1F2E] rounded-xl cursor-pointer hover:border-[#4F8EF7]/50 hover:bg-[#4F8EF7]/5 transition-all duration-300 group">
                            <div className="flex flex-col items-center justify-center">
                                <svg className="w-8 h-8 text-[#6B7280] group-hover:text-[#4F8EF7] transition-all duration-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-[#6B7280] text-xs group-hover:text-[#4F8EF7] transition-all duration-300">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-[#6B7280]/50 text-[10px] mt-1">PNG, JPG, WebP up to 5MB</p>
                                <p className={eventImage?.name ? "text-green-500 text-[10px] mt-2" : "text-[#6B7280]/50 text-[10px] mt-2"}>{eventImage?.name || "No Image Selected"}</p>
                            </div>
                            <input onChange={handleChange} name="eventImage" type="file" accept="image/png,image/jpeg,image/webp" className="hidden" />
                        </label>
                    </div>

                    <div>
                        <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Event Title</label>
                        <input type="text" value={title} onChange={handleChange} name="title" placeholder="Enter event title" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Date</label>
                            <input type="text" value={eventDate} onChange={handleChange} name="eventDate" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4F8EF7] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Duration</label>
                            <input type="text" value={duration} onChange={handleChange} name="duration" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4F8EF7] transition-all duration-300" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Location</label>
                            <input type="text" value={eventLocation} onChange={handleChange} name="eventLocation" placeholder="Venue name" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Event Artist</label>
                            <input type="text" value={eventArtistName} onChange={handleChange} name="eventArtistName" placeholder="Artist Name" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Total Tickets</label>
                            <input type="number" value={totalSeats} onChange={handleChange} name="totalSeats" placeholder="0" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" />
                        </div>
                        <div>
                            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Ticket Price</label>
                            <input type="number" value={ticketPrice} onChange={handleChange} name="ticketPrice" placeholder="0" className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">isActive</label>
                            <select name="isActive" value={isActive} onChange={handleChange} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300">
                                <option value="true">Active</option>
                                <option value="false">InActive</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Ticket Price</label>
                            <select name="status" value={status} onChange={handleChange} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300">
                                <option value="upcoming">upcoming</option>
                                <option value="ongoing">ongoing</option>
                                <option value="cancelled">cancelled</option>
                                <option value="expired">expired</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Description</label>
                        <textarea value={description} onChange={handleChange} name="description" placeholder="Describe the event..." rows={3} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] transition-all duration-300 resize-none" />
                    </div>
                </div>
                {/* Modal Footer */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#1F1F2E]">
                    <button type="button" onClick={handleShowModal} className="list-none cursor-pointer px-5 py-2.5 border border-[#1F1F2E] text-[#6B7280] text-sm rounded-xl hover:text-white hover:border-[#6B7280] transition-all duration-300">
                        Cancel
                    </button>
                    <button type="submit" className="px-5 py-2.5 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-medium rounded-xl hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] hover:scale-105 transition-all duration-300">
                        {edit?.isEdit ? "Update Event" : "Create Event"}
                    </button>
                </div>
            </form>
        </div>
    )
}