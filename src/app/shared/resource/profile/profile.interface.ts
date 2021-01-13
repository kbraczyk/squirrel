export interface UserProfile extends AvatarModel {
    readonly id: number;
    avatar: string;
    firstName: string;
    lastName: string;
    showPersonalData: boolean;
    user?: User;
}

export interface AvatarModel {
    avatar: string;
}

export interface User {
    readonly id: number;
    email: string;
    created_date: string;
    isBlocked: false;
    username: string;
}
