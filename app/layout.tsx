// app/layout.tsx - FIXED VERSION
import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieConsentBanner from '../components/CookieConsentBanner';
import GoogleAnalytics from '../components/analytics/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

export const metadata: Metadata =  {
  title: {
    default: 'EuroBudget - Travel Europe for Less',
    template: '%s | EuroBudget'
  },
  description: 'Expert budget travel guides for Europe. Explore destinations affordably with verified price breakdowns.',
  keywords: ['Europe travel', 'budget travel', 'travel guides', 'European destinations'],
  authors: [{ name: 'EuroBudget Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eurobudget.travel',
    title: 'EuroBudget - Honest Europe Travel Guides',
    description: 'Real budget travel guides for European destinations',
    siteName: 'EuroBudget',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="google-adsense-account" content="ca-pub-YOUR_ID_HERE" />
        <GoogleAnalytics />
      </head>
      <body className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}