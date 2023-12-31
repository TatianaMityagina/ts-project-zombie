import {AuthBody} from "@/interfaces/auth/authBody";
import {APIService} from "@/services/APIService";
import {RegistrationBody} from "@/interfaces/registration/registrationBody";
import {localeStorageService} from "@/services/localeStorage";

type User = RegistrationBody;
export type UserData = Omit<User, 'password' | 'passwordConfirmation'>;

export enum StorageKeys {
    LOGIN = "login",
    CURRENT_USER = "currentUser",
    USERS = "users"
}

export default class AuthService {
    public async singUp(data: RegistrationBody): Promise<UserData | null> {
        const loginData = {
            email: data.email,
            password: data.password,
        }

        if (this.hasUser(data.email)) {
            return this.login(loginData)
        }

        await this.addUser(data)

        return this.login(loginData)
    }

    public async login(data: AuthBody): Promise<UserData | null> {
        await APIService.post(StorageKeys.LOGIN, data);
        const user = this.getUser(data.email)

        if (!user) {
            throw new Error('Пользователь не найден')
        }

        if (data.password !== user.password) {
            throw new Error('Не верный пароль')
        }

        localeStorageService.set(StorageKeys.CURRENT_USER, data.email)
        return this.getCurrentUser()
    }

    public logout(): void {
        localeStorageService.delete(StorageKeys.CURRENT_USER);
    }

    public getUser(email: string): User {
        const users =  localeStorageService.getJSON<Record<string, User>>(StorageKeys.USERS);
        return users[email]
    }

    public hasUser(email: string): boolean {
        const users = localeStorageService.getJSON(StorageKeys.USERS)
        return !!users[email]
    }

    public getCurrentUser(): UserData | null {
        const currentUser = localeStorageService.get(StorageKeys.CURRENT_USER)

        if (!currentUser) {
            return null
        }
        return this.getUser(currentUser)
    }

    protected async addUser(user: User): Promise<void>  {
        const users = await APIService.get('users');
        return APIService.post('users', { ...users, [user.email]: user })
    }
}
