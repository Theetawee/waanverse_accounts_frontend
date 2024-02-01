export interface User {
    country: string;
    date_joined: string;
    date_of_birth: string | null;
    email: string;
    first_name: string;
    id: number;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    last_login: string;
    last_name: string;
    phone: string | null;
}

export interface LoginResponse {
    access: string;
    refresh: string;
    user: User;
}


export interface SignupFormData{
    email: string;
    password: string;
    confirm_password: string;
    first_name: string;
    last_name: string;
    country: string;
}
