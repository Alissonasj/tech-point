import { getUser } from '@/actions/user.actions';
import { Pathlink } from '@/lib/pathlink';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: Pathlink.LOGIN
    },

    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                registration: {},
                password: {}
            },

            authorize: async (credentials, request) => {
                const { registration, password } = credentials;                

                const { user, success } = await getUser(
                    registration as string,
                    password as string
                );                
                
                if (!success) return null;

                if (success)
                    return {
                        id: user?.matricula,
                        name: user?.nome
                    };

                return null;
            }
        })
    ]
});
