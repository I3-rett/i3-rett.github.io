import { type Metadata } from 'next'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Brett',
    default:
      'Brett - Software engineer and passionate about building things that doesn\'t matter',
  },
  description:
    'Brett - Software engineer and passionate about building things that doesn\'t matter',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
      </body>
    </html>
  )
}
