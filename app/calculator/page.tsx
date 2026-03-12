import EarningsCalculator from "../../components/earnings-calculator";

export const metadata = {
  title: "Earnings Calculator",
  description: "Calculate your estimated earnings on SoulSlates based on your video views, likes, and comments. See how engagement turns into real money.",
}

export default function CalculatorPage() {
  return (
    <main className="py-20 px-4 min-h-[80vh] flex flex-col items-center justify-center relative">
      
      {/* Deep space background accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[150px] -z-10 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[150px] -z-10 rounded-full"></div>

      <div className="text-center mb-10 space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-glow text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Creator Earnings
        </h1>
        <p className="text-gray-400 text-lg">
          Use the calculator below to estimate your rewards based on our current engagement metrics.
        </p>
      </div>

      <EarningsCalculator />

    </main>
  )
}