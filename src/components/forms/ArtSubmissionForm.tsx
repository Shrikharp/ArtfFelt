'use client';
import { useState } from 'react';

export default function ArtSubmissionForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: null as File | null,
    name: '',
    email: '',
    tags: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      if (val) data.append(key, val as any);
    });
    await fetch('/api/submissions', {
      method: 'POST',
      body: data,
    });
    setForm({ title: '', description: '', image: null, name: '', email: '', tags: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="border p-2" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border p-2" />
      <input type="file" name="image" onChange={handleChange} className="border p-2" />
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="border p-2" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2" />
      <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags comma separated" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
    </form>
  );
}
