import { LoginUserDto, UserDto } from "../models/dtos/user.dto";
import UsersRepository from "../infrastructure/repositories/users.repository";

export default class UsersService {

    _usersRepository: UsersRepository;
    constructor() {
        this._usersRepository = new UsersRepository();
    }

    async getUsers(): Promise<UserDto[]> {
        try {
            const users = await this._usersRepository.find();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async login(userDto: LoginUserDto): Promise<string> {
        try {
            const user = this._usersRepository.findUser(userDto);
            return 'user-token';
        } catch (error) {
            throw error;
        }
    }
}
