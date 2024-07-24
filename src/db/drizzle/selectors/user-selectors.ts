import { formatDate } from "../helpers/dates";
import { UserSchema } from "../schemas";

export const userDtoSelectBuilder = {
    id: UserSchema.uuid,
    email: UserSchema.email,
    username: UserSchema.username,
    firstName: UserSchema.firstName,
    lastName: UserSchema.lastName,
    createAt: formatDate(UserSchema.createAt, 'DD/MM/YYYY')
};

export const userDtoColumnsSelector = {
    uuid: true,
    email: true,
    username: true,
    firstName: true,
    lastName: true,
    createAt: true,
}