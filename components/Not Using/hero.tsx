export default function Hero() {
  return (
    <section className="text-center py-24 space-y-6">

      <h1 className="text-5xl font-bold">
        Share Content. Earn Rewards.
      </h1>

      <p className="text-gray-300 max-w-2xl mx-auto text-lg">
        SoulSlates is an Indian creator platform where users earn ₹
        through engagement, creator streaks and weekly leaderboards.
      </p>

      <div className="space-x-4 pt-6">
        <a
          href="/download"
          className="bg-blue-600 px-8 py-3 rounded-lg"
        >
          Download App
        </a>

        <a
          href="/features"
          className="border px-8 py-3 rounded-lg"
        >
          Explore Features
        </a>
      </div>

      <div className="pt-8 text-sm text-gray-400">
        ✓ Earn from engagement &nbsp;
        ✓ Weekly rewards &nbsp;
        ✓ Built for Indian creators
      </div>

    </section>
  )
}