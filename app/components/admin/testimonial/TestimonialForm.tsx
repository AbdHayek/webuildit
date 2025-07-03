'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import CodeBlock from '@tiptap/extension-code-block'
import Image from '@tiptap/extension-image'
import { useEditor } from '@tiptap/react';
import EditorComponent from '../../Common/admin/EditorComponent';
import { Dispatch, SetStateAction } from 'react';
import '../Dashboard.scss';

type Testimonial = {
  id: number;
  title: string;
  author: string;
  content: string;
  order_number: number;
};


interface TestimonialFormComponentProps {
  initialData: Testimonial | null;
  setEditData: Dispatch<SetStateAction<Testimonial | null>>;
  setCreateNewTestimonial: Dispatch<SetStateAction<Boolean | null>>;
  setTestimonials: Dispatch<SetStateAction<Testimonial[]>>;
  Testimonials: Testimonial[];
}

export default function TestimonialForm({ initialData, setEditData, setTestimonials, Testimonials, setCreateNewTestimonial }: TestimonialFormComponentProps) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState(' <h3>Typing something...</h3>');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [orderNumber, setOrderNumber] = useState<number | ''>('');
  const handleBackToDashboard = () => {
    if (setEditData) setEditData(null)
    else setCreateNewTestimonial(false)
  }
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      CodeBlock,
      Image,
    ],
    content: content
  })

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setAuthor(initialData.author);
      setContent(initialData.content);
      setOrderNumber(initialData.order_number || '');
      if (editor) {
        editor.commands.setContent(initialData.content);
      }
    }
  }, [initialData, editor]);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    if (!title) {
      setError("Title is required.");
      return;
    }

    if (!author) {
      setError("Author is required.");
      return;
    }

    if (orderNumber === '' || orderNumber === null) {
      setError("Order number is required.");
      return;
    }

    const textContent = editor?.getText().trim();
    if (!textContent) {
      setError("Content is required.");
      return;
    }

    const formData = new FormData();
    if (initialData?.id)  // for update case
      formData.append('id', initialData?.id)

    formData.append('title', title);
    formData.append('author', author);
    formData.append('order_number', String(orderNumber));
    formData.append('created_at', new Date().toISOString());
    formData.append('updated_at', new Date().toISOString());
    if (editor) formData.append('content', editor.getHTML());

    setLoading(true);
    setError('');
    try {
      const res = await fetch("/api/testimonials", {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Unknown error occurred');
      }

      const result = await res.json()
      if (initialData?.id) {
        setTestimonials(Testimonials => Testimonials.map(Testimonial => Testimonial.id === initialData?.id ? {
          ...Testimonial,
          title: result.testimonial.title,
          author: result.testimonial.author,
          content: result.testimonial.content,
          order_number: result.testimonial.order_number,
          updatedAt: result.testimonial.updatedAt
        } : Testimonial));
      } else {
        setTestimonials([
          {
            id: result.testimonial.id,
            title: result.testimonial.title,
            author: result.testimonial.author,
            content: result.testimonial.content,
            order_number: result.testimonial.order_number,
            createdAt: result.testimonial.createdAt,
            updatedAt: result.testimonial.updatedAt
          },
          ...Testimonials
        ]);
      }

      setTimeout(() => {
        handleBackToDashboard();
      }, 100)

    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto p-6 rounded-md space-y-4">
      <h2 className="text-xl font-semibold">{initialData ? 'Update Testimonial' : 'Create Testimonial'}</h2>

      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}

          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Author</label>
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className="mt-1 w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Order Number</label>
        <input
          type="number"
          value={orderNumber}
          onChange={e => setOrderNumber(e.target.value === '' ? '' : Number(e.target.value))}
          className="mt-1 w-full border rounded px-3 py-2"
          min={1}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Content</label>
        <EditorComponent editor={editor} />
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <div className='gap-2 flex'>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer disabled:opacity-50"
        >
          {loading ? 'Saving...' : initialData ? 'Update' : 'Create'}
        </button>

        <p
          onClick={handleBackToDashboard}
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 cursor-pointer disabled:opacity-50"
        >
          Back
        </p>
      </div>

    </form>
  );
}





