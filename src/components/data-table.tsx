type DataTableProps = {
    tableDataList: {
        id: number;
        data: string;
        entrada: string;
        pausa: string;
        retorno: string;
        saida: string;
        horas: string;
    }[];
};

export default function DataTable({ tableDataList }: DataTableProps) {
    return (
        <tbody>
            {tableDataList.map((tableData) => {
                return (
                    <tr key={tableData.id} className='odd:bg-white even:bg-slate-100'>
                        <td className='border p-2'>{tableData.data}</td>
                        <td className='border p-2'>{tableData.entrada}</td>
                        <td className='border p-2'>{tableData.pausa}</td>
                        <td className='border p-2'>{tableData.retorno}</td>
                        <td className='border p-2'>{tableData.saida}</td>
                        <td className='border p-2'>{tableData.horas}</td>
                    </tr>
                );
            })}
        </tbody>
    );
}
