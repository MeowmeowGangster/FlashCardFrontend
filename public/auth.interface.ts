import { Response } from "../src/interfaces/servies.interface"
interface Token {
    token?: string | null;
}

export interface Credentials {
    username: string;
    password: string;
}

export interface NativeLoginResponse extends Response {
	token: string;
}

export interface AuthState extends Token {
    isLoading: boolean;
    isLoggedIn: boolean;
    error: string;
}