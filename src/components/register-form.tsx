'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function RegisterForm() {
    const formRegisterSchema = z.object({
        username: z.string().min(3, 'Campo obrigatório: Mínimo 3 caracteres'),
        password: z.string().min(6, 'Campo obrigatório: Mínimo 6 caracteres'),
        registrantion: z
            .string()
            .min(4, 'Campo obrigatório: Mínimo 4 caracteres')
    });

    const hookForm = useForm<z.infer<typeof formRegisterSchema>>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            username: '',
            password: '',
            registrantion: ''
        }
    });

    function handleSubmitRegister(data: z.infer<typeof formRegisterSchema>) {
        console.log(data);
    }

    const customStyle = 'rounded-none shadow-[4px_4px_rgba(0,0,0,0.5)]';

    return (
        <Form {...hookForm}>
            <form
                className='space-y-4'
                onSubmit={hookForm.handleSubmit(handleSubmitRegister)}
            >
                <FormField
                    control={hookForm.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Usuário</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='1234'
                                    className={customStyle}
                                    {...hookForm.register}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={hookForm.control}
                    name='registrantion'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Matícula</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='1234'
                                    className={customStyle}
                                    {...hookForm.register}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={hookForm.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='1234'
                                    className={customStyle}
                                    {...hookForm.register}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <Button
                    type='submit'
                    className={customStyle}
                >
                    Cadastrar
                </Button>
            </form>
        </Form>
    );
}
