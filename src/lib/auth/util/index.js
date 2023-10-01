'use server';

import { api } from '@/lib/auth/axios';

export async function refreshToken(token) {
    // To prevent unnecessary requests to the server
    const refresh = token.refresh;

    if (!refresh) {
        return {
            ...token,
            error: 'No refresh token provided',
        };
    }

    try {
        const { data, status } = await api.post('/users/token/refresh/', {
            refresh,
        });

        if (status === 200) {
            return {
                ...token,
                access: data.access,
                refresh: data.refresh,
            };
        }
    } catch (error) {
        return {
            ...token,
            error: error,
        };
    }

    return null;
}

export async function sendPhoneOTP(phone, country_code) {
    const phoneWithCountryCode = country_code + phone;

    try {
        const { data, status } = await api.post('/accounts/otp/send/', {
            phone: phoneWithCountryCode,
           
        });

        const response = data;
         response.status_code = status;
        return response;
    } catch (error) {
        const response = error.response ? error.response.data : {};
        response.status_code = 400;
        return response;
    }
}

export async function callUserWithOTP(phone, country_code) {
    const phoneWithCountryCode = country_code + phone;

    try {
        const { data, status } = await api.post('/users/otp/call/', {
            phone: phoneWithCountryCode,
           
        });

        const response= data;
         response.status_code = status;
        return response;
    } catch (error) {
        const response = error.response ? error.response.data : {};
        response.status_code = 400;
        return response;
    }
}

export async function verifyPhoneOTP({ phone, country_code, otp }) {
    const phoneWithCountryCode = country_code + phone;

    try {
        const { data } = await api.post('/users/otp/verify/', {
            phone: phoneWithCountryCode,
            token: otp,
        });

        const response = data;
        return response;
    } catch (error) {
        const response = error.response.data;
        return response;
    }
}

export async function userExistsWithPhone(phone, countryCode) {
    const phoneWithCountryCode = countryCode + phone;

    try {
        const { data } = await api.post('/users/exists/phone/', {
            phone: phoneWithCountryCode,
        });

        const response = data;
        return response;
    } catch (error) {
        const response = error.response.data;
        return response;
    }
}

export async function userExistsWithEmail(email) {
    try {
        const { data } = await api.get('/users/exists/email/' + email);

        const response = data;
        return response;
    } catch (error) {
        const response = error.response.data;
        return response;
    }
}

export async function registerUserWithPhone({
    phone,
    countryCode,
    otp,
    firstName,
    lastName,
    email,
    birth_date,
}) {
    const phoneWithCountryCode = countryCode + phone;

    try {
        const { data } = await api.post('/users/register/phone/', {
            phone: phoneWithCountryCode,
            token: otp,
            first_name: firstName,
            last_name: lastName,
            email,
            birth_date,
            country_code: countryCode,
        });

        const response = data;
        return response;
    } catch (error) {
        const response = error.response.data;
        return response;
    }
}

export async function registerUserWithEmail({
    firstName,
    lastName,
    email,
    birth_date,
    password,
}) {
    try {
        const { data } = await api.post('/users/register/email/', {
            first_name: firstName,
            last_name: lastName,
            email,
            birth_date,
            password,
        });

        const response = data;
        return response;
    } catch (error) {
        const response = error.response.data
        return response;
    }
}