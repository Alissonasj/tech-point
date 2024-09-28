import { auth } from '@/auth';
import { Pathlink } from '@/lib/pathlink';
import { LayoutDashboardIcon, LogInIcon } from 'lucide-react';
import Link from 'next/link';

export default async function Header() {
    const session = await auth();

    return (
        <header className='sticky top-0 border-b bg-white'>
            <div className='mx-20 flex items-center justify-between py-5'>
                <Link href={Pathlink.HOME}>
                    <h1 className='text-4xl uppercase'>Tech Point</h1>
                </Link>
                <div>
                    <ul className='flex gap-5'>
                        {session && (
                            <li>
                                <Link href={Pathlink.DASHBOARD}>
                                    <LayoutDashboardIcon />
                                </Link>
                            </li>
                        )}
                        <li>
                            <Link href={Pathlink.LOGIN}>
                                <LogInIcon />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
