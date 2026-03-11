import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-[#1F1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] bg-clip-text text-transparent" style={{ fontFamily: 'Syne, sans-serif' }}>
                MoodGo
              </span>
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              AI-powered event discovery tailored to your mood. Find, book, and experience events that resonate with you.
            </p>
            <div className="flex gap-3 mt-5">
              {['𝕏', 'in', '📷', '▶'].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-[#111118] border border-[#1F1F2E] flex items-center justify-center text-[#6B7280] hover:text-[#4F8EF7] hover:border-[#4F8EF7]/30 transition-all duration-300 text-xs">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>Platform</h4>
            <div className="space-y-3">
              {[
                { to: '/events', label: 'Browse Events' },
                { to: '/my-tickets', label: 'My Tickets' },
                { to: '/profile', label: 'Profile' },
                { to: '/', label: 'AI Assistant' }
              ].map(link => (
                <Link key={link.to + link.label} to={link.to} className="block text-sm text-[#6B7280] hover:text-[#4F8EF7] transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>Company</h4>
            <div className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Press'].map(label => (
                <a key={label} href="#" className="block text-sm text-[#6B7280] hover:text-[#4F8EF7] transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>Legal</h4>
            <div className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Support'].map(label => (
                <a key={label} href="#" className="block text-sm text-[#6B7280] hover:text-[#4F8EF7] transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1F1F2E] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280] text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            © 2026 MoodGo. All rights reserved.
          </p>
          <p className="text-[#6B7280] text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Built with ❤️ for extraordinary experiences
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
