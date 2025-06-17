"use client";

import { Calendar } from "@/components/ui/calendar";
import React from "react";

const CalendarComponent = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <Calendar className='w-full'
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    </div>
  );
};

export default CalendarComponent;

// 'use client';

// import React, { useState } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { EventInput } from '@fullcalendar/core';

// // Define type for sampleData with index signature
// interface EventData {
//   [key: string]: string;
// }

// // Sample data with explicit type
// const sampleData: EventData = {
//   '2025-06-17': 'Meeting with team',
//   '2025-06-19': 'Deadline: Project X',
//   '2025-06-20': 'Off-site training',
// };

// // Convert sampleData to FullCalendar's EventInput format
// const events: EventInput[] = Object.entries(sampleData).map(([date, title]) => ({
//   title,
//   date,
// }));

// // Custom type for dateClick argument
// interface DateClickInfo {
//   date: Date;
//   dateStr: string;
//   jsEvent: MouseEvent;
// }

// export default function CalendarComponent() {
//   // State for selected date
//   const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

//   // Handle date click
//   const handleDateClick = (arg: DateClickInfo) => {
//     setSelectedDate(arg.date);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Calendar with Events</h1>
//       <FullCalendar
//         plugins={[dayGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//         dateClick={handleDateClick}
//         eventContent={(eventInfo) => (
//           <p className="text-xs text-red-600 mt-1">{eventInfo.event.title}</p>
//         )}
//         height="auto"
//       />
//       {selectedDate && (
//         <p className="mt-4">
//           Selected Date: {selectedDate.toISOString().split('T')[0]}
//         </p>
//       )}
//     </div>
//   );
// }