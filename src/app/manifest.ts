import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yamazakura Website',
    short_name: 'YMZK Website',
    description: 'Yamazakura Portfolio Website',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: 'android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'apple-touch-icon.png', // Add Apple touch icon
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'favicon-32x32.ico', // Add favicon.ico
        sizes: '32x32',
        type: 'image/x-icon',
      }
    ],
  }
}