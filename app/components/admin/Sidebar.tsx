'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from "./Sidebar.module.scss";

const navLinks = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/dashboard/blog", label: "Blogs" },
    { href: "/admin/dashboard/partner", label: "Partners" },
    { href: "/admin/dashboard/testimonial", label: "Testimonials" },
    // Add more links as needed
]

export default function Sidebar() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            {/* Mobile hamburger toggle */}
            <div className="md:hidden fixed top-4 left-4 z-[9999]">
                <button
                    onClick={() => setOpen(!open)}
                    className="p-2 rounded-md bg-[#1f1f1f] text-white border border-white"
                    aria-label="Toggle Menu"
                >
                    {open ? (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Sidebar */}
            <aside
            className={`
            bg-gradient-to-b from-[#1f1f1f] via-[#FF0084]/70 to-transparent
            fixed top-0 left-0 h-full w-64 z-50 h-screen
            text-white px-4 pt-20 space-y-4
            transform transition-transform duration-500 ease-in-out
            ${open ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 md:static md:block lg:mt-0 md:mt-0 sm:mt-[10%] mt-[10%]
            `}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)} // auto-close on mobile click
                        className={`
              block px-4 py-2 rounded-md uppercase
              ${pathname === link.href
                                ? 'bg-[#FF0084] font-bold'
                                : 'hover:bg-[#ff008450] transition-colors'
                            }
            `}
                    >
                        {link.label}
                    </Link>
                ))}
            </aside>
        </>
    )
}
