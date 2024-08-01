import { TransactionDto } from "../models/dtos/transaction.dto";
import TransactionsRepository from "../infrastructure/repositories/transactions.repository";
import { sqlOperators } from "../infrastructure/db/drizzle/helpers/filter-creator.helper";
import { TransactionColumns } from "../models/transaction.model";

export default class TransactionsService {

    _transactionsRepository: TransactionsRepository;
    
    constructor() {
        this._transactionsRepository = new TransactionsRepository();
    }

    async getTransactions(userId: string): Promise<TransactionDto[]> {
        try {
            const transactions = this._transactionsRepository.find({ 
                column: this._transactionsRepository.columns['user_uuid'],
                operator: sqlOperators.EQ,
                value: '84c4ba85-d499-4a30-838c-28ec874d85fb'
             });
            return transactions;
        } catch (error) {
            throw error;
        }
    }
}
