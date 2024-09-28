import RegisterForm from '@/components/register-form';
import { buttonVariants } from '@/components/ui/button';
import { Pathlink } from '@/lib/pathlink';
import Link from 'next/link';

export default function RegisterPage() {
    return (
        <div className='m-20 flex justify-between gap-5'>
            <div className='grow'>
                <h1>Bem-vindo(a)!</h1>
                <p>Se você já tem uma conta</p>
                <Link
                    href={Pathlink.LOGIN}
                    className={buttonVariants({ variant: 'outline' })}
                >
                    Tela de login
                </Link>
            </div>
            <div className='grow space-y-5 border p-5'>
                <h1 className='text-xl'>Cadastrar conta</h1>
                <RegisterForm />
            </div>
        </div>
    );
}
