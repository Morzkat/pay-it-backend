import { relations, sql } from "drizzle-orm";
import { pgTable, serial, uuid, timestamp, decimal, text, integer } from "drizzle-orm/pg-core";
import { Users } from "./user.schema";

export const Transactions = pgTable('transactions', {
    id: serial('id').primaryKey(),
    uuid: uuid('uuid').default(sql`gen_random_uuid()`),
    amount: decimal('amount', { precision: 12, scale: 2 }).notNull(),
    user: integer('user_id').notNull().references(() => Users.id),
    status: integer('status_id').notNull().references(() => TransactionStatus.id),
    category: integer('category_id').notNull().references(() => TransactionCategories.id),
    createAt: timestamp('create_at').notNull().defaultNow(),
    updateAt: timestamp('update_at').notNull().defaultNow(),
})

export const TransactionStatus = pgTable('transaction_status', {
    id: serial('id').primaryKey(),
    name: text('name').unique().notNull(),
    createAt: timestamp('create_at').notNull().defaultNow(),
    updateAt: timestamp('update_at').notNull().defaultNow(),
})

export const TransactionCategories = pgTable('transaction_categories', {
    id: serial('id').primaryKey(),
    name: text('name').unique().notNull(),
    createAt: timestamp('create_at').notNull().defaultNow(),
    updateAt: timestamp('update_at').notNull().defaultNow(),
})

export const TransactionRelations = relations(Transactions, ({ one }) => ({
    status: one(TransactionStatus, {
        fields: [Transactions.status],
        references: [TransactionStatus.id],
        relationName: 'transaction_status_relationship'
    }),
    category: one(TransactionCategories, {
        fields: [Transactions.category],
        references: [TransactionCategories.id],
        relationName: 'transaction_categories_relationship'
    }),
    user: one(Users, {
        fields:[Transactions.user],
        references: [Users.id]
    })
}))

