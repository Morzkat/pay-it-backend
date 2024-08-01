import { formatDate, toNumber } from "../helpers/dates";
import { TransactionCategories, Transactions, TransactionStatus } from "../schemas";

export const transactionDtoSelector = {
    id: Transactions.uuid,
    amount: toNumber(Transactions.amount),
    status: TransactionStatus.name,
    category: TransactionCategories.name,
    createAt: formatDate(Transactions.createAt, 'DD/MM/YYYY'),
    updateAt: formatDate(Transactions.updateAt, 'DD/MM/YYYY')
}

