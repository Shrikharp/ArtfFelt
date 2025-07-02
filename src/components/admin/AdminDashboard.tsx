'use client';
import { useEffect, useState } from 'react';

export default function AdminDashboard({ role }: { role: string }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (role === 'admin') {
      fetch('/api/events')
        .then((res) => res.json())
        .then(setEvents);
    }
  }, [role]);

  if (role !== 'admin') {
    return <p>Access denied</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Admin Dashboard</h2>
      <ul className="list-disc pl-4">
        {events.map((e: any) => (
          <li key={e._id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
}
