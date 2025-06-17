import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const datas = [
  {
    product: "All",
    plan: "2,566.00",
    actual: "9,324.00",
  },
    {
    product: "CH3 - 8972787453",
    plan: "566.00",
    actual: "2,288.00",
  },
    {
    product: "CL3 - 8972787463",
    plan: "600.00",
    actual: "1,484.00",
  }
]

export function ProdTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Actual</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {datas.map((data, idx) => (
          <TableRow key={idx}>
            <TableCell>{data.product}</TableCell>
            <TableCell>{data.plan}</TableCell>
            <TableCell>{data.actual}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
