import { Pathlink } from '@/lib/pathlink';
import { CircleParking } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-[#020F1F]'>
            <div className='flex items-center justify-between p-20'>
                <Link href={Pathlink.HOME}>
                    <h1 className='text-4xl uppercase text-zinc-100'>Tech Point</h1>
                </Link>
                <div>
                    <CircleParking className='text-zinc-100' />
                </div>
            </div>
        </footer>
    );
}
