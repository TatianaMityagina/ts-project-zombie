export interface RegistrationBody {
    name: string;
    email: string,
    password: string;
    password_confirmation: string;
    role : RoleType;
}

export enum RoleType {
    User = 'user',
    Admin = 'admin',
}