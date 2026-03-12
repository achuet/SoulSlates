
export default function ViewerStreaks(){
 return(
  <main className="py-16 space-y-10">

   <h1 className="text-4xl font-bold">Viewer Streak System</h1>

   <p className="text-gray-300">
    Watch at least 50 unique posts daily to maintain your streak.
   </p>

   <h2 className="text-2xl font-bold">Rewards</h2>

   <table className="w-full border">
    <tbody>

     <tr><td className="border p-3">7 Days</td><td className="border p-3">5 Coins</td></tr>
     <tr><td className="border p-3">30 Days</td><td className="border p-3">20 Coins</td></tr>
     <tr><td className="border p-3">90 Days</td><td className="border p-3">50 Coins</td></tr>
     <tr><td className="border p-3">180 Days</td><td className="border p-3">100 Coins</td></tr>
     <tr><td className="border p-3">1 Year</td><td className="border p-3">300 Coins</td></tr>

    </tbody>
   </table>

  </main>
 )
}
