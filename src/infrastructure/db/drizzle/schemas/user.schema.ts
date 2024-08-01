import { relations, sql } from "drizzle-orm";
import { serial, text, pgTable, uuid, timestamp } from "drizzle-orm/pg-core";
import { Transactions } from "./transaction.schema";

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    uuid: uuid('uuid').default(sql`gen_random_uuid()`),
    email: text("email").unique().notNull(),
    username: text("username").unique().notNull(),
    lastName: text("last_name"),
    firstName: text("first_name"),
    password: text("password"),
    createAt: timestamp('create_at').notNull().defaultNow(),
    updateAt: timestamp('update_at').notNull().defaultNow(),
});

export const UserRelations = relations(Users, ({ many }) => ({
    transactions: many(Transactions)
}));

