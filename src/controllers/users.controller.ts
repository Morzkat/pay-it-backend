import { Router } from "express";
import UserService from "../services/users.service";

const router = Router();
const userService = new UserService();

router.get('/users', async (req, res, next) => {
    try {
        const users = await userService.getUsers();
        res.json({ users: users })
    } catch (error) {
        next(error);
    }
})

export default router;