import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Riya Dev',
  description: 'Riya Dev personal website',
  siteRepo: 'https://github.com/riya-dev/personal-website',
  siteLogo: '/public/static/images/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
