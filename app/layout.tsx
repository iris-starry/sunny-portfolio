import type React from "react"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

const pretendard = Inter({
  subsets: ["latin"],
  variable: "--font-pretendard",
  display: "swap",
})

export const metadata = {
  title: "Sunny - Frontend Developer",
  description: "Building intuitive, high-performance web experiences.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${pretendard.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
