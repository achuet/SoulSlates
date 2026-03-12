
export default function CreatorStreaks(){
 return(
  <main className="py-16 space-y-10">

   <h1 className="text-4xl font-bold">Creator Streak System</h1>

   <p className="text-gray-300">
    Post at least one public video daily to maintain your streak.
   </p>

   <table className="w-full border">

    <tbody>

     <tr><td className="border p-3">7 Days</td><td className="border p-3">1 Day Profile Boost</td></tr>
     <tr><td className="border p-3">30 Days</td><td className="border p-3">100 Coins + 3 Day Boost</td></tr>
     <tr><td className="border p-3">6 Months</td><td className="border p-3">200 Coins + 7 Day Boost</td></tr>
     <tr><td className="border p-3">1 Year</td><td className="border p-3">500 Coins + 30 Day Boost</td></tr>

    </tbody>

   </table>

  </main>
 )
}
