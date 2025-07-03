'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react';
import '../Dashboard.scss';

type Partner = {
  id: number;
  img: string;
};

type PartnerFormProps = {
  initialData?: Partner;
};

interface PartnerFormComponentProps {
  initialData: PartnerFormProps | null;
  setEditData: Dispatch<SetStateAction<PartnerFormProps | null>>;
  setCreateNewPartner: Dispatch<SetStateAction<Boolean | null>>;
  setPartners: Dispatch<SetStateAction<Partner[]>>;
  Partners: Partner[];
}

export default function PartnerForm({ initialData, setEditData, setPartners, Partners, setCreateNewPartner }: PartnerFormComponentProps) {
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)
  const handleBackToDashboard = () => {
    if (setEditData) setEditData(null)
    else setCreateNewPartner(false)
  }

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)

    if (selectedFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(selectedFile)
      setImg('')
    }
  }

  useEffect(() => {
    if (initialData) {
      console.log(initialData)
      setImg(initialData.img);
      console.log(initialData)
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    const formData = new FormData();


    if (file) formData.append('image', file);
    else {
      setError("Image is required.");
      return;
    }

    if (initialData?.id)  // for update case
      formData.append('id', initialData?.id)

    formData.append('created_at', new Date().toISOString());
    formData.append('updated_at', new Date().toISOString());

    setLoading(true);
    setError('');
    try {
      const res = await fetch("/api/partners", {
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
        setPartners(Partners => Partners.map(Partner => Partner.id === initialData?.id ? {
          ...Partner,
          img: result.partner.img,
          updatedAt: result.partner.updatedAt
        } : Partner));
      } else {
        setPartners([
          {
            id: result.partner.id,
            img: result.partner.img,
            createdAt: result.partner.createdAt,
            updatedAt: result.partner.updatedAt
          },
          ...Partners
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
      <h2 className="text-xl font-semibold">{initialData ? 'Update Partner' : 'Create Partner'}</h2>

      <div>
        <label className="block text-sm font-medium">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 w-full border rounded px-3 py-2"
        />

        {preview && ( // show image preview
          <div className="mt-4 max-w-[50%] max-h-[50%]">
            <p className="text-sm  mb-1">Preview:</p>
            <img src={preview as string} alt="Preview" className="max-w-full h-auto rounded" />
          </div>
        )}
        {img && ( // show image for update
          <div className="my-4 max-w-[50%] max-h-[50%]">
            <p className="text-sm  mb-1">Image:
              <small className="text-white-500 text-sm ml-2 mr-2">
                (Recommended size: 367.500px × 225.887px)
              </small></p>
            <img src={img} alt="Preview" className="max-w-full h-auto rounded" />
          </div>
        )}
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





