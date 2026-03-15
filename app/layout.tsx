import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Прaсeодимиум',
  description: 'Прaсeодимиум — лантанидын цувралд багтдаг ховор газрын элемент. Энэхүү вэб хуудсаар дамжуулан та интерактив 3D атомын загваруудаар нь танилцаж, химийн шинж чанар, нэгдлүүд болон бодит амьдрал дахь хэрэглээг нь судлах боломжтой',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/gg.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/gg.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/gg.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/gg.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
