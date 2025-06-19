'use client'

import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

const generateTimeRange = (startHour: number, startMin: number, count: number) => {
    const ranges = []
    let hour = startHour
    const minute = startMin // Changed from let to const

    for (let i = 0; i < count; i++) {
        const start = `${hour}:${minute.toString().padStart(2, '0')}`
        hour += 1
        if (hour === 13) hour = 1
        const end = `${hour}:${minute.toString().padStart(2, '0')}`
        ranges.push(`${start}-${end}`)
    }

    return ranges
}

const DprKdTable = () => {
    const columns = [
        'TIME',
        '100% TARGET \n (with backup)',
        '81% TARGET \n(without backup)',
        'Actual Result',
        'JUDG.',
        'No. of\n Manpower',
        'Parts with Chips',
        'Machining \n(ex. Dent)',
        'Casting \n(ex. Blowhole)',
        'KANBAN NUMBER',
        'DOWNTIME (mins.)',
        'PROBLEM DETECTED',
        'ACTION TAKEN/COUNTERMEASURE',
        'PIC',
    ]

    const rowCount = 8
    const timeRanges = generateTimeRange(5, 30, rowCount)

    const rows = Array.from({ length: rowCount * 2 }, (_, rowIndex) =>
        Array.from({ length: columns.length }, (_, colIndex) => `R${rowIndex + 1}C${colIndex + 1}`)
    )

    const splitColumns = ['100% TARGET', '81% TARGET', 'Actual Result', 'KANBAN NUMBER']
    const numericColumns = ['Actual Result', 'No. of Manpower', 'DOWNTIME (mins.)', 'KANBAN NUMBER']

    return (
        <div className="overflow-auto border rounded-lg mt-5 select-none">
            <Table className="min-w-[1200px]">
                <TableHeader>
                    <TableRow>
                        {columns.map((col, idx) => (
                            <TableHead key={idx} className="text-center whitespace-pre-line select-none">
                                {col.replace(/\\n/g, '\n')}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {rows.map((row, rowIndex) => {
                        if (rowIndex % 2 === 0) {
                            return (
                                <React.Fragment key={rowIndex}>
                                    {/* Main Row */}
                                    <TableRow className="hover:bg-transparent">
                                        {row.map((cell, colIndex) => {
                                            const columnName = columns[colIndex]
                                            const isSplit = splitColumns.some(key => columnName.includes(key))
                                            const isNumeric = numericColumns.includes(columnName)

                                            if (columnName === 'TIME') {
                                                return (
                                                    <TableCell
                                                        key={colIndex}
                                                        rowSpan={2}
                                                        className="text-center align-middle font-semibold select-none"
                                                    >
                                                        {timeRanges[rowIndex / 2]}
                                                    </TableCell>
                                                )
                                            }

                                            // Apply diagonal split cell with zeroes to C2, C3 (colIndex 1, 2)
                                            if ([1, 2].includes(colIndex)) {
                                                return (
                                                    <TableCell
                                                        key={colIndex}
                                                        rowSpan={2}
                                                        className="diagonal-split-cell relative"
                                                    >
                                                        <div className="top-left">0</div>
                                                        <div className="bottom-right">0</div>
                                                    </TableCell>
                                                )
                                            }

                                            // Apply diagonal split cell with small text boxes to C4 (colIndex 3)
                                            if (colIndex === 3) {
                                                return (
                                                    <TableCell
                                                        key={colIndex}
                                                        rowSpan={2}
                                                        className="diagonal-split-cell relative"
                                                    >
                                                        <div className="top-left">
                                                            <input
                                                                type="number"
                                                                defaultValue=""
                                                                className="w-8 h-6 bg-gray-100 rounded text-sm px-1"
                                                                placeholder="Val"
                                                            />
                                                        </div>
                                                        <div className="bottom-right">
                                                            <input
                                                                type="number"
                                                                defaultValue=""
                                                                className="w-8 h-6 bg-gray-100 rounded text-sm px-1"
                                                                placeholder="Val"
                                                            />
                                                        </div>
                                                    </TableCell>
                                                )
                                            }

                                            // Apply normal-sized text box to columns from JUDG. to PIC (colIndex 4 to 13)
                                            if (colIndex >= 4) {
                                                return (
                                                    <TableCell
                                                        key={colIndex}
                                                        rowSpan={isSplit ? undefined : 2}
                                                        className="text-center align-middle whitespace-nowrap"
                                                    >
                                                        <input
                                                            type={isNumeric ? 'number' : 'text'}
                                                            defaultValue=""
                                                            className="w-32 h-10 bg-gray-900 rounded text-base px-2"
                                                            placeholder=""
                                                        />
                                                    </TableCell>
                                                )
                                            }

                                            return (
                                                <TableCell
                                                    key={colIndex}
                                                    rowSpan={isSplit ? undefined : 2}
                                                    className="text-center align-middle whitespace-nowrap select-none"
                                                >
                                                    {cell}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>

                                    {/* Subrow for split columns */}
                                    <TableRow className="hover:bg-transparent">
                                        {columns.map((_, colIndex) => {
                                            const columnName = columns[colIndex]
                                            // Only render cell for KANBAN NUMBER (index 9) in subrow
                                            if (columnName === 'KANBAN NUMBER') {
                                                return (
                                                    <TableCell
                                                        key={colIndex}
                                                        className="text-center align-middle whitespace-nowrap"
                                                    >
                                                        <input
                                                            type="number"
                                                            defaultValue=""
                                                            className="w-32 h-10 bg-gray-900 rounded text-base px-2"
                                                            placeholder=""
                                                        />
                                                    </TableCell>
                                                )
                                            }
                                            // Skip cells for columns 1, 2, 3 (covered by rowSpan) and others
                                            return colIndex === 0 ? <TableCell key={colIndex} className="hidden" /> : null
                                        })}
                                    </TableRow>
                                </React.Fragment>
                            )
                        }
                        return null
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default DprKdTable