'use client';

import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
    ColumnDef,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PartnerForm from './PartnerForm';

type Partner = {
    img: string;
    createdAt: string;
    updatedAt: string;
};

export default function PartnerTable() {
    const [Partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);
    const [createNewPartner, setCreateNewPartner] = useState<Boolean>(false);
    const [editData, setEditData] = useState<Partner | null>(null);
    const route = useRouter();

    useEffect(() => {
        fetch('/api/partners?admin=1', { credentials: 'include' })
            .then(res => res.json())
            .then(data => setPartners(data))
            .finally(() => setLoading(false));
    }, []);

    const columns: ColumnDef<Partner>[] = [
        { header: 'Id', accessorKey: 'id' },
        {
            header: 'Image',
            accessorKey: 'img',
            cell: info => (
                info.getValue() as string ?
                    (<Image src={info.getValue() as string} alt="Partner" width={200} height={200} />) : ('')
            ),
        },
        {
            header: 'Created At',
            accessorKey: 'createdAt',
            cell: info => new Date(info.getValue() as string).toLocaleString(),
        },
        {
            header: 'Updated At',
            accessorKey: 'updatedAt',
            cell: info => new Date(info.getValue() as string).toLocaleString(),
        },

        {
            header: 'Action',
            accessorKey: 'action',
            cell: info => {
                const PartnerId = info.row.original.id;

                return (
                    <div className='flex gap-5'>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer disabled:opacity-50"
                            onClick={() => handleUpdate(PartnerId)}>
                            Update
                        </button>
                        <button
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer disabled:opacity-50"
                            onClick={() => handleDelete(PartnerId)}
                        >
                            Delete
                        </button>
                    </div>
                );
            },
        },
    ];

    const table = useReactTable({
        data: Partners,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const handleAddNewPartner = () => setCreateNewPartner(true);

    const handleUpdate = async (id: number) => {
        const editData = Partners.find((val) => val.id === id);
        setEditData(editData as Partner)
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this Partner?')) return;

        try {
            const res = await fetch(`/api/partners?id=${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            if (!res.ok) {
                const errorData = await res.json();
                alert('Failed to delete Partner: ' + (errorData.error || res.statusText));
                return;
            }

            // On success, remove the Partner from state to update UI immediately
            setPartners(prev => prev.filter(Partner => Partner.id !== id));
        } catch (error) {
            alert('Error deleting Partner');
            console.error(error);
        }
    };


    return (
        editData !== null ?
            (<PartnerForm initialData={editData} setEditData={setEditData} Partners={Partners} setPartners={setPartners} />) :
            (createNewPartner ? <PartnerForm setCreateNewPartner={setCreateNewPartner} Partners={Partners} setPartners={setPartners} /> :
                (
                    <div className="p-4">
                        <div className="flex items-center justify-between py-5">
                            <h1 className="text-2xl font-bold mb-4">Partner List:</h1>
                            <button
                                onClick={handleAddNewPartner}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                            >
                                Add +
                            </button>
                        </div>

                        <table className="w-full  text-sm text-left border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                            <thead className="bg-gray-100 text-gray-700">
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th className="p-3 border-b border-gray-300 font-semibold" key={header.id}>
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map((row, rowIdx) => (
                                    <tr
                                        key={row.id}

                                    >
                                        {row.getVisibleCells().map(cell => (
                                            <td className="p-3 border-b border-gray-200" key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                        {/* Pagination Controls */}
                        <div className="mt-4 flex gap-4 items-center">
                            <button
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                                className="bg-blue-500 cursor-pointer text-white px-3 py-1 rounded disabled:opacity-50"
                            >
                                Prev
                            </button>
                            <span>
                                Page {table.getState().pagination.pageIndex + 1} of{' '}
                                {table.getPageCount()}
                            </span>
                            <button
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                                className="bg-blue-500 cursor-pointer text-white px-3 py-1 rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                ))
    );
}
