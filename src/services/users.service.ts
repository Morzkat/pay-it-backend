import { db } from "../db/drizzle/db";
import { UserSchema } from "../db/drizzle/schemas";
import { formatDate } from "../db/drizzle/helpers/dates";
import { LoginUserDto, UserDto } from "../models/user.model";
import { and, eq, or } from "drizzle-orm";
import { userDtoColumnsSelector, userDtoSelectBuilder } from "../db/drizzle/selectors/user-selectors";

export default class UserService {

    async getUsers(): Promise<UserDto[]> {
        try {
            const users = await db.select({ ... userDtoSelectBuilder}).from(UserSchema) as UserDto[]
            return users;
        } catch (error) {
            throw error;
        }
    }
    
    async login(user: LoginUserDto): Promise<void> {
        try {
            const result = await db.query.UserSchema.findFirst({
                columns: userDtoColumnsSelector,
                where: and(
                    or(
                        eq(UserSchema.username, user.username),
                        eq(UserSchema.email, user.username)
                    ),
                    eq(UserSchema.password, user.password)
                )
            });

            if(result) {
                //log user....
            }

            
        } catch (error) {
            throw error;
        }
    }
}
