import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
    interface User extends DefaultUser {
        registration?: string;
    }

    interface Session {
        user: {
            id?: string;
            registration?: string;
        } & DefaultSession['user'];
    }
}
