export default function LeaderboardPreview() {
  return (
    <section className="py-20">

      <h2 className="text-3xl font-bold text-center mb-10">
        Weekly Creator Leaderboard
      </h2>

      <div className="max-w-xl mx-auto border rounded-lg">

        <div className="flex justify-between p-4 border-b">
          <span>#1 @rahul</span>
          <span>₹15000</span>
        </div>

        <div className="flex justify-between p-4 border-b">
          <span>#2 @anita</span>
          <span>₹8000</span>
        </div>

        <div className="flex justify-between p-4">
          <span>#3 @vijay</span>
          <span>₹4000</span>
        </div>

      </div>

    </section>
  )
}