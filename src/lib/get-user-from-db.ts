type User = {
    matricula: string;
    nome: string;
};

export async function getUserFromDb(registration: string, password: string) {
    const payload = {
        matricula: registration,
        senha: password
    };

    const response = await fetch('http://localhost:8080/usuario/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const user: User = await response.json();

    return { user, response };
}
