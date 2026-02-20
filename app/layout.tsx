import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Niko Milala | DevOps Engineer & Developer',
  description: 'Portfolio of Niko Milala — DevOps engineer and developer specializing in cloud infrastructure, CI/CD pipelines, and scalable systems.',
  metadataBase: new URL('https://niko.my.id'),
  openGraph: {
    title: 'Niko Milala | DevOps Engineer & Developer',
    description: 'Portfolio of Niko Milala — DevOps engineer and developer specializing in cloud infrastructure, CI/CD pipelines, and scalable systems.',
    url: 'https://niko.my.id',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
