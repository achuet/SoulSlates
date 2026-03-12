export const metadata = {
  title: "Platform Guide & FAQs",
  description: "Learn how SoulSlates works. Read about our Viewer & Creator Streaks, Point System, Referral bonuses, and KYC withdrawal processes.",
}

export default function FAQ() {
  return (
    <main className="py-20 px-4 max-w-4xl mx-auto relative z-10">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-glow text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          Platform Guide & FAQs
        </h1>
        <p className="text-gray-400">Everything you need to know about Streaks, Points, and Leaderboards.</p>
      </div>

      <div className="space-y-12">
        
        {/* VIEWER STREAK SYSTEM */}
        <section className="glass-card p-8 md:p-10 border-t-2 border-t-cyan-400">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">👀</span>
            <h2 className="text-3xl font-bold text-white">Viewer Streak System</h2>
          </div>
          
          <ul className="list-disc pl-5 space-y-3 text-gray-300 mb-8">
            <li><strong className="text-white">Requirement:</strong> View at least 50 <em>unique</em> posts per day.</li>
            <li><strong className="text-white">Validation:</strong> Minimum watch time ≥5 seconds OR ≥40% of the video duration.</li>
            <li><strong className="text-white">Grace Period (Streak Freeze):</strong>
              <ul className="list-circle pl-5 mt-2 space-y-1">
                <li>Earns 1 Grace Day every 7 consecutive days of viewing.</li>
                <li className="text-cyan-300 italic">Grace days are automatically consumed if the viewer fails to reach 50 views, protecting the streak.</li>
              </ul>
            </li>
            <li><strong className="text-white">Reset:</strong> Missing a day (without Grace days) resets the view streak to 0.</li>
          </ul>

          <h3 className="text-xl font-bold text-cyan-300 mb-4">Rewards Schedule (Viewer)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="p-3 font-medium">Streak Milestone</th>
                  <th className="p-3 font-medium">Reward</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                <tr className="border-b border-white/5 bg-white/5"><td className="p-3">7 Days</td><td className="p-3 font-bold text-cyan-400">5 Coins</td></tr>
                <tr className="border-b border-white/5"><td className="p-3">30 Days</td><td className="p-3 font-bold text-cyan-400">20 Coins</td></tr>
                <tr className="border-b border-white/5 bg-white/5"><td className="p-3">90 Days</td><td className="p-3 font-bold text-cyan-400">50 Coins</td></tr>
                <tr className="border-b border-white/5"><td className="p-3">180 Days</td><td className="p-3 font-bold text-cyan-400">100 Coins</td></tr>
                <tr className="border-b border-white/5 bg-white/5"><td className="p-3">1 Year</td><td className="p-3 font-bold text-cyan-400">300 Coins</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CREATOR STREAK SYSTEM */}
        <section className="glass-card p-8 md:p-10 border-t-2 border-t-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🎬</span>
            <h2 className="text-3xl font-bold text-white">Creator Streak System</h2>
          </div>
          
          <ul className="list-disc pl-5 space-y-3 text-gray-300 mb-8">
            <li><strong className="text-white">Requirement:</strong> Post at least 1 public video per day.</li>
            <li><strong className="text-white">Grace Period (Streak Freeze):</strong>
              <ul className="list-circle pl-5 mt-2 space-y-1">
                <li>Earns 3 Grace Days every 30 consecutive days.</li>
                <li>Earns 7 Grace Days every 1 Year.</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-purple-400 mb-4">Rewards Schedule (Creator)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="p-3 font-medium">Streak Milestone</th>
                  <th className="p-3 font-medium">Reward</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                <tr className="border-b border-white/5 bg-white/5"><td className="p-3">7 Days</td><td className="p-3 font-bold text-purple-400">1 Day Profile Boost</td></tr>
                <tr className="border-b border-white/5"><td className="p-3">Every 30 Days</td><td className="p-3 font-bold text-purple-400">3 Days Profile Boost</td></tr>
                <tr className="border-b border-white/5 bg-white/5"><td className="p-3">30 Days</td><td className="p-3 font-bold text-purple-400">+100 Coins</td></tr>
                <tr className="border-b border-white/5"><td className="p-3">6 Months</td><td className="p-3 font-bold text-purple-400">7 Days Boost + 200 Coins</td></tr>
                <tr className="border-b border-white/5 bg-white/5"><td className="p-3">1 Year</td><td className="p-3 font-bold text-purple-400">30 Days Boost + 500 Coins</td></tr>
                <tr className="border-b border-white/5"><td className="p-3">Every additional year</td><td className="p-3 font-bold text-purple-400">30 Days Boost + 1000 Coins</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CREATOR LEADERBOARDS */}
        <section className="glass-card p-8 md:p-10 border-t-2 border-t-pink-500">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏆</span>
            <h2 className="text-3xl font-bold text-white">Creator Leaderboards</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-4">Point System</h3>
              <p className="text-sm text-gray-400 mb-4">Only <strong className="text-white">unique user</strong> interactions count per post.</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Upload Post</span> <span className="font-bold text-white">10 Points</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>10 Likes</span> <span className="font-bold text-white">10 Points</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Comment</span> <span className="font-bold text-white">3 Points</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Share</span> <span className="font-bold text-white">10 Points</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>100 Views</span> <span className="font-bold text-white">5 Points</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>1 New Follower</span> <span className="font-bold text-white">15 Points</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-4">Payouts</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400">
                      <th className="p-2 font-medium">Rank</th>
                      <th className="p-2 font-medium">Weekly</th>
                      <th className="p-2 font-medium">Monthly</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-200">
                    <tr className="border-b border-white/5 bg-white/5">
                      <td className="p-2 font-bold text-yellow-400">1st</td><td className="p-2 font-bold">1000 Coins</td><td className="p-2 font-bold">5000 Coins</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-2 font-bold text-gray-300">2nd</td><td className="p-2">700 Coins</td><td className="p-2">3500 Coins</td>
                    </tr>
                    <tr className="border-b border-white/5 bg-white/5">
                      <td className="p-2 font-bold text-orange-400">3rd</td><td className="p-2">500 Coins</td><td className="p-2">2500 Coins</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-2">4-10</td><td className="p-2">200 Coins</td><td className="p-2">1000 Coins</td>
                    </tr>
                    <tr className="border-b border-white/5 bg-white/5">
                      <td className="p-2">11-25</td><td className="p-2">100 Coins</td><td className="p-2">500 Coins</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-2">26-50</td><td className="p-2">50 Coins</td><td className="p-2">250 Coins</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* REFERRAL PROGRAM */}
        <section className="glass-card p-8 md:p-10 border-t-2 border-t-green-500 shadow-[0_0_30px_rgba(74,222,128,0.1)]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🤝</span>
            <h2 className="text-3xl font-bold text-white">Refer & Earn Program</h2>
          </div>
          
          <p className="text-gray-300 mb-6">Invite friends to SoulSlates and earn Coins for every successful referral. There is <strong>no limit</strong> to how many people you can refer!</p>

          <h3 className="text-xl font-bold text-green-400 mb-4">Rewards Structure</h3>
          <ul className="list-disc pl-5 space-y-3 text-gray-300 mb-8">
            <li><strong className="text-white">Instant Bonus:</strong> Get <strong className="text-green-400">10 Coins</strong> immediately when your friend signs up using your link.</li>
            <li><strong className="text-white">Activity Bonus:</strong> Get an additional <strong className="text-cyan-400">15 Coins</strong> after your referred friend completes 7 days of platform activity.</li>
          </ul>

          <div className="bg-red-900/20 border border-red-500/30 p-5 rounded-xl">
            <h3 className="text-lg font-bold text-red-400 mb-2">⚠️ Referral Verification & Anti-Fraud</h3>
            <p className="text-sm text-gray-300">
              To ensure fair play and prevent fake accounts, a referral is only marked as successful if the new user registers with a <strong>unique Email + unique Phone Number + unique Device ID</strong>. We securely collect and verify this data to prevent abuse. If the same device is used for multiple sign-ups, the referral bonus will not be credited.
            </p>
          </div>
        </section>
        {/* WITHDRAWALS, KYC & TAXES */}
        <section className="glass-card p-8 md:p-10 border-t-2 border-t-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🏦</span>
            <h2 className="text-3xl font-bold text-white">Withdrawals, KYC & Taxes</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">When can I withdraw my earnings?</h3>
              <div className="bg-black/40 border border-yellow-500/30 p-4 rounded-xl mt-2">
                <p className="text-gray-300 mb-2">To unlock the ability to withdraw your earnings to your bank account, you must meet two conditions:</p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-300 space-y-1">
                  <li>Reach the minimum account balance of <strong className="text-yellow-400 text-base">500 Coins (₹500)</strong>.</li>
                  <li>Complete at least <strong className="text-yellow-400 text-base">7 days of activity</strong> on the platform.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">What is required to process a withdrawal?</h3>
              <div className="bg-black/40 border border-yellow-500/30 p-4 rounded-xl mt-2">
                <p className="text-gray-300 mb-2">To comply with government regulations, <strong className="text-white">users must complete identity verification (KYC) before any withdrawal requests are processed.</strong></p>
                <p className="text-gray-400 text-sm">You will need to provide:</p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-300">
                  <li>A valid <strong>PAN Card</strong></li>
                  <li><strong>UPI Verification</strong> (The bank account name must match the PAN name)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Do I have to pay taxes on my earnings?</h3>
              <p className="text-gray-300">Yes. Users are responsible for declaring income earned through SoulSlates rewards under applicable tax laws. Please note that Indian law requires Tax Deducted at Source (TDS) in some cases, which may be automatically deducted from your payout if you cross the statutory threshold.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-400 mb-2">Anti-Fraud & Suspensions</h3>
              <p className="text-gray-300">SoulSlates actively monitors engagement. We reserve the right to suspend accounts and forfeit all earnings if artificial engagement, bot activity, view-farming, or fraudulent referrals are detected. Play fair, and earn big!</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}