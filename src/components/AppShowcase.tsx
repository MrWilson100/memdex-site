"use client";

export default function AppShowcase() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/digital-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Overlay to blend with site colors */}
        <div className="absolute inset-0 bg-[#0a1628]/70" />
        {/* Right side gradient to hide grey box in image */}
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0a1628] to-transparent" />
      </div>

      {/* Wavy lines background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a3a6e" stopOpacity="0" />
              <stop offset="50%" stopColor="#1a3a6e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1a3a6e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="wave-line"
            d="M0,300 Q360,200 720,300 T1440,300"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
          />
          <path
            className="wave-line"
            style={{ animationDelay: "1s" }}
            d="M0,350 Q360,250 720,350 T1440,350"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
          />
          <path
            className="wave-line"
            style={{ animationDelay: "2s" }}
            d="M0,400 Q360,300 720,400 T1440,400"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
        <div className="perspective-grid w-full h-full" />
      </div>

      {/* Vertical lines behind phones */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex gap-8">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full bg-gradient-to-b from-[#4d8bff]/40 via-[#4d8bff]/20 to-transparent"
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Phone mockups */}
        <div className="flex items-center justify-center relative">
          {/* Left phone (partially visible) */}
          <div className="phone-mockup w-[220px] h-[450px] lg:w-[280px] lg:h-[570px] p-3 -mr-16 transform -rotate-3 opacity-70 hidden md:block">
            <div className="w-full h-full bg-[#0d2147] rounded-[32px] overflow-hidden relative">
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 py-2 text-white text-xs">
                <span>9:41</span>
                <div className="flex gap-1">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-4 pt-2">
                <h3 className="text-white text-lg font-bold mb-4">S...</h3>
                <div className="bg-[#1a3a6e]/50 rounded-xl p-3 mb-3">
                  <p className="text-[#a0c4ff] text-xs mb-2">Top Gainers</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500" />
                      <span className="text-white text-xs">Token 1</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-orange-500" />
                      <span className="text-white text-xs">Token 2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-500" />
                      <span className="text-white text-xs">Token 3</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 bg-[#1a3a6e]/30 rounded-lg p-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500" />
                    <span className="text-white text-sm">E...</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#1a3a6e]/30 rounded-lg p-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500" />
                    <span className="text-white text-sm">P...</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#1a3a6e]/30 rounded-lg p-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500" />
                    <span className="text-white text-sm">D...</span>
                  </div>
                </div>
              </div>
              {/* Bottom nav */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-around">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white">🏠</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1a3a6e] flex items-center justify-center">
                  <span className="text-white">⏱️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center phone (main) */}
          <div className="phone-mockup w-[280px] h-[570px] lg:w-[320px] lg:h-[650px] p-3 relative z-20 transform scale-100">
            <div className="w-full h-full bg-[#0d2147] rounded-[36px] overflow-hidden relative">
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 py-3 text-white text-xs">
                <span>9:41</span>
                <div className="w-24 h-6 bg-black rounded-full" /> {/* Notch */}
                <div className="flex gap-1">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* Header with glow */}
              <div className="relative px-4 pt-4 pb-8 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#4d8bff]/20 rounded-full blur-3xl" />
                <h2 className="text-[#4d8bff] text-xl font-bold relative z-10">The MemDex 100</h2>
                <p className="text-[#a0c4ff] text-xs mt-1 relative z-10">The Whole Market All at Once</p>
                <p className="text-white text-4xl font-bold mt-4 relative z-10">$11,111</p>
                <p className="text-[#a0c4ff] text-xs mt-1 relative z-10">Available Balance (USD)</p>

                {/* Mini chart */}
                <div className="mt-4 h-16 relative z-10">
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4d8bff" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#4d8bff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,50 Q20,45 40,40 T80,35 T120,45 T160,30 T200,25"
                      fill="none"
                      stroke="#4d8bff"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,50 Q20,45 40,40 T80,35 T120,45 T160,30 T200,25 L200,60 L0,60 Z"
                      fill="url(#chartGradient)"
                    />
                  </svg>
                </div>

                {/* Time filters */}
                <div className="flex justify-center gap-2 mt-2">
                  {["1H", "1D", "1W", "1M", "1Y"].map((time, i) => (
                    <button
                      key={time}
                      className={`px-3 py-1 rounded-full text-xs ${
                        i === 2 ? "bg-blue-600 text-white" : "text-[#a0c4ff]"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Asset list */}
              <div className="px-4 mt-2">
                <div className="flex justify-between text-[#a0c4ff] text-xs mb-2 px-2">
                  <span>Asset</span>
                  <span>Price</span>
                  <span>Holdings</span>
                </div>

                {/* Blue Chips */}
                <div className="bg-[#1a3a6e]/30 rounded-xl p-3 mb-2 border border-[#4d8bff]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-[#0d2147] rounded-lg flex items-center justify-center border border-[#4d8bff]/30">
                        <span className="text-[#4d8bff] text-lg">N</span>
                      </div>
                      <div>
                        <p className="text-white text-sm">$11.11</p>
                        <p className="text-[#a0c4ff] text-xs">Blue Chips</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">$111</p>
                      <div className="flex gap-1 mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-sm" />
                        <div className="w-2 h-2 bg-blue-500 rounded-sm" />
                        <div className="w-2 h-2 bg-blue-400/50 rounded-sm" />
                      </div>
                    </div>
                    <svg className="w-12 h-8 text-green-400" viewBox="0 0 50 20">
                      <path d="M0,15 L10,12 L20,14 L30,8 L40,10 L50,5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* MemeCoins */}
                <div className="bg-[#1a3a6e]/30 rounded-xl p-3 border border-green-500/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-[#0d2147] rounded-lg flex items-center justify-center border border-[#4d8bff]/30 overflow-hidden">
                        <span className="text-[10px] text-[#4d8bff]">MEMDEX100</span>
                      </div>
                      <div>
                        <p className="text-white text-sm">$1.11</p>
                        <p className="text-[#a0c4ff] text-xs">MemeCoins</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">$111</p>
                      <div className="flex gap-1 mt-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-sm" />
                        <div className="w-2 h-2 bg-orange-500 rounded-sm" />
                        <div className="w-2 h-2 bg-green-500 rounded-sm" />
                      </div>
                    </div>
                    <svg className="w-12 h-8 text-green-400" viewBox="0 0 50 20">
                      <path d="M0,18 L10,15 L20,12 L30,14 L40,8 L50,5" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom navigation */}
              <div className="absolute bottom-6 left-4 right-4 flex justify-around items-center">
                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white">⏱️</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center border-4 border-[#0d2147]">
                  <span className="text-white text-xl">⇅</span>
                </div>
                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white">AI</span>
                </div>
                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white">⚙️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right phone (partially visible) */}
          <div className="phone-mockup w-[220px] h-[450px] lg:w-[280px] lg:h-[570px] p-3 -ml-16 transform rotate-3 opacity-70 hidden md:block">
            <div className="w-full h-full bg-[#0d2147] rounded-[32px] overflow-hidden relative">
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 py-2 text-white text-xs">
                <span>9:41</span>
                <div className="flex gap-1">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-4 pt-2">
                <h3 className="text-white text-lg font-bold mb-2 text-right">...hts</h3>
                <div className="space-y-3">
                  <div className="bg-[#1a3a6e]/50 rounded-xl p-3 border border-blue-500/30">
                    <p className="text-white text-sm">...t intelligence</p>
                    <p className="text-[#a0c4ff] text-xs mt-1">Charts</p>
                  </div>
                  <div className="bg-[#1a3a6e]/50 rounded-xl p-3 border border-blue-500/30">
                    <p className="text-white text-sm">...riptions</p>
                    <p className="text-[#a0c4ff] text-xs mt-1">...for each</p>
                    <button className="mt-2 px-3 py-1 bg-blue-600 rounded-full text-white text-xs">See more</button>
                  </div>
                  <div className="bg-[#1a3a6e]/50 rounded-xl p-3 border border-blue-500/30">
                    <p className="text-white text-sm">...a</p>
                    <p className="text-white text-sm">...ment</p>
                    <p className="text-[#a0c4ff] text-xs mt-1">...sentiment</p>
                    <p className="text-[#a0c4ff] text-xs">...feeds</p>
                    <button className="mt-2 px-3 py-1 bg-blue-600 rounded-full text-white text-xs">See more</button>
                  </div>
                  <div className="bg-[#1a3a6e]/50 rounded-xl p-3 border border-green-500/30">
                    <p className="text-white text-sm">...Analysis</p>
                    <p className="text-[#a0c4ff] text-xs mt-1">...chart</p>
                    <p className="text-[#a0c4ff] text-xs">...en analysis</p>
                    <button className="mt-2 px-3 py-1 bg-green-600 rounded-full text-white text-xs">See more</button>
                  </div>
                </div>
              </div>
              {/* Bottom nav */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-sm">AI</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white">⚙️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
