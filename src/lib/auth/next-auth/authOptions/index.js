import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';

import { api } from '@/lib/auth/axios';
import { refreshToken } from '@/lib/auth/util';

import jwtDecode from 'jwt-decode';

const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },

    pages: {
        //signOut: '/?logout=1',
        //error: '/?login=1&auth_error=1',
    },
    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),

        CredentialProvider({
            id: 'email-password',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'Email',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password',
                },
            },

            async authorize(credentials, req) {
                const { email, password } = credentials;
                try {
                    const { data, status } = await api.post('/users/verify/email/', {
                        email,
                        password,
                    });

                    const detail = data.detail;
                    if (status === 200) {
                        return {
                            access: detail.access,
                            refresh: detail.refresh,
                            //...detail.user,
                        };
                    }

                    return null;
                } catch (error) {
                    return null;
                }
            },
        }),

        CredentialProvider({
            id: 'phone-otp',
            name: 'Phone OTP',
            credentials: {
                phone: {
                    label: 'Phone',
                    type: 'text',
                    placeholder: 'Phone',
                },
                token: {
                    label: 'Token',
                    type: 'text',
                    placeholder: 'Token',
                },
                country_code: {
                    label: 'Country Code',
                    type: 'text',
                    placeholder: 'Country Code',
                },
            },

            async authorize(credentials, req) {
                const { phone, token, country_code } = credentials;

                const phoneWithCountryCode = country_code + phone;

                try {
                    const { data, status } = await api.post('/users/verify/phone/', {
                        phone: phoneWithCountryCode,
                        token,
                    });

                    const detail = data.detail;

                    if (status === 200) {
                        return {
                            access: detail.access,
                            refresh: detail.refresh,
                            ...detail.user,
                        };
                    }

                    return null;
                } catch (error) {
                    return null;
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                if (!user.access || !user.refresh) {
                    return token;
                }
                token.access = user.access;
                token.refresh = user.refresh;

                token.user = user;
            }

            const tokenAccess = token.access;
            const tokenRefresh = token.refresh;

            const decodedAccess = jwtDecode(tokenAccess);
            const decodedRefresh = jwtDecode(tokenRefresh);

            if (decodedAccess.exp * 1000 > Date.now()) {
                return Promise.resolve(token);
            }

            if (decodedRefresh.exp * 1000 < Date.now()) {
                return null;
            }

            const newToken = await refreshToken(token);
            if (newToken) {
                newToken.user = token.user;
                newToken.user.access = newToken.access;
                newToken.user.refresh = newToken.refresh;

                return newToken;
            }
        },

        async session({ session, token, user }) {
            if (!token) {
                return null;
            }
            
            session.access = token.access;
            session.refresh = token.refresh;
            session.error = token.error;
            

            session.user = token.user;
            return session;
        },

        async signIn({ user, account, profile, email, credentials, callback }) {
            if (credentials) {

                return true;
            }

            if (account) {
                const { access_token, id_token, provider } = account;
                try {
                    const response = await api.post('/users/verify/oauth/google/', {
                        access_token: id_token,
                    });

                    if (response.status === 200) {
                        account.user = response.data.user;
                        user.first_name = response.data.user.first_name;
                        user.last_name = response.data.user.last_name;
                        user.pk = response.data.user.pk;
                        user.access = response.data.access;
                        user.refresh = response.data.refresh;

                        return true;
                    }

                    return '/?login=1&auth_error=oauth';
                } catch (error) {
                    return '/?login=1&auth_error=oauth';
                }
            }

            return false;
        },
    },
};

export default authOptions;