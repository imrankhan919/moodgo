import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/auth/authSlice'

function Navbar() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector(state => state.auth)

  const location = useLocation()

  const isActive = (path) => location.pathname === path


  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/login")
  }


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-lg border-b border-[#1F1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] bg-clip-text text-transparent" style={{ fontFamily: 'Syne, sans-serif' }}>
              MoodGo
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/events', label: 'Events' },
              { path: '/my-tickets', label: 'My Tickets' }
            ].map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-all duration-300 ${isActive(link.path) ? 'text-white' : 'text-[#6B7280] hover:text-white'}`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {
              user ? (
                <>
                  <Link className={`relative text-sm font-medium transition-all duration-300 text-white mx-6 hover:text-white'}`} to={"/profile"}>{user.name}</Link>
                  <button
                    onClick={handleLogout}
                    className="px-5 cursor-pointer py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-full hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] transition-all duration-300 hover:scale-105"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Logout
                  </button>
                </>
              ) : (<>
                <Link
                  to="/login"
                  className="px-5 py-2 text-sm font-medium text-[#4F8EF7] border border-[#4F8EF7]/30 rounded-full hover:border-[#4F8EF7] transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-full hover:shadow-[0_0_20px_rgba(79,142,247,0.3)] transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Get Started
                </Link>
              </>)
            }
          </div>

          {/* Mobile Menu Button */}
          <details className="md:hidden relative group">
            <summary className="list-none cursor-pointer p-2 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-64 bg-[#111118] border border-[#1F1F2E] rounded-2xl shadow-2xl overflow-hidden animate-[slideUp_0.3s_ease_forwards]">
              <div className="p-4 space-y-2">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/events', label: 'Events' },
                  { path: '/my-tickets', label: 'My Tickets' }
                ].map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isActive(link.path) ? 'bg-gradient-to-r from-[#4F8EF7]/10 to-[#8B5CF6]/10 text-white' : 'text-[#6B7280] hover:text-white hover:bg-[#1F1F2E]'}`}
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-[#1F1F2E] space-y-2">
                  {
                    user ? (
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-3 text-center text-sm font-medium text-white bg-red-500 hover:bg-red-600 cursor-pointer rounded-xl transition-all duration-300"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Get Started
                      </button>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-3 text-center text-sm font-medium text-[#4F8EF7] border border-[#4F8EF7]/30 rounded-xl hover:border-[#4F8EF7] transition-all duration-300"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="block px-4 py-3 text-center text-sm font-medium text-white bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-xl transition-all duration-300"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          Get Started
                        </Link>
                      </>
                    )
                  }
                </div>
              </div>
            </div>
          </details>
        </div >
      </div >
    </nav >
  )
}

export default Navbar
