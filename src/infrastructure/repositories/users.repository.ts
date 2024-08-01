import { LoginUserDto, UserDto } from "../../models/dtos/user.dto";
import BaseRepository from "./base.repository";
import { userDtoSelect } from "../db/drizzle/selectors/user-selectors";
import { db } from "../db/drizzle/db";
import { Users } from "../db/drizzle/schemas";
import { and, eq, or } from "drizzle-orm";

export default class UsersRepository extends BaseRepository<UserDto> {

    constructor() {
        super();
        this.table = Users;
        this.dtoSelector = userDtoSelect;
    }

    async findUser(userDto: LoginUserDto): Promise<UserDto> {
        const user = await this.findFirst(
            and(
                or(
                    eq(Users.username, userDto.username),
                    eq(Users.email, userDto.username)
                ),
                eq(Users.password, userDto.password)
            ),
        );
        return user;
    }

}