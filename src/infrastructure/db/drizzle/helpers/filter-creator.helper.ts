import { Column, SQL, and, eq, ilike, ne, or, sql } from "drizzle-orm";
import { SqlFilter } from "../../../repositories/base.repository";

enum sqlOperators {
    AND = 'and',
    OR = 'or',
    EQ = 'eq',
    NE = 'ne',
    ILIKE = 'ilke'
}

const SqlFilterMap: { [key in sqlOperators]: (...args: any[]) => SQL } = {
    [sqlOperators.AND]: (column?: Column, value?: string, query?: SQL) =>
        query ? sql` AND ( `.append(query).append(sql` )`) : sql` AND (${column} = ${value}) `,
    [sqlOperators.OR]: (column?: Column, value?: string, query?: SQL) =>
        query ? sql` OR ( `.append(query).append(sql` )`) : sql` OR (${column} = ${value}) `,
    [sqlOperators.EQ]: (column: Column, value: unknown) => sql` ${column} = ${value} `,
    [sqlOperators.NE]: (column: Column, value: unknown) => sql` ${column} != ${value} `,
    [sqlOperators.ILIKE]: (column: Column, value: string) => sql` ${column} LIKE '%${value}%' `
};
export const createDrizzleSqlFilter = (filter: SqlFilter): SQL => {
    if ((filter.operator === sqlOperators.AND || filter.operator === sqlOperators.OR) && filter.filters) {
        let query: SQL = sql``;
        for (const innerFilter of filter.filters) {
            query.append(SqlFilterMap[innerFilter.operator](innerFilter.column, innerFilter.value));
        }
        return SqlFilterMap[filter.operator](undefined, undefined, query);
    }
    return SqlFilterMap[filter.operator](filter.column, filter.value);
}

export { sqlOperators };
