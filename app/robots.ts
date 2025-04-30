import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: 'https://plovimomeistrai.lt/sitemap.xml',
    host: 'https://plovimomeistrai.lt',
  }
}
