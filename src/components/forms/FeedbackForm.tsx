'use client';
import { useState } from 'react';

export default function FeedbackForm() {
  const [message, setMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    setMessage('');
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your feedback" className="border p-2" />
      <button type="submit" className="bg-purple-500 text-white p-2">Send</button>
    </form>
  );
}
