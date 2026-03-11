function ChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel - shown via details/summary */}
      <details className="group">
        <summary className="list-none cursor-pointer">
          {/* Floating Button */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_30px_rgba(79,142,247,0.3)] hover:shadow-[0_0_40px_rgba(79,142,247,0.5)] transition-all duration-300 hover:scale-110">
            <svg className="w-6 h-6 text-white group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <svg className="w-6 h-6 text-white hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </summary>

        {/* Chat Panel */}
        <div className="absolute bottom-20 right-0 w-[320px] h-[450px] bg-[#111118] border border-[#1F1F2E] rounded-2xl shadow-2xl overflow-hidden animate-[slideUp_0.3s_ease_forwards] flex flex-col">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-[#4F8EF7]/10 to-[#8B5CF6]/10 border-b border-[#1F1F2E] flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center">
              <span className="text-white text-sm">🤖</span>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>MoodGo AI</h4>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-[pulse-ring_2s_ease-in-out_infinite]" />
                <span className="text-emerald-400 text-[10px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* AI Welcome */}
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                <span className="text-[10px]">🤖</span>
              </div>
              <div className="bg-[#1F1F2E] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p className="text-white text-sm leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Hey! 👋 I'm MoodGo AI. I can help you discover events that match your mood. What are you looking for?
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                <p className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>What music events are near me?</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                <span className="text-[10px]">🤖</span>
              </div>
              <div className="bg-[#1F1F2E] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                <p className="text-white text-sm leading-relaxed mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  I found 2 amazing music events for you! 🎵
                </p>
                {/* Event Suggestions */}
                <div className="space-y-2">
                  <div className="bg-[#0A0A0F] rounded-xl p-3 border border-[#1F1F2E]">
                    <p className="text-white text-xs font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>🎧 Neon Nights Music Festival</p>
                    <p className="text-[#6B7280] text-[10px] mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>Apr 15 · New York · $89</p>
                  </div>
                  <div className="bg-[#0A0A0F] rounded-xl p-3 border border-[#1F1F2E]">
                    <p className="text-white text-xs font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>🎸 Acoustic Sunset Sessions</p>
                    <p className="text-[#6B7280] text-[10px] mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>May 25 · Miami · $55</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-[#1F1F2E]">
            <div className="flex items-center gap-2 bg-[#0A0A0F] rounded-xl px-4 py-2.5 border border-[#1F1F2E] focus-within:border-[#4F8EF7]/50 transition-all duration-300">
              <input
                type="text"
                placeholder="Ask MoodGo AI..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-[#6B7280]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                readOnly
              />
              <button className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center flex-shrink-0 hover:scale-105 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </details>
    </div>
  )
}

export default ChatWidget
