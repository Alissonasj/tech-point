'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function DashboardPage() {
    const { toast } = useToast();

    function notify() {
        toast({
            description: 'Resgistro realizado com sucesso!',
            style: {
                backgroundColor: '#4BB543',
                color: 'white'
            }
        });
    }

    return (
        <div className='mb-5 grid grid-cols-2 gap-5'>
            <Button
                className='h-80 rounded-none text-5xl uppercase hover:bg-[#020F1F] hover:text-zinc-100'
                variant={'outline'}
                onClick={notify}
            >
                Entrada
            </Button>
            <Button
                className='h-80 rounded-none text-5xl uppercase hover:bg-[#020F1F] hover:text-zinc-100'
                variant={'outline'}
                onClick={notify}
            >
                Pausa
            </Button>
            <Button
                className='h-80 rounded-none text-5xl uppercase hover:bg-[#020F1F] hover:text-zinc-100'
                variant={'outline'}
                onClick={notify}
            >
                Retorno
            </Button>
            <Button
                className='h-80 rounded-none text-5xl uppercase hover:bg-[#020F1F] hover:text-zinc-100'
                variant={'outline'}
                onClick={notify}
            >
                Saída
            </Button>
        </div>
    );
}
