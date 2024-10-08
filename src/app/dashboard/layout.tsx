import { auth } from '@/auth';
import ActiveLink from '@/components/active-link';
import { SignOut } from '@/components/signout';
import { Pathlink } from '@/lib/pathlink';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) redirect(Pathlink.LOGIN);

    return (
        <div>
            <div className='mx-20'>
                <div className='flex justify-between bg-[#020F1F] px-5 py-5'>
                    <div className='text-zinc-100'>{`Matrícula: ${session.user?.registration}`}</div>
                    <div className='text-zinc-100'>{`Colaborador(a): ${session.user?.name}`}</div>
                    <div>
                        <SignOut />
                    </div>
                </div>
                <div className='flex'>
                    <div className='min-h-screen min-w-52 bg-[#020F1F] text-center'>
                        <aside>
                            <nav>
                                <ul className='flex flex-col gap-2'>
                                    <li>
                                        <ActiveLink href={Pathlink.DASHBOARD}>
                                            Ponto
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink href={Pathlink.LOGS}>
                                            Histórico
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </nav>
                        </aside>
                    </div>
                    <div className='ml-5 mt-5 grow'>{children}</div>
                </div>
            </div>
        </div>
    );
}
