export type UserDto = {
    id: string,
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    createAt: string;
}

export type CreateUserDto = {
    email: string;
    username: string;
    password: string;
}

export type LoginUserDto = {
    username: string;
    password: string;
}