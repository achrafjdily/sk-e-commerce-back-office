import { User } from './user.model';
export interface LoginResponse {
    access_token: string;
    expires_at : string;
    token_type : string;
    user : User;
}