export interface LoginModel {
    token: string;
}

export interface UserLoginModel {
    username: string;
    password: string;
}

export interface UserCreateModel extends UserLoginModel {
    email: string;
    name?: string;
    lastName?: string;
    phone?: number;
    age?: number;
}

