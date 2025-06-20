'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import CodeBlock from '@tiptap/extension-code-block'
import Image from '@tiptap/extension-image'
import { useEditor } from '@tiptap/react';
import EditorComponent from './EditorComponent';
import { Dispatch, SetStateAction } from 'react';
import '../../../admin/dashboard/blog/create/Blog.scss';

type Blog = {
  id: number;
  title: string;
  sub_title: string;
  content: string;
  img: string;
};

type BlogFormProps = {
  initialData?: Blog;
};

interface BlogFormComponentProps {
  initialData: BlogFormProps | null;
  setEditData: Dispatch<SetStateAction<BlogFormProps | null>>;
  setBlogs: Dispatch<SetStateAction<Blog[]>>;
  blogs: Blog[];
}

export default function BlogForm({ initialData, setEditData, setBlogs, blogs }: BlogFormComponentProps) {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState(' <h3>Typing something...</h3>');
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)
  const route = useRouter();
  const handleBackToDashboard = () => {
    if (setEditData) setEditData(null)
    else
      route.push("/admin/dashboard");
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

  const handleFileChange = (e: any) => {
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
      console.log(initialData)
      setTitle(initialData.title);
      setSubTitle(initialData.sub_title);
      setContent(initialData.content);
      setImg(initialData.img);
        
      console.log(initialData)
      if (editor) {
        editor.commands.setContent(initialData.content);  
      }
    }
  }, [initialData,editor]);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData();

    if (initialData)  // for update case
      formData.append('id', initialData?.id)

    formData.append('title', title);
    formData.append('subtitle', subTitle);
    formData.append('created_at', new Date().toISOString());
    formData.append('updated_at', new Date().toISOString());

    const textContent = editor?.getText().trim();
    if (!textContent) {
      setError("Content is required.");
      return;
    }

    if (editor) formData.append('content', editor.getHTML());
    if (file) formData.append('image', file);

    try {
      const res = await fetch("/api/blogs", {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Unknown error occurred');
      }

      if (initialData?.id) {
        setBlogs(blogs => blogs.map(blog => blog.id === initialData?.id ? {
          ...blog,
          title: formData.get('title'),
          sub_title: formData.get('subtitle'),
          content: formData.get('content'),
          img: formData.get('image'),
          updatedAt: formData.get('updated_at'),
        } : blog));
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
      <h2 className="text-xl font-semibold">{initialData ? 'Update Blog' : 'Create Blog'}</h2>

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
        <label className="block text-sm font-medium">Sub Title</label>
        <input
          type="text"
          value={subTitle}
          onChange={e => setSubTitle(e.target.value)}
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
          <div className="mt-4 max-w-[50%] max-h-[50%]">
            <p className="text-sm  mb-1">Preview:</p>
            <img src={preview} alt="Preview" className="max-w-full h-auto rounded" />
          </div>
        )}
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





