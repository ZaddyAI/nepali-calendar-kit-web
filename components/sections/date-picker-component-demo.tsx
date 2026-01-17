"use client";
import React from "react";
import { NepaliDatePicker } from "@gambhirpoudel/nepali-calendar-kit";

export default function DatePickerComponentDemo() {
    const [selectedDate, setSelectedDate] = React.useState<any | null>(null);

    // State for interactive options
    const [dateLan, setDateLan] = React.useState<"en" | "np">("en");
    const [monthLan, setMonthLan] = React.useState<"en" | "np">("en");
    const [dayLan, setDayLan] = React.useState<"en" | "np">("en");
    const [yearLan, setYearLan] = React.useState<"en" | "np">("en");
    const [primaryColor, setPrimaryColor] = React.useState("#2563eb");
    const [primaryLightColor, setPrimaryLiteColor] = React.useState("#eff6ff")
    const [inputBg, setInputBg] = React.useState("#ffffff");

    return (
        <section
            id="nepali-date-picker"
            className="space-y-8 mt-16 pt-16 border-t border-border"
        >
            <div>
                <h2 className="text-3xl font-bold mb-2">3. Nepali Date Picker</h2>
                <p className="text-muted-foreground mb-6">
                    Use the interactive NepaliDatePicker component in your React app.
                </p>
            </div>

            {/* Interactive Options */}
            <div className="bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="space-y-4">
                    <h3 className="font-bold">Language Options</h3>
                    {["dateLan", "monthLan", "dayLan", "yearLan"].map((type) => {
                        const stateMap = {
                            dateLan,
                            monthLan,
                            dayLan,
                            yearLan,
                        };
                        const setterMap = {
                            dateLan: setDateLan,
                            monthLan: setMonthLan,
                            dayLan: setDayLan,
                            yearLan: setYearLan,
                        };
                        return (
                            <div key={type} className="flex items-center gap-2">
                                <span className="capitalize w-20">{type.replace("Lan", "")}:</span>
                                {(["en", "np"] as const).map((lang) => (
                                    <button
                                        key={lang}
                                        className={`px-2 py-1 border rounded ${stateMap[type as keyof typeof stateMap] === lang
                                            ? "bg-primary text-white"
                                            : "bg-background text-foreground"
                                            }`}
                                        onClick={() => setterMap[type as keyof typeof setterMap](lang)}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        );
                    })}
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold">Theme Options</h3>
                    <div className="flex items-center gap-2">
                        <label>Primary:</label>
                        <input
                            type="color"
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label>Primary Light:</label>
                        <input
                            type="color"
                            value={primaryLightColor}
                            onChange={(e) => setPrimaryLiteColor(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label>Input BG:</label>
                        <input
                            type="color"
                            value={inputBg}
                            onChange={(e) => setInputBg(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Live DatePicker Preview */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-bold text-white mb-2">Interactive Component Preview</h3>
                <div className="text-sm text-muted-foreground">
                    <NepaliDatePicker
                        onChange={(result) => setSelectedDate(result)}
                        theme={{
                            primary: primaryColor,
                            primaryLight: primaryLightColor,
                            radius: "12px",
                            fontFamily: "'Inter', system-ui, sans-serif",
                            shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                            inputBg,
                        }}
                        value="2082-10"
                        dateLan={dateLan}
                        monthLan={monthLan}
                        dayLan={dayLan}
                        yearLan={yearLan}
                    />
                </div>

                {/* Selected Date Output */}
                {selectedDate && (
                    <div className="mt-4 text-sm text-muted-foreground">
                        <div>
                            Selected Date (bs):{" "}
                            <span className="font-mono text-primary">{selectedDate.bs}</span>
                        </div>
                        <div>
                            Selected Date (ad):{" "}
                            <span className="font-mono text-primary">{selectedDate.ad.toString()}</span>
                        </div>
                        <div>
                            Selected Date (nepali):{" "}
                            <span className="font-mono text-primary">{selectedDate.nepali}</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
