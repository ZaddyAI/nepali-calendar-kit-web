import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
    title: "Nepali Calendar Kit | High-Performance Calendar SDK",
    description:
        "The most comprehensive toolkit for Nepali (Bikram Sambat) calendar integration. Features AD/BS conversion, localized DatePicker, and powerful developer APIs.",
    keywords: ["Nepali Calendar", "Bikram Sambat", "Date Picker", "AD to BS", "BS to AD", "React", "Node.js"],
    openGraph: {
        title: "Nepali Calendar Kit | High-Performance Calendar SDK",
        description: "Modern calendar toolkit for Nepali applications.",
        type: "website",
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable} ${geistMono.variable} dark scroll-smooth`} suppressHydrationWarning>
            <body className="antialiased selection:bg-primary/30 selection:text-primary">
                {children}
                <Analytics />
            </body>
        </html>
    )
}
