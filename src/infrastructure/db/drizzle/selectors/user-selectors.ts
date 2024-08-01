import { formatDate } from "../helpers/dates";
import { Users } from "../schemas";

export const userDtoSelect = {
    id: Users.uuid,
    email: Users.email,
    username: Users.username,
    firstName: Users.firstName,
    lastName: Users.lastName,
    createAt: formatDate(Users.createAt, 'DD/MM/YYYY')
};
