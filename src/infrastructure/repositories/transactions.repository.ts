import BaseRepository, { SqlFilter } from "./base.repository";
import { TransactionDto } from "../../models/dtos/transaction.dto";
import { TransactionCategories, Transactions, TransactionStatus, Users } from "../db/drizzle/schemas";
import { transactionDtoSelector } from "../db/drizzle/selectors/transaction-selector";
import { eq } from "drizzle-orm";
import { db } from "../db/drizzle/db";
import { createDrizzleSqlFilter } from "../db/drizzle/helpers/filter-creator.helper";

export default class TransactionsRepository extends BaseRepository<TransactionDto> {

    constructor() {
        super();
        this.table = Transactions;
        this.dtoSelector = transactionDtoSelector;
        this.columns = {
            user: Transactions['user'],
            amount: Transactions['amount'],
            user_uuid: Users.uuid
        }
    }

    async find(filter?: SqlFilter | undefined): Promise<TransactionDto[]> {

        let query = db.select({ ...transactionDtoSelector })
            .from(Transactions)
            .innerJoin(Users, eq(Transactions.user, Users.id))
            .innerJoin(TransactionStatus, eq(Transactions.status, TransactionStatus.id))
            .innerJoin(TransactionCategories, eq(Transactions.category, TransactionCategories.id));

        if (filter) query.where(createDrizzleSqlFilter(filter));

        const transactions = await query as TransactionDto[];
        return transactions;
    }
}