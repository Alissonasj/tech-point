'use server';

import { getUserFromDb } from '@/lib/get-user-from-db';
import { SignInType } from '@/lib/zod';
import { signIn } from '../auth';

export async function getUser(registration: string, password: string) {
    const { user, response } = await getUserFromDb(registration, password);
    
    try {
        if (!user && !response.ok)
            return {
                success: false
            };

        return {
            success: true,
            user: user
        };
    } catch (e) {
        return {
            success: false
        };
    }
}

export async function login(formData: SignInType) {
    const { registration, password } = formData;

    try {
        const response = await signIn('credentials', {
            registration,
            password,
            redirect: false
        });

        return {
            success: true,
            data: response
        };
    } catch (e) {
        return {
            success: false,
            message: 'Crendenciais inválidas.'
        };
    }
}