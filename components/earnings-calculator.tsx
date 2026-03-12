'use client'
import { useState } from 'react'

export default function EarningsCalculator() {
  const [views, setViews] = useState(0)
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState(0)

  // Keep your original math formula
  const reward = Math.round(views * 0.01 + likes * 0.1 + comments * 0.1)

  return (
    <div className="glass-card p-8 md:p-10 relative overflow-hidden w-full max-w-2xl mx-auto shadow-[0_0_40px_rgba(0,210,255,0.1)]">
      
      {/* Background ambient glow inside the card */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Interactive Earnings Calculator
          </h2>
          <p className="text-gray-400 mt-2 text-sm">See how your engagement translates into real Coins.</p>
        </div>

        <div className="space-y-5">
          {/* Views Input */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Total Views</label>
            <input 
              type="number" 
              placeholder="e.g. 10000"
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white text-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-gray-600"
              onChange={e => setViews(Number(e.target.value))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Likes Input */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Total Likes</label>
              <input 
                type="number" 
                placeholder="e.g. 500"
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white text-lg focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all placeholder-gray-600"
                onChange={e => setLikes(Number(e.target.value))}
              />
            </div>

            {/* Comments Input */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Comments</label>
              <input 
                type="number" 
                placeholder="e.g. 50"
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white text-lg focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-all placeholder-gray-600"
                onChange={e => setComments(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Glowing Output */}
        <div className="mt-8 p-6 bg-gradient-to-br from-purple-900/50 to-cyan-900/30 border border-purple-500/30 rounded-2xl text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <p className="text-gray-300 font-medium mb-1">Estimated Reward</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl">🪙</span>
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 drop-shadow-[0_0_15px_rgba(0,210,255,0.5)]">
              {reward} Coins
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-3">(Equivalent to ₹{reward})</p>
        </div>
      </div>
    </div>
  )
}