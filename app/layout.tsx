import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import JotformAgent from "@/components/jotform-agent"

export const metadata = {
  title: "FitPro - Elite Personal Training",
  description:
    "Transform your physique with premium fitness coaching by FitPro. Personalized training programs, expert nutrition guidance, and proven results.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <JotformAgent />
        </ThemeProvider>
      </body>
    </html>
  )
}

