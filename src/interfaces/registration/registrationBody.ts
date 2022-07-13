export interface RegistrationBody {
    name: string;
    email: string,
    password: string;
    passwordConfirmation: string;
    role : RoleType;
}

export type RoleType = 'user' | 'admin'