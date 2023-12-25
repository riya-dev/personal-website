import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Riya Dev',
  description: 'Riya Dev personal website',
  siteRepo: 'https://github.com/riya-dev/personal-website',
  siteLogo: '/public/static/images/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' ' + poppins.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
