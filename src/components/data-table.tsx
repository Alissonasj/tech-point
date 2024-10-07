import { LogsProps } from "@/@types/props";

type ListLogs = {
    listLogs: LogsProps[]
}

export default function DataTable({ listLogs }: ListLogs) {
    return (
        <tbody>
            {listLogs.map((logs) => {
                return (
                    <tr key={logs.dataJornada} className='odd:bg-white even:bg-slate-100'>
                        <td className='border p-2'>{logs.dataJornada}</td>
                        <td className='border p-2'>{logs.hrEntrada}</td>
                        <td className='border p-2'>{logs.pausaAlmoco}</td>
                        <td className='border p-2'>{logs.retornoAlmoco}</td>
                        <td className='border p-2'>{logs.hrSaida}</td>
                        <td className='border p-2'>{logs.hrsRealizadas}</td>
                    </tr>
                );
            })}
        </tbody>
    );
}
