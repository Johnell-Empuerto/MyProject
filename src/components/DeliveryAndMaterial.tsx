import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Hammer } from "lucide-react";

const upcomingDeliveryShipments = [
  {
    id: 1,
    title: "Isuzu Motors",
    badge: "CRNK-001",
    image: "https://static.cdnlogo.com/logos/i/55/isuzu.svg",
    count: 500,
  },
  {
    id: 2,
    title: "Toyota",
    badge: "CRNK-002",
    image: "https://static.cdnlogo.com/logos/t/68/toyota.svg",
    count: 320,
  },
  {
    id: 3,
    title: "Honda",
    badge: "CRNK-003",
    image: "https://static.cdnlogo.com/logos/h/2/honda-motorcycles-1.svg",
    count: 240,
  },
  {
    id: 4,
    title: "Mitsubishi",
    badge: "CRNK-004",
    image: "https://static.cdnlogo.com/logos/m/64/mitsubishi.svg",
    count: 150,
  },
  {
    id: 5,
    title: "Nissan",
    badge: "CRNK-005",
    image: "https://static.cdnlogo.com/logos/n/6/nissan.svg",
    count: 120,
  },
];

const dailyMaterialUsage = [
  {
    id: 1,
    title: "Aluminum Ingot",
    badge: "Crankcase Casting",
    image: <Hammer />,
    count: 1500,
  },
  {
    id: 2,
    title: "Oil Seal",
    badge: "Assembly",
     image: <Hammer />,
    count: 320,
  },
  {
    id: 3,
    title: "Gasket Ring",
    badge: "Inspection",
     image: <Hammer />,
    count: 500,
  },
  {
    id: 4,
    title: "Bearing Shell",
    badge: "Machining",
     image: <Hammer />,
    count: 260,
  },
  {
    id: 5,
    title: "Threaded Plug",
    badge: "Final Assembly",
     image: <Hammer />,
    count: 140,
  },
];

const DeliveryAndMaterial = ({ title }: { title: string }) => {
  const list =
    title === "Delivery Shipments"
      ? upcomingDeliveryShipments
      : dailyMaterialUsage;

  return (
    <div>

      <h2 className="text-lg font-medium mb-3">{title}</h2>

      <h3 className="text-muted-foreground leading-none mb-6">January -  June 2025</h3>

      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4 p-4"
          >
            <div className={title === "Delivery Shipments" ? "bg-white w-12 h-12 flex items-center justify-center rounded-sm overflow-hidden" : "bg-transparent w-12 h-12 flex items-center justify-center rounded-sm overflow-hidden"} >
              {typeof item.image === "string" ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-obtain"
                  width={45}
                  height={45}
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center">
                  {item.image}
                </div>
              )}
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DeliveryAndMaterial;