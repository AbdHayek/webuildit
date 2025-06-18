'use client';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const router = useRouter();

    async function handleLogout() {
        await fetch('/api/logout', { method: 'POST' });
        router.push('/admin/login');
    }

    return (
        <>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
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
                        padding: '8px 16px',
                        backgroundColor: '#e53e3e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Logout
                </button>
            </nav>
        </>
    );
}
