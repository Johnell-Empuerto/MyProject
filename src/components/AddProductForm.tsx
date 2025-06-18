'use client'
import React, { useState } from 'react'
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { DialogClose } from '@/components/ui/dialog'

import Swal from 'sweetalert2'

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        productCode: '',
        productName: '',
        costCenterCode: '',
        category: '',
        source: '',
        bmStatus: '',
        specification: '',
        internalCode: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)

        Swal.fire({
            title: 'Success!',
            text: 'Product has been added successfully.',
            icon: 'success',
            showConfirmButton: false, // ❌ hides the OK button
            timer: 2000,              // ⏱ auto-close after 2 seconds
            timerProgressBar: true,   // 🔄 optional: show countdown bar
        })


        // Optionally reset form
        setFormData({
            productCode: '',
            productName: '',
            costCenterCode: '',
            category: '',
            source: '',
            bmStatus: '',
            specification: '',
            internalCode: '',
        })
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription>
                    Fill in the fields below to register a new product.
                </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
                {[
                    { name: 'productCode', label: 'Product Code' },
                    { name: 'productName', label: 'Product Name' },
                    { name: 'costCenterCode', label: 'Product Cost Center Code' },
                    { name: 'category', label: 'Product Category' },
                    { name: 'source', label: 'Product Source' },
                    { name: 'bmStatus', label: 'BM Status' },
                    { name: 'specification', label: 'Product Specification' },
                    { name: 'internalCode', label: 'Internal Product Code' },
                ].map((field) => (
                    <div key={field.name} className="flex flex-col space-y-1">
                        <Label htmlFor={field.name}>{field.label}</Label>
                        <Input
                            id={field.name}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}

                <div className="flex justify-end gap-2 pt-4">
                    <Button type="submit">Save</Button>
                    <DialogClose asChild>
                        <Button type="button" variant="outline">Cancel</Button>
                    </DialogClose>
                </div>
            </form>
        </DialogContent>
    )
}

export default AddProductForm
