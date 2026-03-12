export default function Rewards() {
  return (
    <section className="py-20 text-center space-y-10">

      <h2 className="text-3xl font-bold">
        Earn Rewards for Engagement
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto">
        Views, likes and comments increase your creator score.
        Top creators earn rewards every week.
      </p>

      <div className="border p-8 rounded-xl max-w-md mx-auto">

        <h3 className="text-xl font-bold mb-4">
          Example Creator Performance
        </h3>

        <p>100K views</p>
        <p>5K likes</p>
        <p>500 comments</p>
        <p>7 day streak</p>

        <p className="text-2xl font-bold mt-4">
          Estimated Reward: ₹2800
        </p>

      </div>

      <a
        href="/calculator"
        className="bg-purple-600 px-8 py-3 rounded-lg"
      >
        Try Earnings Calculator
      </a>

    </section>
  )
}