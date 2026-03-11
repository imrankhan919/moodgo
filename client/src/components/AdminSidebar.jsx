import { Link, useLocation } from 'react-router-dom'

function AdminSidebar() {
  const location = useLocation()

  const links = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/users', label: 'Users', icon: '👥' },
    { path: '/admin/events', label: 'Events', icon: '🎪' },
    { path: '/admin/orders', label: 'Orders', icon: '📦' },
    { path: '/admin/ratings', label: 'Ratings', icon: '⭐' },
    { path: '/admin/coupons', label: 'Coupons', icon: '🎟️' }
  ]

  const isActive = (path) => {
    if (path === '/admin') return location.pathname === '/admin'
    return location.pathname.startsWith(path)
  }

  return (
    <aside className="w-[240px] h-screen bg-[#0D0D14] border-r border-[#1F1F2E] flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-[#1F1F2E]">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center">
            <span className="text-white font-bold text-xs" style={{ fontFamily: 'Syne, sans-serif' }}>M</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] bg-clip-text text-transparent" style={{ fontFamily: 'Syne, sans-serif' }}>
            MoodGo
          </span>
        </Link>
        <p className="text-[#6B7280] text-[10px] mt-1 uppercase tracking-widest" style={{ fontFamily: 'DM Sans, sans-serif' }}>Admin Panel</p>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              isActive(link.path)
                ? 'bg-gradient-to-r from-[#4F8EF7]/10 to-[#8B5CF6]/10 text-white border-l-2 border-[#4F8EF7]'
                : 'text-[#6B7280] hover:text-white hover:bg-[#1F1F2E]'
            }`}
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <span className="text-base">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Bottom User */}
      <div className="px-4 py-4 border-t border-[#1F1F2E]">
        <div className="flex items-center gap-3 px-2">
          <img src="https://i.pravatar.cc/150?img=1" alt="Admin" className="w-9 h-9 rounded-full border-2 border-[#4F8EF7]/30" />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate" style={{ fontFamily: 'DM Sans, sans-serif' }}>Alex Morgan</p>
            <p className="text-[#6B7280] text-[10px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>Admin</p>
          </div>
          <Link to="/" className="text-[#6B7280] hover:text-red-400 transition-all duration-300" title="Logout">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default AdminSidebar
