import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../components/AdminSidebar'

function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0D0D14] border-b border-[#1F1F2E] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center">
            <span className="text-white font-bold text-xs" style={{ fontFamily: 'Syne, sans-serif' }}>M</span>
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] bg-clip-text text-transparent" style={{ fontFamily: 'Syne, sans-serif' }}>Admin</span>
        </div>
        <details className="relative group">
          <summary className="list-none cursor-pointer p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </summary>
          <div className="absolute right-0 top-full mt-2 w-64 bg-[#111118] border border-[#1F1F2E] rounded-2xl shadow-2xl overflow-hidden animate-[slideUp_0.3s_ease_forwards] z-50">
            <div className="p-3 space-y-1">
              {[
                { path: '/admin', label: '📊 Dashboard' },
                { path: '/admin/users', label: '👥 Users' },
                { path: '/admin/events', label: '🎪 Events' },
                { path: '/admin/orders', label: '📦 Orders' },
                { path: '/admin/ratings', label: '⭐ Ratings' },
                { path: '/admin/coupons', label: '🎟️ Coupons' }
              ].map(link => (
                <a key={link.path} href={link.path} className="block px-4 py-3 rounded-xl text-sm text-[#6B7280] hover:text-white hover:bg-[#1F1F2E] transition-all duration-300">{link.label}</a>
              ))}
            </div>
          </div>
        </details>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden lg:block">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <main className="lg:ml-[240px] pt-16 lg:pt-0 min-h-screen">
        <div className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout
