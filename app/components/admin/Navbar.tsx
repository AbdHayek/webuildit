'use client';
import { useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';

export default function Navbar() {
    const router = useRouter();

    async function handleLogout() {
        await fetch('/api/logout', { method: 'POST' });
        router.push('/admin/login');
    }

    return (
        <>
            <nav className='2xl:justify-between xl:justify-between lg:justify-between justify-center'
             style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                padding: '1rem 2rem',
                borderBottom: '1px solid #ddd'
            }}>
                <div>
                    <img src="/assets/auth/logo_dashboard.png"
                        className="rounded-2xl"
                        alt='logo'
                        width={200}
                        height={200}
                    />
                </div>
                <button
                    onClick={() => handleLogout()}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        color: 'white',

                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    <FiLogOut size={18} />
                    Logout
                </button>
            </nav>
        </>
    );
}
