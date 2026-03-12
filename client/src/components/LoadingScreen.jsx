import React from 'react';

const LoadingScreen = ({ fullScreen = true, text = "Loading MoodGo..." }) => {
    const containerClasses = fullScreen
        ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900/95 backdrop-blur-md"
        : "w-full h-full min-h-[400px] flex flex-col items-center justify-center rounded-2xl bg-gray-900/50 backdrop-blur-sm";

    return (
        <div className={containerClasses}>
            <div className="relative flex items-center justify-center mb-8">
                {/* Ambient glow effect */}
                <div className="absolute w-32 h-32 rounded-full bg-purple-600/30 blur-2xl animate-pulse"></div>
                <div className="absolute w-24 h-24 rounded-full bg-pink-600/20 blur-xl animate-pulse" style={{ animationDelay: '500ms' }}></div>

                {/* Outer spinning ring - slower, purple */}
                <div className="absolute h-28 w-28 rounded-full border-2 border-transparent border-t-purple-500 border-b-purple-500 animate-[spin_3s_linear_infinite] opacity-80"></div>

                {/* Middle spinning ring - medium, pink, reverse */}
                <div className="absolute h-20 w-20 rounded-full border-2 border-transparent border-r-pink-500 border-l-pink-500 opacity-90" style={{ animation: 'spin 2s linear infinite reverse' }}></div>

                {/* Inner spinning ring - fast, mixed */}
                <div className="absolute h-12 w-12 rounded-full border-2 border-transparent border-t-purple-400 border-r-pink-400 animate-[spin_1s_linear_infinite]"></div>

                {/* Static center pulsing core */}
                <div className="absolute h-6 w-6 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 animate-pulse shadow-[0_0_20px_rgba(236,72,153,0.8)]"></div>
            </div>

            {/* Dynamic text with gradient */}
            <div className="relative flex flex-col items-center">
                <h2 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-[pulse_2s_ease-in-out_infinite]">
                    {text}
                </h2>

                {/* Bouncing loading dots underneath */}
                <div className="flex gap-2 mt-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500" style={{ animation: 'float 1s ease-in-out infinite' }}></div>
                    <div className="w-2 h-2 rounded-full bg-fuchsia-400" style={{ animation: 'float 1s ease-in-out infinite 0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-pink-500" style={{ animation: 'float 1s ease-in-out infinite 0.4s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
