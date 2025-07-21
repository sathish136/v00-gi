import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import QuickLinks from "@/components/quick-links"
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WTT International - Water Treatment Technologies",
  description:
    "Leading provider of innovative water and wastewater treatment solutions for industries worldwide. Advanced ETP, ZLD, STP, RO systems and more.",
  keywords:
    "water treatment, wastewater treatment, ETP, ZLD, STP, RO systems, MBR technology, industrial water treatment",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TooltipProvider>
          <QuickLinks />
        </TooltipProvider>
      </body>
    </html>
  )
}
