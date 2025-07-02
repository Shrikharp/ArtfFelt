'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useEffect, useState } from 'react';

interface EventItem {
  _id: string;
  title: string;
  startDate: string;
  endDate: string;
}

export default function EventCalendar() {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then(setEvents);
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events.map((e) => ({ title: e.title, start: e.startDate, end: e.endDate }))}
    />
  );
}
