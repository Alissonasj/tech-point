import { auth } from '@/auth';
import LoginForm from '@/components/login-form';
import { buttonVariants } from '@/components/ui/button';
import { Pathlink } from '@/lib/pathlink';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export default async function LoginPage() {
    const session = await auth();

    if (session?.user) redirect(Pathlink.DASHBOARD);

    return (
        <div className='space-y-5 border p-5'>
            <h1 className='text-xl'>Login</h1>
            <LoginForm />

            <div className='space-y-5'>
                <p className='border-b'></p>
                <p>Se você ainda não tem uma conta</p>
                <Link
                    href={Pathlink.REGISTER}
                    className={twMerge(
                        buttonVariants({ variant: 'outline' }),
                        'rounded-none shadow-[4px_4px_rgba(0,0,0,0.5)]'
                    )}
                >
                    Cadastre-se
                </Link>
            </div>
        </div>
    );
}
