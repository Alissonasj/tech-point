import { z } from 'zod';

export const signInSchema = z.object({
    registration: z.string().min(1, 'A matrícula é obrigatória'),
    password: z.string().min(1, 'A senha é obrigatória')
});

export type SignInType = z.infer<typeof signInSchema>