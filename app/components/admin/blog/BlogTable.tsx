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

type Blog = {
    id: number;
    title: string;
    sub_title: string;
    content: string;
    img: string;
    createdAt: string;
    updatedAt: string;
    user: {
        id: number;
        name: string;
    };
};

export default function BlogTable() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const route = useRouter();

    useEffect(() => {
        fetch('/api/blogs', { credentials: 'include' })
            .then(res => res.json())
            .then(data => setBlogs(data))
            .finally(() => setLoading(false));
    }, []);

    const columns: ColumnDef<Blog>[] = [
        { header: 'Id', accessorKey: 'id' },
        { header: 'Title', accessorKey: 'title' },
        { header: 'Subtitle', accessorKey: 'sub_title' },
        {
            header: 'Content',
            accessorKey: 'content',
            cell: info => (info.getValue() as string).toString().slice(0, 100) + '...',
        },
        {
            header: 'Image',
            accessorKey: 'img',
            cell: info => (
                <Image src={info.getValue() as string} alt="blog" width={200} height={200} />
            ),
        },
        { header: 'Author', accessorFn: row => row.user?.name },
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
    ];

    const table = useReactTable({
        data: blogs,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const handleAddNewBlog = () =>  route.push('/admin/dashboard/blog/create');

    return (
        <div className="p-4">

            <div className='flex py-5 gap-[2%]'>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Blog List:</h1>
                </div>

                <div>
                    <button
                        onClick={() => handleAddNewBlog()}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: 'blue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Add +
                    </button>
                </div>
            </div>


            <table className="w-full text-sm text-left border border-gray-300 rounded-lg overflow-hidden shadow-sm">
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
    );
}
