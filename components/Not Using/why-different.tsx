export default function WhyDifferent() {
  return (
    <section className="py-20 space-y-10">

      <h2 className="text-3xl font-bold text-center">
        Why SoulSlates is Different
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border text-center">

          <thead>
            <tr>
              <th className="border p-3">Feature</th>
              <th className="border p-3">SoulSlates</th>
              <th className="border p-3">Other Platforms</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="border p-3">Creator Streak Rewards</td>
              <td className="border p-3">✔</td>
              <td className="border p-3">✘</td>
            </tr>

            <tr>
              <td className="border p-3">Weekly Leaderboards</td>
              <td className="border p-3">✔</td>
              <td className="border p-3">✘</td>
            </tr>

            <tr>
              <td className="border p-3">Engagement Rewards</td>
              <td className="border p-3">✔</td>
              <td className="border p-3">Limited</td>
            </tr>

          </tbody>

        </table>

      </div>

    </section>
  )
}