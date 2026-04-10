import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, userUpdate } from '../../features/admin/adminSlice'
import { toast } from 'react-toastify'
import LoadingScreen from '../../components/LoadingScreen'
import UserModal from '../../components/UserModal'


function AdminUsers() {

  const [showModal, setShowModal] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const { users, adminLoading, adminSuccess, adminError, adminErrorMessage } = useSelector(state => state.admin)

  const dispatch = useDispatch()

  const handleBanUnbanUser = (update) => {
    dispatch(userUpdate(update))
  }

  const handleModal = (user = null) => {
    setCurrentUser(user)
    setShowModal(showModal ? false : true)
  }


  useEffect(() => {

    if (!adminError) {
      // Fetch Users
      dispatch(getAllUsers())
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
          <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Users</h1>
          <p className="text-[#6B7280] text-sm mt-1">Manage all registered users</p>
        </div>
        <span className="text-[#6B7280] text-sm">{users.length} users total</span>
      </div>

      {/* Table */}
      <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1F1F2E]">
                {['User', 'Email', 'Phone', 'Status', 'Joined', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[#6B7280] text-xs uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id} className="border-b border-[#1F1F2E] last:border-0 hover:bg-[#1F1F2E]/30 transition-all duration-300">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 p-1 rounded-full bg-gray-800 border border-white text-white text-center flex itemse-center justify-center font-bold">
                        <p>{user.name[0].toUpperCase()}</p>
                      </div>
                      <span className="text-white text-sm font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-tight 'bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20'
                      }`}>
                      {user.phone}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-wider ${user.isActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}>
                      {user.isActive ? "Active" : "Blocked"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">{new Date(user.createdAt).toLocaleDateString('en-IN')}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">

                      <div className="relative">
                        <div onClick={() => handleModal(user)} className="list-none cursor-pointer p-2 rounded-lg hover:bg-[#4F8EF7]/10 text-[#6B7280] hover:text-[#4F8EF7] transition-all duration-300" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        </div>
                        {/* Modal Overlay */}
                        {/* Edit User Modal */}
                        {
                          showModal && <UserModal currentUser={currentUser} handleModal={handleModal} />
                        }
                      </div>
                      <button onClick={() => handleBanUnbanUser({ uid: user._id, isActive: user.isActive ? false : true })} className={user.isActive ? 'bg-red-500 p-1 text-sm rounded-md text-white hover:bg-red-600 cursor-pointer' : 'bg-green-500 p-1 text-sm rounded-md text-black hover:bg-green-600 cursor-pointer'}>{user.isActive ? "Ban User" : "Unban User"}</button>
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

export default AdminUsers
