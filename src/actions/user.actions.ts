'use server';

import { getUserFromDb } from '@/lib/get-user-from-db';
import { SignInType } from '@/lib/zod';
import { auth, signIn } from '../auth';

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

export async function registerEntry() {
    const session = await auth();

    const payload = {
        matricula: session?.user.registration
    };

    const response = await fetch(
        'http://localhost:8080/banco/registrarentrada',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return response.ok;
}

export async function registerUpdate(path: string) {
    const session = await auth();

    const payload = {
        matricula: session?.user.registration
    };

    const response = await fetch(`http://localhost:8080/banco/${path}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.ok;
}
