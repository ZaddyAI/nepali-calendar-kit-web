"use client"
import Header from "@/components/header"
import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import DateConversionDemo from "@/components/sections/date-conversion-demo"
import DatePickerComponentDemo from "@/components/sections/date-picker-component-demo"
import PropsTable from "@/components/sections/props-table"
import ThemeOptions from "@/components/sections/theme-options"
import SupportedFormats from "@/components/sections/supported-formats"
import ExampleOutput from "@/components/sections/example-output"
import Footer from "@/components/footer"
import GettingStarted from "@/components/sections/get-started"
import NepaliDateSection from "@/components/sections/nepali-date"

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="max-w-4xl mx-auto px-6 py-16">
                <Hero />
                <Features />
                <GettingStarted />
                <DateConversionDemo />
                <DatePickerComponentDemo />
                <PropsTable />
                <ThemeOptions />
                <NepaliDateSection />
                <SupportedFormats />
                <ExampleOutput />
            </main>
            <Footer />
        </div>
    )
}
