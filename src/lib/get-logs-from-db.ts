import { LogsProps } from "@/@types/props";

export async function getLogsFromDb(registration: string) {
    const response = await fetch(`http://localhost:8080/banco/buscar/${registration}`, {
        method: 'GET',        
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const listLogs: LogsProps[] = await response.json();

    return listLogs;
}