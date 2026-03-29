import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Прaзeодим',
  description: 'Лантанойдын цувралд багтдаг газрын ховор элемент Прaзeодимыг судлаарай. Интерактив 3D атомын загварууд, химийн шинж чанар, нэгдлүүд болон бодит амьдрал дахь хэрэглээг мэдэж аваарай.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/gg.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/gg.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/gg.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/gg.jpeg',
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
