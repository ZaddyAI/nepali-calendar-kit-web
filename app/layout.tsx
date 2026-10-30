import type React from "react"
import type { Metadata } from "next"
import { Oswald, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-oswald" })
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" })
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
        <html lang="en" className={`${oswald.variable} ${jakarta.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                />
            </head>
            <body className="antialiased selection:bg-primary/20 selection:text-primary">
                {children}
                <Analytics />
            </body>
        </html>
    )
}
