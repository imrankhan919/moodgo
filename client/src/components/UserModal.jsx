import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userUpdate } from '../features/admin/adminSlice'

const UserModal = ({ currentUser, handleModal }) => {

    let user = currentUser

    const [credits, setCredits] = useState(0)

    const dispatch = useDispatch()

    const handleCreditUpdate = (e) => {
        e.preventDefault()
        dispatch(userUpdate({ uid: user._id, credits }))
        handleModal()
    }


    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-[fadeInUp_0.2s_ease_forwards]">
            <form onSubmit={handleCreditUpdate} className="bg-[#111118] border border-[#1F1F2E] rounded-2xl shadow-2xl w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F2E]">
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Edit User</h3>
                    <div className="list-none cursor-pointer p-1.5 rounded-lg hover:bg-[#1F1F2E] text-[#6B7280] hover:text-white transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                </div>
                {/* Body */}
                <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-14 h-14 rounded-full border-2 border-[#1F1F2E] flex items-center justify-center"> <h1 className='text-white font-bold text-3xl'>{user.name[0]}</h1> </div>
                        <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-[#6B7280] text-sm">{user.email}</p>
                            <p className="text-[#6B7280] text-sm">Current Credits : {user.credits}</p>
                        </div>
                    </div>
                    <div className='my-6'>
                        <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Credits</label>
                        <input type="number" onChange={(e) => setCredits(e.target.value)} value={credits} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4F8EF7] transition-all duration-300" />
                    </div>
                </div>
                {/* Footer */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#1F1F2E]">
                    <div onClick={handleModal} className="list-none cursor-pointer px-5 py-2.5 border border-[#1F1F2E] text-[#6B7280] text-sm rounded-xl hover:text-white hover:border-[#6B7280] transition-all duration-300">
                        Cancel
                    </div>
                    <button className="px-5 py-2.5 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-medium rounded-xl hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] hover:scale-105 transition-all duration-300">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>



    )
}

export default UserModal
