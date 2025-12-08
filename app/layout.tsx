// app/layout.tsx - FIXED (no whitespace)
import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieConsentBanner from '../components/CookieConsentBanner';


export const metadata = {
  title: {
    default: 'EuroBudget - Travel Europe for Less',
    template: '%s | EuroBudget'
  },
  description: 'Expert budget travel guides for Europe. Explore destinations affordably with verified price breakdowns.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth"><head>{/* NO WHITESPACE HERE */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}