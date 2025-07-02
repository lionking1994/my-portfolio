import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Daniel Cole - AI/ML Engineer",
    template: "%s | Daniel Cole",
  },
  description:
    "Portfolio of Daniel Cole, AI/ML Engineer specializing in Computer Vision, NLP, and Deep Learning. 6+ years of experience building intelligent systems.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "NLP",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Daniel Cole" }],
  creator: "Daniel Cole",
  publisher: "Daniel Cole",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielcole.dev",
    title: "Daniel Cole - AI/ML Engineer",
    description: "Portfolio of Daniel Cole, AI/ML Engineer specializing in Computer Vision, NLP, and Deep Learning.",
    siteName: "Daniel Cole Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Cole - AI/ML Engineer",
    description: "Portfolio of Daniel Cole, AI/ML Engineer specializing in Computer Vision, NLP, and Deep Learning.",
    creator: "@danielcole",
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
