'use client';

import { registerEntry, registerUpdate } from '@/actions/user.actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function DashboardPage() {
    const { toast } = useToast();

    async function entry() {
        const isRegister = await registerEntry();

        if (isRegister) {
            toast({
                description: 'Entrada realizada com sucesso!',
                style: {
                    backgroundColor: '#4BB543',
                    color: 'white'
                }
            });
        } else {
            toast({
                description: 'Entrada não registrada.',
                variant: 'destructive',
                style: {
                    color: 'white'
                }
            });
        }
    }

    async function update(path: string) {
        const isUpdate = await registerUpdate(path);        

        if (isUpdate) {
            toast({
                description: 'Entrada realizada com sucesso!',
                style: {
                    backgroundColor: '#4BB543',
                    color: 'white'
                }
            });
        } else {
            toast({
                description: 'Entrada não registrada.',
                variant: 'destructive',
                style: {
                    color: 'white'
                }
            });
        }
    }

    return (
        <div className='mb-5 grid grid-cols-2 gap-5'>
            <Button
                className='h-80 rounded-none text-5xl uppercase hover:bg-[#020F1F] hover:text-zinc-100'
                variant={'outline'}
                onClick={entry}
            >
                Entrada
            </Button>
            <Button
                className='h-80 rounded-none text-5xl uppercase hover:bg-[#020F1F] hover:text-zinc-100'
                variant={'outline'}
                onClick={() => update('registrarpausa')}
            >
                Pausa
            </Button>
            <Button
                className='h-80 rounded-none text-5xl uppercase hover:bg-[#020F1F] hover:text-zinc-100'
                variant={'outline'}
                onClick={() => update('registrarretorno')}
            >
                Retorno
            </Button>
            <Button
                className='h-80 rounded-none text-5xl uppercase hover:bg-[#020F1F] hover:text-zinc-100'
                variant={'outline'}
                onClick={() => update('registrarsaida')}
            >
                Saída
            </Button>
        </div>
    );
}
