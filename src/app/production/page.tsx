// import CalendarComponent from '@/components/CalendarComponent'
import CalendarComponent from "@/components/CalendarComponent";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProdTable } from "@/components/ProdTable";
import { ProdPieChart } from "@/components/ProdPieChart";
import '../styles/custom.css';

const page = () => {
  return (
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
      <div className="gap-4 md:col-span-2 2xl:col-span-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-2 2xl:grid-cols-1">
          <div className="bg-primary-foreground p-2 pb-4 rounded-lg">
            <div>
              <h2 className="pb-1">Filter Options</h2>
              <hr className="pb-5" />
            </div>
<div className="flex flex-col gap-2 sm:flex-row sm:gap-0.5">
  {/* Select Dropdown */}
  <div className="flex-1">
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Machine" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ADC 1">ADC 1</SelectItem>
        <SelectItem value="ADC 2">ADC 2</SelectItem>
        <SelectItem value="ADC 3">ADC 3</SelectItem>
        <SelectItem value="C4">C4</SelectItem>
        <SelectItem value="KD">KD</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Input Field */}
  <div className="flex-1">
    <Input type="text" placeholder="Enter product alias code" className="w-full" />
  </div>
</div>

            <div className="flex items-center justify-center gap-1 mt-5">
              <Button className="flex-1">Search</Button>
              <Button className="flex-1">Reset</Button>
            </div>
          </div>
          <div  className="bg-primary-foreground p-2 pb-4 rounded-lg">
            <div>
              <h2 className="pb-1">Product Details</h2>
              <hr className="pb-5" />
            </div>
            <div>
              <ProdTable />
            </div>
          </div>
          <div className="bg-primary-foreground p-2 pb-4 rounded-lg">
              <ProdPieChart/>
          </div>
        </div>
      </div>
      <div className="p-2 md:col-span-2 2xl:col-span-3 rounded-lg">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default page;
