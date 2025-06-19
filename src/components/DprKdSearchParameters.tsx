'use client'

import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import {
    Card,
    CardContent,
    CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import clsx from 'clsx'

const DprKdSearchParameters = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [showCalendar, setShowCalendar] = useState(false)

    return (
        <Accordion type="single" collapsible className="w-full overflow-visible">
            <AccordionItem value="dpr-kd">
                <AccordionTrigger className="text-lg px-6 py-4 border rounded-md bg-muted">
                    DPR KD Search Parameters
                </AccordionTrigger>

                <AccordionContent className="relative z-20 overflow-visible">
                    <Card className="w-full p-6 overflow-visible">
                        <CardContent className="overflow-visible">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                                {/* STD CT */}
                                <div className="w-full">
                                    <Label htmlFor="std-ct" className="block mb-1">STD CT.</Label>
                                    <Input id="std-ct" placeholder="Enter STD CT." className="w-full" />
                                </div>

                                {/* Part Name */}
                                <div className="w-full">
                                    <Label className="block mb-1">Part Name</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Part Name" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="part1">Crank Case</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Model / Ratio */}
                                <div className="w-full">
                                    <Label className="block mb-1">Model / Ratio</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Model/Ratio" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="model1">ES01</SelectItem>
                                            <SelectItem value="model2">ES05</SelectItem>
                                            <SelectItem value="model3">ES08</SelectItem>
                                            <SelectItem value="model4">ES30H/R</SelectItem>
                                            <SelectItem value="model5">ES30L/R</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Table */}
                                <div className="w-full">
                                    <Label className="block mb-1">Table</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Table" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="table1">Table 1</SelectItem>
                                            <SelectItem value="table2">Table 2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Shift */}
                                <div className="w-full">
                                    <Label className="block mb-1">Shift</Label>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Shift" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1st">5:30PM - 1:30AM</SelectItem>
                                            <SelectItem value="2nd">1:30AM - 9:30AM</SelectItem>
                                            <SelectItem value="3rd">9:30AM - 5:30PM</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Date */}
                                <div className="w-full relative z-10">
                                    <Label className="block mb-1">Date</Label>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => setShowCalendar((prev) => !prev)}
                                    >
                                        {date ? date.toDateString() : 'Select Date'}
                                    </Button>
                                    <div
                                        className={clsx(
                                            'absolute left-0 mt-2 w-72 border bg-white dark:bg-gray-800 dark:border-gray-700 rounded-md shadow-md dark:shadow-lg transition-opacity duration-200 origin-top z-50',
                                            showCalendar ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        )}
                                        style={{ position: 'fixed', left: '83%', transform: 'translateX(-50%)' }}
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={(d) => {
                                                setDate(d)
                                                setTimeout(() => setShowCalendar(false), 100)
                                            }}
                                            className="w-72 zindex-5000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end flex-wrap gap-2 mt-6">
                            <Button variant="secondary">Load</Button>
                            <Button>Save</Button>
                            <Button variant="outline">Print</Button>
                        </CardFooter>
                    </Card>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default DprKdSearchParameters