type Transaction = {
    id: number;
    amount: number;
    status: string;
    category: string;
    createAt: string;
    updateAt: string;
}

type TransactionCategory = {
    id: string;
    name: string;
    createAt: string;
    updateAt: string;
}

type TransactionStatus = {
    id: string;
    name: string;
    createAt: string;
    updateAt: string;
}

export const enum TransactionColumns {
    user = 'user',
    amount = 'amount',
    status = 'status',
    category = 'category',
    createAt = 'createAt',
    updateAt = 'updateAt'
}

export { Transaction, TransactionStatus, TransactionCategory }