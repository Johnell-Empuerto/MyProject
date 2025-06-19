"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateClickArg } from "@fullcalendar/interaction";
import { EventClickArg } from "@fullcalendar/core";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


interface CalendarEvent {
  title: string;
  date: string;
  machine?: string;
  productNumber?: string;
  shift?: string;
  backgroundColor?: string;
}

const CalendarComponent = () => {


  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([
    { title: "Plan: 400", date: "2025-06-18" },
    { title: "Actual: 400", date: "2025-06-18",  backgroundColor: "oklch(0.577 0.245 27.325)", },
    { title: "Plan: 500", date: "2025-06-19" },
    { title: "Actual: 400", date: "2025-06-19",  backgroundColor: "oklch(0.577 0.245 27.325)", },
  ]);
  const [formData, setFormData] = useState({
    plan: "",
    machine: "",
    productNumber: "",
    shift: "",
  });

  const handleDateClick = (arg: DateClickArg) => {
    setSelectedDate(arg.dateStr);
    setFormData({ plan: "", machine: "", productNumber: "", shift: "" });
    setIsAddOpen(true);
  };

  const handleEventClick = (arg: EventClickArg) => {
    const event = {
      title: arg.event.title,
      date: arg.event.startStr,
      machine: arg.event.extendedProps.machine,
      productNumber: arg.event.extendedProps.productNumber,
      shift: arg.event.extendedProps.shift,
    };
    setSelectedEvent(event);
    setIsDetailsOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (formData.plan) {
      const newEvent: CalendarEvent = {
        title: `Plan: ${formData.plan}`,
        date: selectedDate,
        machine: formData.machine,
        productNumber: formData.productNumber,
        shift: formData.shift,
      };
      setEvents((prev) => [...prev, newEvent]);
    }
    setIsAddOpen(false);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        height="auto"
      />

      {/* Add Event Dialog */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Plan for {selectedDate}</DialogTitle>
            <DialogDescription>
              Enter plan details for the selected date. Click save when you&#39;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="plan">Plan</Label>
              <Input
                id="plan"
                name="plan"
                value={formData.plan}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="machine">Machine</Label>
              <Input
                id="machine"
                name="machine"
                value={formData.machine}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="productNumber">Product Number</Label>
              <Input
                id="productNumber"
                name="productNumber"
                value={formData.productNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="shift">Shift</Label>
              <Input
                id="shift"
                name="shift"
                value={formData.shift}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSave}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Event Details</DialogTitle>
            <DialogDescription>
              View details for the selected event.
            </DialogDescription>
          </DialogHeader>
          {selectedEvent && (
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label>Plan</Label>
                <p className="text-sm">{selectedEvent.title}</p>
              </div>
              <div className="grid gap-3">
                <Label>Date</Label>
                <p className="text-sm">{selectedEvent.date}</p>
              </div>
              <div className="grid gap-3">
                <Label>Machine</Label>
                <p className="text-sm">{selectedEvent.machine || "N/A"}</p>
              </div>
              <div className="grid gap-3">
                <Label>Product Number</Label>
                <p className="text-sm">{selectedEvent.productNumber || "N/A"}</p>
              </div>
              <div className="grid gap-3">
                <Label>Shift</Label>
                <p className="text-sm">{selectedEvent.shift || "N/A"}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CalendarComponent;