import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow any private routes if you add them later, e.g., disallow: '/dashboard/'
    },
    sitemap: 'https://soulslates.com/sitemap.xml', // Replace with your actual domain
  }
}