export interface UserProfile {
    readonly id: number;
    avatar: string;
    firstName: string;
    lastName: string;
    showPersonalData: boolean;
    user?: User;
}

export interface User {
    readonly id: number;
    email: string;
    created_date: string;
    isBlocked: false;
    username: string;
}
