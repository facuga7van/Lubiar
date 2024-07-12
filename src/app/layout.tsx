import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { Header } from '@/components/common/header'
import { Footer } from '@/components/common/footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lubiar - Abordaje psicologico de adicciones',
  description: 'ipsum dolor.',
  openGraph: {
    images: '/logo.png'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lubiar - Abordaje psicologico de adicciones',
    description: 'ipsum dolor.',
    images: ['https://imgur.com/a/CxGvIfY']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className="antialiased"
    >
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className={`flex min-h-screen flex-col ${inter.className}`}
          >
            <Header />
            <div className="flex flex-1 justify-center w-full spectrum-background">
              <div className="flex w-full max-w-[1280px] h-full">
                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
