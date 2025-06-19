import React from 'react'
import DprKdSearchParameters from '@/components/DprKdSearchParameters' // adjust path as needed
import DprKdTable from '@/components/DprKdTable'

const Page = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">DPR KD</h1>
            <p className="mb-4">View the daily production report of the Palletizing process.</p>
            <DprKdSearchParameters />

            <DprKdTable />
        </div>
    )
}

export default Page
