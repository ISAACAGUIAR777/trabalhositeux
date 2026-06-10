import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Poppins, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'BYD Concessionária | Carros Elétricos',
  description:
    'Concessionária oficial BYD. Conheça nossa linha de carros 100% elétricos, agende um test-drive e descubra a tecnologia da líder mundial em mobilidade elétrica.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <SiteHeader />
        <main className="min-h-[60vh]">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
