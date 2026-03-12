import type { Metadata } from 'next'
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "SoulSlates - India's Creator Rewards Platform",
    template: "%s | SoulSlates"
  },
  description: "India's next-gen platform where engagement turns into real Coins. Share content, maintain viewer & creator streaks, hit the leaderboards, and get rewarded.",
  keywords: [
    "SoulSlates", "creator rewards", "monetize short videos India", 
    "earn coins social media", "creator economy India", "rising creators app", 
    "video sharing app India", "make money online creators"
  ],
  authors: [{ name: "SoulSlates Team" }],
  creator: "SoulSlates",
  openGraph: {
    title: "SoulSlates - India's Creator Rewards Platform",
    description: "Join the creator revolution in India. Earn real rewards for your content and engagement.",
    url: 'https://soulslates.com', // Replace with your actual domain
    siteName: 'SoulSlates',
    images: [
      {
        url: '/hero-image.jpg', // Uses the amazing hero image we generated
        width: 1200,
        height: 630,
        alt: 'SoulSlates Creator Platform',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SoulSlates - Creator Rewards Platform",
    description: "Turn your engagement into real Coins. Climb the ranks and earn.",
    images: ['/hero-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        {/* Background glow effects */}
        <div className="absolute top-0 left-0 w-full h-96 bg-cyan-500/10 blur-[150px] -z-10 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-full h-96 bg-purple-600/10 blur-[150px] -z-10 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col min-h-screen">
          
          {/* Header */}
          <header className="flex items-center justify-between py-4 mt-4 mb-10 px-6 glass-card rounded-2xl sticky top-4 z-50">
            <a href="/" className="flex items-center gap-3">
              <img src="/SoulSlates Logo.jpg" alt="SoulSlates Logo" className="w-10 h-10 rounded-lg object-cover" />
              <h1 className="text-2xl font-bold tracking-wide text-white">SoulSlates</h1>
            </a>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-200">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <a href="/leaderboards" className="hover:text-white transition-colors">Leaderboards</a>
              <a href="/policies" className="hover:text-white transition-colors">Policies</a>
              <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>
            <a href="/download" className="btn-gradient px-6 py-2 rounded-full font-semibold text-sm text-white">
              Get App
            </a>
          </header>

          {/* Main Content Area */}
          <div className="flex-1">
            {children}
          </div>

          {/* Updated Footer with Policies Link */}
          <footer className="py-10 mt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 z-10 relative">
            <p>© 2026 SoulSlates — Built for Indian Creators.</p>
            
            <nav className="flex space-x-6">
              <a 
                href="/policies" 
                className="hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]"
              >
                Legal & Policies
              </a>
              <a 
                href="/faq" 
                className="hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              >
                FAQ
              </a>
            </nav>
          </footer>
          
        </div>
      </body>
    </html>
  )
}