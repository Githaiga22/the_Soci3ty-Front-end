import { Inter, Sora } from "next/font/google"
import "./globals.css"
import localFont from "next/font/local"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600"] })

const suisseIntlFont = localFont({
  src: [
    { path: "./fonts/SuisseIntl-Black.otf", weight: "900", style: "normal" },
    { path: "./fonts/SuisseIntl-BlackItalic.otf", weight: "900", style: "italic" },

    { path: "./fonts/SuisseIntl-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/SuisseIntl-BoldItalic.otf", weight: "700", style: "italic" },

    { path: "./fonts/SuisseIntl-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/SuisseIntl-SemiBoldItalic.otf", weight: "600", style: "italic" },

    { path: "./fonts/SuisseIntl-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/SuisseIntl-MediumItalic.otf", weight: "500", style: "italic" },

    { path: "./fonts/SuisseIntl-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/SuisseIntl-RegularItalic.otf", weight: "400", style: "italic" },

    { path: "./fonts/SuisseIntl-Book.otf", weight: "350", style: "normal" },
    { path: "./fonts/SuisseIntl-BookItalic.otf", weight: "350", style: "italic" },

    { path: "./fonts/SuisseIntl-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/SuisseIntl-LightItalic.otf", weight: "300", style: "italic" },

    { path: "./fonts/SuisseIntl-Ultralight.otf", weight: "200", style: "normal" },
    { path: "./fonts/SuisseIntl-UltralightItalic.otf", weight: "200", style: "italic" },

    { path: "./fonts/SuisseIntl-Thin.otf", weight: "100", style: "normal" },
    { path: "./fonts/SuisseIntl-ThinItalic.otf", weight: "100", style: "italic" },
  ],
  variable: "--font-suisse", // You can rename this to --font-suisse if you want
  display: "swap",
})


export const blaak = localFont({
  src: [
    { path: './fonts/US Blaak Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/US Blaak Medium.otf', weight: '500', style: 'normal' },
    { path: './fonts/US Blaak Semi Bold.otf', weight: '600', style: 'normal' },
    { path: './fonts/US Blaak Bold.otf', weight: '700', style: 'normal' },
    { path: './fonts/US Blaak Extra Bold.otf', weight: '800', style: 'normal' },
    { path: './fonts/US Blaak Black.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-blaak',
})


export const metadata = {
  title: "The Soci3ty",
  description: "A platform that supports visionaries",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} ${blaak.variable} ${suisseIntlFont.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
