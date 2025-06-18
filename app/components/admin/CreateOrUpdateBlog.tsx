'use client';

import { useState, useEffect } from 'react';

type BlogFormProps = {
  initialData?: {
    id: number;
    title: string;
    sub_title: string;
    content: string;
    img: string;
  };
  onSuccess?: () => void;
};

export default function BlogForm({ initialData, onSuccess }: BlogFormProps) {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState('');
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setSubTitle(initialData.sub_title);
      setContent(initialData.content);
      setImg(initialData.img);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const payload = {
      title,
      sub_title: subTitle,
      content,
      img,
    };

    try {
      const res = await fetch(initialData ? `/api/blogs/${initialData.id}` : '/api/blogs', {
        method: initialData ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
      });

      if (!res.ok) throw new Error('Failed to save blog');

      if (onSuccess) onSuccess();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-xl font-semibold">{initialData ? 'Update Blog' : 'Create Blog'}</h2>

      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Sub Title</label>
        <input
          type="text"
          value={subTitle}
          onChange={e => setSubTitle(e.target.value)}
          required
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Content</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          rows={5}
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="text"
          value={img}
          onChange={e => setImg(e.target.value)}
          required
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Saving...' : initialData ? 'Update' : 'Create'}
      </button>
    </form>
  );
}
