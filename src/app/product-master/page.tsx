'use client'

import React from 'react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import ProductMasterTable from '@/components/ProductMasterTable'
import AddProductForm from '@/components/AddProductForm'

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product Master</h1>
      <p className="mb-4">Manage your product master data here.</p>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="mb-4" variant="outline">
            Add New Product
          </Button>
        </DialogTrigger>

        <AddProductForm />
      </Dialog>

      <ProductMasterTable />
    </div>
  )
}

export default Page
