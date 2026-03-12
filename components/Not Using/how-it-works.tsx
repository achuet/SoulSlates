export default function HowItWorks() {
  return (
    <section className="py-20 space-y-12">

      <h2 className="text-3xl font-bold text-center">
        How SoulSlates Works
      </h2>

      <div className="grid md:grid-cols-3 gap-10 text-center">

        <div>
          <h3 className="text-xl font-bold">Post Content</h3>
          <p className="text-gray-400">
            Share photos, videos or ideas with the community.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Get Engagement</h3>
          <p className="text-gray-400">
            Likes, views and comments increase your score.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">Earn Rewards</h3>
          <p className="text-gray-400">
            Top creators earn leaderboard rewards and streak bonuses.
          </p>
        </div>

      </div>

    </section>
  )
}