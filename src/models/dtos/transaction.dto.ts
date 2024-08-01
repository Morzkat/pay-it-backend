export type TransactionDto = {
    id: string;
    amount: number;
    status: string;
    category: string;
    createAt: string;
    updateAt?: string;
}

export type TransactionCategoryDto = {
    id: string;
    name: string;
}

export type TransactionStatusDto = {
    id: string;
    name: string;
}

