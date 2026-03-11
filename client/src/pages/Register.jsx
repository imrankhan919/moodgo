import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-4 pt-20" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="relative w-full max-w-4xl bg-[#111118] rounded-3xl border border-[#1F1F2E] overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Left - Branding */}
          <div className="md:w-5/12 bg-gradient-to-br from-[#8B5CF6] to-[#4F8EF7] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>M</span>
                </div>
                <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>MoodGo</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                Start your event journey today
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Create your account and unlock personalized event discovery powered by AI.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="md:w-7/12 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Create Account</h3>
            <p className="text-[#6B7280] text-sm mb-8">Fill in your details to get started</p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all duration-300"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all duration-300"
                    readOnly
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all duration-300"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-[#6B7280] text-xs uppercase tracking-wider mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl px-4 py-3.5 text-white text-sm outline-none placeholder-[#6B7280] focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all duration-300"
                  readOnly
                />
              </div>
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 rounded border border-[#1F1F2E] bg-[#0A0A0F]" />
                  <span className="text-[#6B7280] text-xs">I agree to the <a href="#" className="text-[#4F8EF7] hover:underline">Terms of Service</a> and <a href="#" className="text-[#4F8EF7] hover:underline">Privacy Policy</a></span>
                </label>
              </div>
              <button type="button" className="w-full py-3.5 bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(79,142,247,0.4)] transition-all duration-300 hover:scale-105">
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-[#1F1F2E]" />
              <span className="text-[#6B7280] text-xs uppercase">or continue with</span>
              <div className="flex-1 h-px bg-[#1F1F2E]" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl text-white text-sm hover:border-[#4F8EF7]/30 transition-all duration-300">
                <span>G</span> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-[#0A0A0F] border border-[#1F1F2E] rounded-xl text-white text-sm hover:border-[#4F8EF7]/30 transition-all duration-300">
                <span>⌘</span> GitHub
              </button>
            </div>

            <p className="text-center text-[#6B7280] text-sm mt-6">
              Already have an account? <Link to="/login" className="text-[#4F8EF7] hover:underline font-medium">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
