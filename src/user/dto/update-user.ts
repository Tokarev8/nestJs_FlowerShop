

export interface UpdateUserDto {
    readonly login: string;
    readonly email: string;
    readonly password: string;
    readonly id: string;
    readonly status: boolean;

    readonly basketId: string[];
    readonly basketCategories: string[];

    readonly favoriteId: string[];
    readonly favoriteCategories: string[];
}


