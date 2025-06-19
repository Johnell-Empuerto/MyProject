"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

import { AppareaChart } from "@/components/AppareaChart";
import { AppbarChart } from "@/components/AppbarChart";
import { AppRadialChart } from "@/components/AppRadialChart";
import DeliveryAndMaterial from "@/components/DeliveryAndMaterial";
import { RadarCharts } from "@/components/RadarCharts";

const Main = () => {
  return (
  <ProtectedRoute>

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppbarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <DeliveryAndMaterial title="Material Consumption" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppRadialChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <DeliveryAndMaterial title="Delivery Shipments" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppareaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <RadarCharts />
      </div>
    </div>

  </ProtectedRoute >
  );
};

export default Main;