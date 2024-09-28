import { z } from 'zod';

export const signInSchema = z.object({
    registration: z.string().min(3, 'Campo obrigatório: Mínimo 3 caracteres'),
    password: z.string().min(4, 'Campo obrigatório: Mínimo 4 caracteres')
});

export type SignInType = z.infer<typeof signInSchema>