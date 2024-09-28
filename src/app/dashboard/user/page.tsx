import DataTable from '@/components/data-table';
import { Button } from '@/components/ui/button';

export default async function UserPage() {
    const tableDataList = [
        {
            id: 1,
            data: 'data1',
            entrada: 'entrada1',
            pausa: 'pausa1',
            retorno: 'retorno1',
            saida: 'saida1',
            horas: 'horas1'
        },
        {
            id: 2,
            data: 'data2',
            entrada: 'entrada2',
            pausa: 'pausa2',
            retorno: 'retorno2',
            saida: 'saida2',
            horas: 'horas2'
        }
    ];

    return (
        <div>
            <table className='w-full table-fixed border-collapse border text-center'>
                <thead>
                    <tr className='bg-slate-100'>
                        <th className='border p-2'>Data</th>
                        <th className='border p-2'>Entrada</th>
                        <th className='border p-2'>Pausa</th>
                        <th className='border p-2'>Retorno</th>
                        <th className='border p-2'>Saída</th>
                        <th className='border p-2'>Horas</th>
                    </tr>
                </thead>
                <DataTable tableDataList={tableDataList} />
            </table>
        </div>
    );
}
