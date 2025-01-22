import { LoginCredentials } from '../types/auth.types';

const BASE_URL = 'http://localhost:5173';

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

if (!response.ok) {
    throw new Error('Failed to log in. Please check your credentials.');
}

const data: LoginResponse = await response.json();
return data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};