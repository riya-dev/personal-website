import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Riya Dev',
  description: 'Riya Dev personal website.',
  keywords: ['Riya', 'Dev', 'TJHSST', 'Michigan', 'Computer', 'Singing', 'Personal Portfolio', 'Website'],
  authors: [{ name: 'Riya Dev' }],
  applicationName: 'Riya Dev personal website.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://riyadev.com/',
    title: 'Riya Dev',
    description: 'Riya Dev personal website.',
    images: [{
      url: '/static/images/projects/this_website.png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ceoRiya',
    title: 'Riya Dev',
    description: 'Riya Dev personal website.',
  },
  alternates: {
    canonical: 'https://riyadev.com/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className={inter.className + ' ' + poppins.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}