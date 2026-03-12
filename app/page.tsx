import EarningsCalculator from "../components/earnings-calculator";

export default function Home() {
  return (
    <main className="pb-20 space-y-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-10 relative z-10">
        <div className="flex-1 space-y-6 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-glow">
            Your Summer App For Creators<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Coming Soon.
            </span>
          </h1>
          <p className="text-gray-300 max-w-lg text-lg mx-auto md:mx-0">
            SoulSlates is India's next-gen platform where engagement turns into real Coins. Share content, hit the leaderboards, and get rewarded.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <a href="/download" className="glass-card flex items-center gap-3 px-6 py-3 hover:bg-white/10 transition-colors">
               <span className="text-xl">🍏</span> 
               <div className="text-left leading-tight">
                 <span className="text-[10px] text-gray-400">Download on the</span><br/>
                 <span className="font-bold text-sm">App Store</span>
               </div>
            </a>
            <a href="/download" className="glass-card flex items-center gap-3 px-6 py-3 hover:bg-white/10 transition-colors">
               <span className="text-xl">▶️</span> 
               <div className="text-left leading-tight">
                 <span className="text-[10px] text-gray-400">Get it on</span><br/>
                 <span className="font-bold text-sm">Google Play</span>
               </div>
            </a>
          </div>
        </div>

        {/* Floating App Mockup */}
<div className="flex-1 relative flex justify-center w-full max-w-lg mx-auto md:max-w-none animate-float">
          {/* Intense background glow behind the image to make it pop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 to-purple-600/40 blur-[120px] rounded-full z-0 pointer-events-none"></div>
          <img 
            src="/SoulSlates-Hero.webp" 
            alt="SoulSlates India Creator Platform" 
            className="relative z-10 w-full h-auto object-contain rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(142,45,226,0.4)]"
          />
        </div>
      </section>

      {/* NEW: PLATFORM USPs BENTO GRID */}
      <section className="relative py-10 z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Why SoulSlates is Different
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Built from the ground up to fix what's broken in social media. Creator-first monetization, ultimate privacy, and algorithms you actually control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
          
          {/* Card 1: Smart For You Feed (Spans 2 columns) */}
          <div className="glass-card md:col-span-2 p-8 relative overflow-hidden group border-t-2 border-t-cyan-400 hover:-translate-y-1 transition-transform">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/20 blur-[50px] rounded-full group-hover:bg-cyan-400/30"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="text-3xl mb-2 block">🧠</span>
                <h3 className="text-2xl font-bold text-cyan-300">Smart "For You" Feed</h3>
              </div>
              <p className="text-gray-300">
                Total feed control. You dictate the algorithm. Quickly set exactly what you want to see, and <strong className="text-white">no other content will appear</strong>. Zero distractions.
              </p>
            </div>
          </div>

          {/* Card 2: Discover Rising Creators (Spans 2 columns) */}
          <div className="glass-card md:col-span-2 p-8 relative overflow-hidden group border-t-2 border-t-purple-500 hover:-translate-y-1 transition-transform">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-purple-500/20 blur-[50px] rounded-full group-hover:bg-purple-400/30"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="text-3xl mb-2 block">🌟</span>
                <h3 className="text-2xl font-bold text-purple-400">Discover Rising Creators</h3>
              </div>
              <p className="text-gray-300">
                Fair discovery for everyone. We actively push trending accounts and viral content from <strong className="text-white">smaller creators</strong>, ensuring talent gets noticed from day one.
              </p>
            </div>
          </div>

          {/* Card 3: Privacy First Design */}
          <div className="glass-card md:col-span-2 lg:col-span-1 p-6 relative overflow-hidden group border-t-2 border-t-pink-500 hover:-translate-y-1 transition-transform">
            <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <span className="text-3xl mb-4 block">🔐</span>
              <h3 className="text-xl font-bold text-pink-400 mb-2">Privacy First</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• E2E Encrypted Messaging</li>
                <li>• Secure Verification</li>
                <li>• Strict Anti-Spam</li>
                <li>• Fake Engagement Blocks</li>
              </ul>
            </div>
          </div>

          {/* Card 4: Home Tab Organics */}
          <div className="glass-card md:col-span-2 lg:col-span-1 p-6 relative overflow-hidden group border-t-2 border-t-yellow-400 hover:-translate-y-1 transition-transform flex flex-col justify-center">
            <div className="relative z-10 text-center">
              <span className="text-3xl mb-2 block">🏠</span>
              <h3 className="text-xl font-bold text-yellow-300 mb-2">Home Tab</h3>
              <p className="text-sm text-gray-300">
                The pulse of the platform. A standard feed showing posts from creators you actually follow, plus organic trending content.
              </p>
            </div>
          </div>

          {/* Card 5: Transparent Rewards */}
          <div className="glass-card md:col-span-4 lg:col-span-2 p-6 relative overflow-hidden group border-t-2 border-t-green-400 hover:-translate-y-1 transition-transform flex items-center">
            <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-green-500/20 blur-[50px] rounded-full"></div>
            <div className="relative z-10">
              <span className="text-3xl mb-2 block">💸</span>
              <h3 className="text-xl font-bold text-green-400 mb-2">Transparent & Fair Rewards</h3>
              <p className="text-sm text-gray-300">
                Unlike platforms that hide their payouts, SoulSlates offers transparent, creator-first monetization where every view, like, and comment translates to real value.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FLYING CARDS SECTION: Economy & Leaderboards */}
      <section className="relative py-10">
        <div className="text-center mb-16 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">The Creator Economy</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Climb the ranks, maintain your streaks, and turn your creativity into instant rewards.</p>
        </div>

        {/* Background Glows for the Flying Cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full z-0"></div>

        {/* Flying Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto px-4">
          
          {/* Card 1: Economy Base (Floats Normally) */}
          <div className="glass-card p-8 animate-float flex flex-col justify-center text-center space-y-4 md:mt-12 border-t-2 border-t-cyan-400">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-2xl shadow-[0_0_20px_#00d2ff]">
              🪙
            </div>
            <h3 className="text-2xl font-bold">1 Coin = ₹1</h3>
            <p className="text-gray-300 text-sm">
              Simple, transparent earnings. Reach a minimum of 500 Coins (₹500) to withdraw instantly.
            </p>
          </div>

          {/* Card 2: Weekly Leaderboard */}
          <div className="glass-card p-8 animate-float delay-2000 md:-mt-10 border-t-2 border-t-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Weekly Top Payouts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-purple-500/30">
                <span className="font-bold text-lg">🥇 1st Place</span>
                <span className="text-neon-cyan font-bold">1000 Coins</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="font-bold text-gray-300">🥈 2nd Place</span>
                <span className="text-purple-300 font-bold">700 Coins</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="font-bold text-gray-400">🥉 3rd Place</span>
                <span className="text-purple-300 font-bold">500 Coins</span>
              </div>
            </div>
          </div>

          {/* Card 3: Monthly Leaderboard */}
          <div className="glass-card p-8 animate-float delay-4000 flex flex-col justify-center md:mt-16 border-t-2 border-t-pink-500">
            <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Monthly Jackpots</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-lg border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                <span className="font-bold text-xl">🏆 1st</span>
                <span className="text-white font-black text-xl text-glow">5000 Coins</span>
              </div>
              <div className="flex justify-between items-center px-4 py-2 border-b border-white/10">
                <span className="text-gray-300">2nd Place</span>
                <span className="text-orange-300 font-bold">3500 Coins</span>
              </div>
              <div className="flex justify-between items-center px-4 py-2 border-b border-white/10">
                <span className="text-gray-300">3rd Place</span>
                <span className="text-orange-300 font-bold">2500 Coins</span>
              </div>
            </div>
          </div>

        </div>
        {/* NEW: Tiny link to the full Leaderboards page */}
        <div className="text-center mt-10 relative z-20">
          <a 
            href="/leaderboards" 
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,210,255,0.8)] transition-all"
          >
            See full ranking and prize breakdown <span>→</span>
          </a>
        </div>
      </section>

      {/* THE POWER OF STREAKS SECTION */}
      <section className="py-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-glow mb-4">The Power of Streaks</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Consistency pays off. Maintain your daily habits to unlock massive Coin bonuses, profile boosts, and Grace Days to protect your progress.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          
          {/* Viewer Streaks Highlight */}
          <div className="glass-card p-8 border border-cyan-500/30 hover:border-cyan-400/80 transition-all relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full group-hover:bg-cyan-400/30 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">👀</span>
                <h3 className="text-2xl font-bold text-cyan-300">Viewer Streaks</h3>
              </div>
              <p className="text-gray-300 mb-6">Watch 50 unique posts daily. Don't worry about missing a day—earn a <strong className="text-cyan-400">Grace Day</strong> every 7 days!</p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                  <span className="text-sm font-medium">30 Day Milestone</span>
                  <span className="font-bold text-cyan-400">20 Coins</span>
                </div>
                <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                  <span className="text-sm font-medium">180 Day Milestone</span>
                  <span className="font-bold text-cyan-400">100 Coins</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-3 rounded-lg border border-cyan-500/30">
                  <span className="text-sm font-bold text-white">1 Year Master</span>
                  <span className="font-bold text-cyan-300 text-glow">300 Coins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Creator Streaks Highlight */}
          <div className="glass-card p-8 border border-purple-500/30 hover:border-purple-400/80 transition-all relative overflow-hidden group">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full group-hover:bg-purple-400/30 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🎬</span>
                <h3 className="text-2xl font-bold text-purple-400">Creator Streaks</h3>
              </div>
              <p className="text-gray-300 mb-6">Post 1 public video daily. Stay consistent and earn <strong className="text-purple-400">3 Grace Days</strong> every 30 days to freeze your streak.</p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                  <span className="text-sm font-medium">30 Day Milestone</span>
                  <span className="font-bold text-purple-400">100 Coins + Boost</span>
                </div>
                <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                  <span className="text-sm font-medium">6 Month Milestone</span>
                  <span className="font-bold text-purple-400">200 Coins + 7D Boost</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-3 rounded-lg border border-purple-500/30">
                  <span className="text-sm font-bold text-white">1 Year Legend</span>
                  <span className="font-bold text-pink-300 text-glow">500 Coins + 30D Boost</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="text-center mt-8">
           <a href="/faq" className="text-sm text-gray-400 hover:text-white underline underline-offset-4 transition-colors">See full breakdown and rules in the FAQ</a>
        </div>
      </section>

      {/* REFER AND EARN BANNER */}
      <section className="py-10 relative z-10 max-w-5xl mx-auto px-4">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden group border-t-2 border-t-green-400 shadow-[0_0_40px_rgba(74,222,128,0.15)] rounded-3xl hover:-translate-y-1 transition-transform">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-green-400/30 transition-all"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="text-4xl">🤝</span>
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  Refer & Earn Unlimited
                </h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Invite your friends and fellow creators. There is <strong className="text-white">no limit</strong> on how many people you can refer!
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="bg-black/50 border border-green-500/30 px-4 py-3 rounded-xl flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <div className="text-left">
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Instantly</p>
                    <p className="font-bold text-green-400">10 Coins</p>
                  </div>
                </div>
                <div className="text-gray-500 font-bold">+</div>
                <div className="bg-black/50 border border-cyan-500/30 px-4 py-3 rounded-xl flex items-center gap-3">
                  <span className="text-2xl">🔥</span>
                  <div className="text-left">
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">After 7 Days Activity</p>
                    <p className="font-bold text-cyan-400">15 Coins</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto">
               <a href="/download" className="block w-full text-center bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] hover:-translate-y-1">
                 Get Invite Link
               </a>
               <p className="text-center text-xs text-gray-500 mt-3">*Subject to unique device & account verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR SECTION */}
      <section className="relative py-20 z-10 px-4">
        <div className="absolute inset-0 bg-purple-900/10 blur-[100px] -z-10"></div>
        <EarningsCalculator />
      </section>

      {/* Massive CTA */}
      <section className="mx-4 glass-card p-12 text-center rounded-3xl border border-purple-500/30 shadow-[0_0_40px_rgba(142,45,226,0.15)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Creator Revolution!</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Don't miss out on this week's leaderboard pool. Download the app, post your first slate, and start earning today.</p>
          <a href="/download" className="btn-gradient px-12 py-4 rounded-xl text-lg font-bold inline-block">
            Get Started Now
          </a>
        </div>
      </section>

    </main>
  )
}