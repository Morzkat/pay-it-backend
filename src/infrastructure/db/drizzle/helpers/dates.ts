import { Column, sql } from "drizzle-orm";


export const formatDate = (column: Column, format: string) => {
    return sql<string>`TO_CHAR(${column}, ${format})`;
}

export const toNumber = (column: Column) => {
    return sql<number>`${column}::decimal`;
}



