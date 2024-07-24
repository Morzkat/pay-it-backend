// "id": 2,
// "email": "test2@dffd.com",
// "first_name": "test",
// "last_name": "l_test",
// "username": "r_test",
// "password": "sdfsdf",
// "createAt": "2024-07-18T09:51:24.720Z",
// "updateAt": "2024-07-18T09:51:24.720Z"



// export default class User {

//     // id: number;
//     // email: string;
//     // username: string;
//     // firstName: string;
//     // lastName: string;

//     // constructor(username, password, email) {
//     //     this.email = email;
//     //     this.firstName = firstName;
//     //     this.lastName = lastName;
//     //     this.username = username;
//     //     this.password = password;
//     // }
// }

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


