import { Router } from "express";
import TransactionsService from "../services/transactions.service";

const router = Router();

const transactionsService = new TransactionsService();

router.get('/:user', async (req, res, next) => {
    try {
        const transactions = await transactionsService.getTransactions('');
        res.json({ transactions: transactions })
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id: string } = req.params;
        const transactions = await transactionsService.getTransactions('');
        res.json({ transactions: transactions })
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res) => {
    try {

    } catch (error) {

    }
})

export default router