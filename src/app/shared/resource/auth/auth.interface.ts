export interface LoginModel {
    access_token: string;
}

export interface UserLoginModel {
    username: string;
    password: string;
}

export interface UserCreateModel extends UserLoginModel {
    email: string;
    name?: string;
    lastName?: string;
    showPesonalData: boolean;
}

