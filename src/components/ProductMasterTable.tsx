import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button";

const ProductMasterTable = () => {
  return (
    <Table>
      <TableCaption>A list of products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product Code</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Product Cost Center Code</TableHead>
          <TableHead>Product Category</TableHead>
          <TableHead>Product Source</TableHead>
          <TableHead>BM Status</TableHead>
          <TableHead>Product Specification</TableHead>
          <TableHead>Internal Product Code</TableHead>
          <TableHead>User</TableHead>
          <TableHead className="text-center" colSpan={2}>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>PC-001</TableCell>
          <TableCell>Product A</TableCell>
          <TableCell>CC-123</TableCell>
          <TableCell>Category X</TableCell>
          <TableCell>Imported</TableCell>
          <TableCell>Approved</TableCell>
          <TableCell>Spec A1</TableCell>
          <TableCell>INT-456</TableCell>
          <TableCell>admin</TableCell>
          <TableCell colSpan={2} className="text-center">
            <div className="flex justify-center gap-4">
              <Button>Update</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </TableCell>

        </TableRow>

        <TableRow>
          <TableCell>PC-001</TableCell>
          <TableCell>Product A</TableCell>
          <TableCell>CC-123</TableCell>
          <TableCell>Category X</TableCell>
          <TableCell>Imported</TableCell>
          <TableCell>Approved</TableCell>
          <TableCell>Spec A1</TableCell>
          <TableCell>INT-456</TableCell>
          <TableCell>admin</TableCell>
          <TableCell colSpan={2} className="text-center">
            <div className="flex justify-center gap-4">
              <Button>Update</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </TableCell>

        </TableRow>

        <TableRow>
          <TableCell>PC-001</TableCell>
          <TableCell>Product A</TableCell>
          <TableCell>CC-123</TableCell>
          <TableCell>Category X</TableCell>
          <TableCell>Imported</TableCell>
          <TableCell>Approved</TableCell>
          <TableCell>Spec A1</TableCell>
          <TableCell>INT-456</TableCell>
          <TableCell>admin</TableCell>
          <TableCell colSpan={2} className="text-center">
            <div className="flex justify-center gap-4">
              <Button>Update</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </TableCell>

        </TableRow>

        <TableRow>
          <TableCell>PC-001</TableCell>
          <TableCell>Product A</TableCell>
          <TableCell>CC-123</TableCell>
          <TableCell>Category X</TableCell>
          <TableCell>Imported</TableCell>
          <TableCell>Approved</TableCell>
          <TableCell>Spec A1</TableCell>
          <TableCell>INT-456</TableCell>
          <TableCell>admin</TableCell>
          <TableCell colSpan={2} className="text-center">
            <div className="flex justify-center gap-4">
              <Button>Update</Button>
              <Button variant="destructive">Delete</Button>
            </div>
          </TableCell>

        </TableRow>
        {/* Repeat <TableRow> for more products */}
      </TableBody>
    </Table>
  )
}
export default ProductMasterTable
