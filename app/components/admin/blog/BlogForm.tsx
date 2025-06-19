'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit'
import EditorComponent from './EditorComponent';

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
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)
  const route = useRouter();
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello <strong>world</strong>!</p>',
  });


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)

    if (selectedFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

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

  const handleBackToDashboard = () => route.push("/admin/dashboard");

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto p-6 rounded-md space-y-4">
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
        <label className="block text-sm font-medium">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 w-full border rounded px-3 py-2"
        />

        {preview && (
          <div className="mt-4">
            <p className="text-sm  mb-1">Preview:</p>
            <img src={preview} alt="Preview" className="max-w-full h-auto rounded" />
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Content</label>
        <EditorComponent />
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

        <button
          onClick={() => handleBackToDashboard()}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer disabled:opacity-50"
        >
          Back
        </button>
      </div>

    </form>
  );
}





