import { JwtPayload, jwtDecode } from "jwt-decode";
import { LoginCredentials } from "../types/auth.types.ts";

const BASE_URL = 'http://localhost:3001';


class AuthService {

    getToken() {
        return localStorage.getItem('token') || "";
    }
    getProfile() {
        return jwtDecode(this.getToken());
    }

    loginUser(credentials: LoginCredentials) {
        return fetch(`${BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Login failed');
        })
        .then(({ token }) => {
            this.login(token);
            return token;
        });
    }    

    login(token: string) {
        localStorage.setItem('token', token);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('token');
        window.location.assign('/');
    }

    isTokenExpired(token: string) {
        try {
            const decodedToken = jwtDecode<JwtPayload>(token);
            const currentTime = Date.now() / 1000;
            if( decodedToken.exp && decodedToken.exp < currentTime) {
                return true;
            }
        } catch (error) {
        return false;
        }
    }
}

export default new AuthService();





