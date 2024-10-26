import RegisterForm from '@/components/register-form';
import { Pathlink } from '@/lib/pathlink';
import Link from 'next/link';

export default function RegisterPage() {
    return (
        <div className='space-y-5 border p-5'>
            <h1 className='text-xl'>Cadastrar-se</h1>
            <RegisterForm />

            <div className='space-y-5'>
                <p className='border-b'></p>
                <p>
                    Já tem uma conta?{' '}
                    <Link
                        href={Pathlink.LOGIN}
                        className='text-blue-500'
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}
