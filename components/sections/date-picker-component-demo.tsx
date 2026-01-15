"use client"
import { NepaliDatePicker } from '@gambhirpoudel/nepali-calendar-kit';
import React from 'react';
export default function DatePickerComponentDemo() {
    const [selectedDate, setSelectedDate] = React.useState<any | null>(null);
    return (
        <section id='nepali-date-picker' className="space-y-8 mt-16 pt-16 border-t border-border">
            <div>
                <h2 className="text-3xl font-bold mb-2">3. Nepali Date Picker</h2>
                <p className="text-muted-foreground mb-6">Use the interactive NepaliDatePicker component in your React app.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 overflow-x-auto">
                <pre className="font-mono text-sm text-foreground">
                    <code>{`import React from 'react';
import { NepaliDatePicker } from '@gambhirpoudel/nepali-calendar-kit';

export const MyComponent = () => {
  const handleChange = (result: any | null) => {
    console.log('Selected Date:', result);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Select a Nepali Date</h2>
      <NepaliDatePicker
        onChange={handleChange}
        theme={{
          primary: '#2563eb',
          primaryLight: '#eff6ff',
          radius: '12px',
          fontFamily: "'Inter', system-ui, sans-serif",
          shadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          inputBg: '#ffffff'
        }}
        value="2082-10"
        dateLan="en"
        monthLan="en"
        dayLan="en"
        yearLan="en"
      />
    </div>
  );
};`}</code>
                </pre>
            </div>
            <div className="responseformat">
                <h3 className="font-bold text-foreground mb-2">Response Format</h3>
                <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code>{`{
  bs: '2082-10-29', // Selected date in Bikram Sambat format
  ad: 'Thu Feb 12 2026 05:45:00 GMT+0545 (Nepal Time)', // Corresponding date in Gregorian format
  nepali: '२०८२-१०-२९' // Selected date in Nepali script
}`}</code>
                </pre>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-bold text-primary mb-2">Interactive Component Preview</h3>
                <div className="text-sm text-muted-foreground">
                    <NepaliDatePicker
                        onChange={(result) => setSelectedDate(result)}
                        theme={{
                            primary: '#2563eb',
                            primaryLight: '#eff6ff',
                            radius: '12px',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            shadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                            inputBg: '#ffffff'
                        }}
                        value="2082-10"
                        dateLan="en"
                        monthLan="en"
                        dayLan="en"
                        yearLan="en"
                    />
                </div>
                <div className="selecteddate">
                    {selectedDate && (
                        <div className="mt-4 text-sm text-muted-foreground">
                            <div>
                                Selected Date (bs): <span className="font-mono text-primary">{selectedDate.bs}</span>
                            </div>
                            <div>
                                Selected Date (ad): <span className="font-mono text-primary">{selectedDate.ad.toString()}</span>
                            </div>
                            <div>
                                Selected Date (nepali): <span className="font-mono text-primary">{selectedDate.nepali}</span>
                            </div>
                        </div>
                    )}
                </div>


            </div>
        </section>
    )
}
