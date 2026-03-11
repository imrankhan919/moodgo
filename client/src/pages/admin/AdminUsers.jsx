import { users } from '../../data/mockData'

function AdminUsers() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Users</h1>
          <p className="text-[#6B7280] text-sm mt-1">Manage all registered users</p>
        </div>
        <span className="text-[#6B7280] text-sm">{users.length} users total</span>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 bg-[#111118] border border-[#1F1F2E] rounded-xl px-4 py-3 mb-6 max-w-md focus-within:border-[#4F8EF7]/50 transition-all duration-300">
        <svg className="w-4 h-4 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <input type="text" placeholder="Search users..." className="bg-transparent text-white text-sm outline-none placeholder-[#6B7280] flex-1" readOnly />
      </div>

      {/* Table */}
      <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1F1F2E]">
                {['User', 'Email', 'Role', 'Status', 'Joined', 'Actions'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[#6B7280] text-xs uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b border-[#1F1F2E] last:border-0 hover:bg-[#1F1F2E]/30 transition-all duration-300">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full border-2 border-[#1F1F2E]" />
                      <span className="text-white text-sm font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-wider ${
                      user.role === 'admin' ? 'bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20' : 'bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full uppercase tracking-wider ${
                      user.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">{user.joinedDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {/* Edit User Modal */}
                      <details className="relative">
                        <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-[#4F8EF7]/10 text-[#6B7280] hover:text-[#4F8EF7] transition-all duration-300" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                        </summary>
                        {/* Modal Overlay */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-[fadeInUp_0.2s_ease_forwards]">
                          <div className="bg-[#111118] border border-[#1F1F2E] rounded-2xl shadow-2xl w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F2E]">
                              <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Edit User</h3>
                              <summary className="list-none cursor-pointer p-1.5 rounded-lg hover:bg-[#1F1F2E] text-[#6B7280] hover:text-white transition-all duration-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                              </summary>
                            </div>
                            {/* Body */}
                            <div className="p-6 space-y-4">
                              <div className="flex items-center gap-4 mb-2">
                                <img src={user.avatar} alt={user.name} className="w-14 h-14 rounded-full border-2 border-[#1F1F2E]" />
                                <div>
                                  <p className="text-white font-medium">{user.name}</p>
                                  <p className="text-[#6B7280] text-sm">{user.email}</p>
                                </div>
                              </div>
                              <div>
                                <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Full Name</label>
                                <input type="text" defaultValue={user.name} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4F8EF7] transition-all duration-300" />
                              </div>
                              <div>
                                <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Email</label>
                                <input type="email" defaultValue={user.email} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4F8EF7] transition-all duration-300" />
                              </div>
                              <div>
                                <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Role</label>
                                <select defaultValue={user.role} className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#4F8EF7] transition-all duration-300 cursor-pointer">
                                  <option value="user">User</option>
                                  <option value="admin">Admin</option>
                                </select>
                              </div>
                            </div>
                            {/* Footer */}
                            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#1F1F2E]">
                              <summary className="list-none cursor-pointer px-5 py-2.5 border border-[#1F1F2E] text-[#6B7280] text-sm rounded-xl hover:text-white hover:border-[#6B7280] transition-all duration-300">
                                Cancel
                              </summary>
                              <button className="px-5 py-2.5 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-medium rounded-xl hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] hover:scale-105 transition-all duration-300">
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </details>

                      {/* Suspend/Disable User Modal */}
                      <details className="relative">
                        <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-red-500/10 text-[#6B7280] hover:text-red-400 transition-all duration-300" title={user.status === 'active' ? 'Suspend User' : 'Reactivate User'}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                        </summary>
                        {/* Confirmation Modal */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-[fadeInUp_0.2s_ease_forwards]">
                          <div className="bg-[#111118] border border-[#1F1F2E] rounded-2xl shadow-2xl w-full max-w-sm mx-4" onClick={(e) => e.stopPropagation()}>
                            <div className="p-6 text-center">
                              {/* Icon */}
                              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${user.status === 'active' ? 'bg-red-500/10' : 'bg-emerald-500/10'}`}>
                                {user.status === 'active' ? (
                                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                                ) : (
                                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                )}
                              </div>
                              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                                {user.status === 'active' ? 'Suspend User?' : 'Reactivate User?'}
                              </h3>
                              <p className="text-[#6B7280] text-sm mb-2">
                                {user.status === 'active'
                                  ? `Are you sure you want to suspend ${user.name}? They will lose access to event bookings.`
                                  : `Reactivate ${user.name}'s account? They will regain full platform access.`
                                }
                              </p>
                              {/* User Preview */}
                              <div className="flex items-center gap-3 bg-[#0A0A0F] rounded-xl p-3 my-4 border border-[#1F1F2E]">
                                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 border-[#1F1F2E]" />
                                <div className="text-left">
                                  <p className="text-white text-sm font-medium">{user.name}</p>
                                  <p className="text-[#6B7280] text-xs">{user.email}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-4 border-t border-[#1F1F2E]">
                              <summary className="list-none cursor-pointer flex-1 py-2.5 text-center border border-[#1F1F2E] text-[#6B7280] text-sm rounded-xl hover:text-white hover:border-[#6B7280] transition-all duration-300">
                                Cancel
                              </summary>
                              <button className={`flex-1 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 ${
                                user.status === 'active'
                                  ? 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20'
                                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20'
                              }`}>
                                {user.status === 'active' ? 'Suspend' : 'Reactivate'}
                              </button>
                            </div>
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

export default AdminUsers
