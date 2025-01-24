
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface LoginResponse {
    token: string;
    user: UserActivation;
}

export interface AuthState extends User {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
}

