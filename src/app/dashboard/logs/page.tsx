import { auth } from '@/auth';
import DataTable from '@/components/data-table';
import { getLogsFromDb } from '@/lib/get-logs-from-db';

export default async function LogsPage() {
    const session = await auth();

    const listLogs = await getLogsFromDb(session?.user?.registration as string);

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
                <DataTable listLogs={listLogs} />
            </table>
        </div>
    );
}
