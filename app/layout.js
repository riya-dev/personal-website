import Head from 'next/head';
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Riya Dev',
  author: 'Riya Dev',
  applicationName: 'Riya Dev personal website.',
  keywords: ['Riya', 'Dev', 'TJHSST', 'Michigan', 'Computer', 'Singing', 'Personal Portfolio', 'Website'],
  description: 'Riya Dev personal website. I am passionate about innovation and impact with a background in public speaking/varsity debate, computer science, start-ups, and research.',
  siteRepo: 'https://github.com/riya-dev/personal-website',
  siteLogo: '/static/images/favicon.ico',
  language: 'en-US',
  siteURL: 'https://riyadev.com/'
}

export default function RootLayout({ children }) {
  // const router = useRouter();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="author" content={metadata.author} />
        <meta name="applicationName" content={metadata.applicationName} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.siteLogo} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/images/projects/this_website.png" />
        <meta property="og:url" content={metadata.siteURL} />
        <meta name="twitter:site" content="@ceoRiya" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <link rel="canonical" href={metadata.siteURL} />
      </Head>

      <html lang={metadata.language}>
        <body className={inter.className + ' ' + poppins.className}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  )
}
