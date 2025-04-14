import { Inter, Sora } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600"] })

export const metadata = {
  title: "The Soci3ty",
  description: "A platform that supports visionaries",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} font-sans`}>{children}</body>
    </html>
  )
}
