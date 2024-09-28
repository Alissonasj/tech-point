import { auth } from '@/auth';
import LoginForm from '@/components/login-form';
import { buttonVariants } from '@/components/ui/button';
import { Pathlink } from '@/lib/pathlink';

import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
    const session = await auth();

    if (session?.user) redirect(Pathlink.DASHBOARD);

    return (
        <div className='m-20 flex justify-between'>
            <div className='grow'>
                <h1>Bem-vindo(a)!</h1>
                <p>Se você ainda não tem uma conta</p>
                <Link
                    href={Pathlink.REGISTER}
                    className={buttonVariants({ variant: 'outline' })}
                >
                    Cadastre-se
                </Link>
            </div>
            <div className='grow space-y-5 border p-5'>
                <h1 className='text-xl'>Login</h1>
                <LoginForm />
            </div>
        </div>
    );
}
