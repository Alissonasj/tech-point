import { signOut } from '@/auth';
import { Pathlink } from '@/lib/pathlink';
import { LogOutIcon } from 'lucide-react';
import { Button } from './ui/button';

export function SignOut() {
    return (
        <form
            action={async () => {
                'use server';
                await signOut({
                    redirectTo: Pathlink.LOGIN
                });
            }}
        >
            <Button type='submit' variant={'secondary'} className='text-[#020F1F]'>
                <LogOutIcon />
            </Button>
        </form>
    );
}
