'use client';
import { useState } from 'react';

export default function OCApplicationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    year: '',
    branch: '',
    motivation: '',
    skillset: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/ocforms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm({ name: '', email: '', year: '', branch: '', motivation: '', skillset: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2" />
      <input name="year" value={form.year} onChange={handleChange} placeholder="Year" className="border p-2" />
      <input name="branch" value={form.branch} onChange={handleChange} placeholder="Branch" className="border p-2" />
      <textarea name="motivation" value={form.motivation} onChange={handleChange} placeholder="Why join?" className="border p-2" />
      <textarea name="skillset" value={form.skillset} onChange={handleChange} placeholder="Skillset" className="border p-2" />
      <button type="submit" className="bg-green-500 text-white p-2">Apply</button>
    </form>
  );
}
