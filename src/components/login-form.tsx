'use client';

import { login } from '@/actions/user.actions';
import { useToast } from '@/hooks/use-toast';
import { Pathlink } from '@/lib/pathlink';
import { SignInType, signInSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from './ui/form';
import { Input } from './ui/input';

export default function LoginForm() {
    const route = useRouter();
    const { toast } = useToast();

    const hookForm = useForm<SignInType>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            registration: '',
            password: ''
        }
    });

    async function handleSignIn(data: SignInType) {
        const response = await login(data);

        if (response.success) {
            route.push(Pathlink.DASHBOARD);
        } else {
            toast({
                variant: 'destructive',
                description: response.message
            });
        }
    }    

    return (
        <div>
            <Form {...hookForm}>
                <form
                    onSubmit={hookForm.handleSubmit(handleSignIn)}
                    className='space-y-4'
                >
                    <FormField
                        control={hookForm.control}
                        name='registration'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Matrícula</FormLabel>
                                <FormControl>
                                    <Input
                                        type='text'
                                        className='rounded-none shadow-[4px_4px_rgba(0,0,0,0.5)]'
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
                                <FormLabel>Matrícula</FormLabel>
                                <FormControl>
                                    <Input
                                        type='password'
                                        className='rounded-none shadow-[4px_4px_rgba(0,0,0,0.5)]'
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
                        className='rounded-none shadow-[4px_4px_rgba(0,0,0,0.5)]'
                    >
                        Enviar
                    </Button>
                </form>
            </Form>
        </div>
    );
}
