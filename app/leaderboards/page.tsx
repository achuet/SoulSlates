export const metadata = {
  title: "Creator Leaderboards & Payouts",
  description: "Check out the weekly and monthly leaderboards on SoulSlates. See the prize pools and how you can climb the ranks to earn up to 5000 Coins.",
}

export default function LeaderboardsPage() {
  return (
    <main className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/20 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <div className="text-center space-y-4 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-glow text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Creator Leaderboards
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          The ultimate breakdown of our prize pools. Climb the ranks by generating unique engagement on your posts and cash out real rewards.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* WEEKLY LEADERBOARD CARD */}
        <section className="glass-card p-8 md:p-10 border-t-2 border-t-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.15)] relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/20 blur-[50px] rounded-full"></div>
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <span className="text-4xl">⚡</span>
            <div>
              <h2 className="text-3xl font-bold text-white">Weekly Rewards</h2>
              <p className="text-purple-300 text-sm">Resets every Monday at 12:00 AM</p>
            </div>
          </div>

          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-purple-500/30 text-gray-400 text-sm uppercase tracking-wider">
                  <th className="pb-4 pl-2 font-medium">Rank</th>
                  <th className="pb-4 pr-2 font-medium text-right">Prize (Coins)</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                <tr className="border-b border-white/5 bg-gradient-to-r from-purple-500/20 to-transparent">
                  <td className="p-4 font-black text-2xl text-yellow-400 flex items-center gap-2">🥇 1st</td>
                  <td className="p-4 font-black text-xl text-right text-glow">1000</td>
                </tr>
                <tr className="border-b border-white/5 bg-white/5">
                  <td className="p-4 font-bold text-xl text-gray-300 flex items-center gap-2">🥈 2nd</td>
                  <td className="p-4 font-bold text-lg text-right text-purple-300">700</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-bold text-xl text-orange-400 flex items-center gap-2">🥉 3rd</td>
                  <td className="p-4 font-bold text-lg text-right text-purple-300">500</td>
                </tr>
                <tr className="border-b border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <td className="p-4 font-medium text-gray-300">Ranks 4 - 10</td>
                  <td className="p-4 font-medium text-right text-cyan-300">200</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/10 transition-colors">
                  <td className="p-4 font-medium text-gray-300">Ranks 11 - 25</td>
                  <td className="p-4 font-medium text-right text-cyan-300">100</td>
                </tr>
                <tr className="hover:bg-white/10 transition-colors">
                  <td className="p-4 font-medium text-gray-400">Ranks 26 - 50</td>
                  <td className="p-4 font-medium text-right text-cyan-300/70">50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MONTHLY LEADERBOARD CARD */}
        <section className="glass-card p-8 md:p-10 border-t-2 border-t-pink-500 shadow-[0_0_40px_rgba(236,72,153,0.15)] relative overflow-hidden">
          <div className="absolute -left-20 -top-20 w-40 h-40 bg-pink-500/20 blur-[50px] rounded-full"></div>
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <span className="text-4xl">🏆</span>
            <div>
              <h2 className="text-3xl font-bold text-white">Monthly Rewards</h2>
              <p className="text-pink-300 text-sm">Massive jackpots at the end of the month</p>
            </div>
          </div>

          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-pink-500/30 text-gray-400 text-sm uppercase tracking-wider">
                  <th className="pb-4 pl-2 font-medium">Rank</th>
                  <th className="pb-4 pr-2 font-medium text-right">Prize (Coins)</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                <tr className="border-b border-white/5 bg-gradient-to-r from-pink-500/20 to-orange-500/10">
                  <td className="p-4 font-black text-2xl text-yellow-400 flex items-center gap-2">👑 1st</td>
                  <td className="p-4 font-black text-2xl text-right text-white text-glow">5000</td>
                </tr>
                <tr className="border-b border-white/5 bg-white/5">
                  <td className="p-4 font-bold text-xl text-gray-300 flex items-center gap-2">🥈 2nd</td>
                  <td className="p-4 font-bold text-lg text-right text-pink-300">3500</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 font-bold text-xl text-orange-400 flex items-center gap-2">🥉 3rd</td>
                  <td className="p-4 font-bold text-lg text-right text-pink-300">2500</td>
                </tr>
                <tr className="border-b border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <td className="p-4 font-medium text-gray-300">Ranks 4 - 10</td>
                  <td className="p-4 font-medium text-right text-orange-300">1000</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/10 transition-colors">
                  <td className="p-4 font-medium text-gray-300">Ranks 11 - 25</td>
                  <td className="p-4 font-medium text-right text-orange-300">500</td>
                </tr>
                <tr className="hover:bg-white/10 transition-colors">
                  <td className="p-4 font-medium text-gray-400">Ranks 26 - 50</td>
                  <td className="p-4 font-medium text-right text-orange-300/70">250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400">Want to know how points are calculated? <a href="/faq" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors">Check out the FAQ for our Point System rules.</a></p>
      </div>

    </main>
  )
}