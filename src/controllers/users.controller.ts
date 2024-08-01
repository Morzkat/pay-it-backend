import { Router } from "express";
import UsersService from "../services/users.service";

const router = Router();
const usersService = new UsersService();

router.get('/', async (req, res, next) => {
    try {
        const users = await usersService.getUsers();
        res.json({ users: users })
    } catch (error) {
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const token = await usersService.login( { username: "r_test", password: "sdfsdf" } )
    } catch (error) {
        
    }
});



export default router;