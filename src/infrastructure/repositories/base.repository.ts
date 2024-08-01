import { PgTable } from "drizzle-orm/pg-core";
import { db } from "../db/drizzle/db";
import { Column, SQL } from "drizzle-orm";
import { sqlOperators } from "../db/drizzle/helpers/filter-creator.helper";
import ColumnsMap from "../db/drizzle/common/ColumnsMap";


export default class BaseRepository<dto> {

    table: PgTable;
    dtoSelector: object;
    columns: ColumnsMap

    constructor() {}

    async find(filters: SqlFilter | undefined = undefined): Promise<dto[]> {
        try {
            const result = await db.select({ ...this.dtoSelector }).from(this.table).where(undefined) as dto[];
            if (!result) throw new Error('No records found...');

            return result;
        } catch (error) {
            throw error;
        }
    }

    async findFirst(filter: SQL | undefined = undefined): Promise<dto> {
        try {
            const result = await db.select({ ...this.dtoSelector }).from(this.table).where(filter)
            if (!result[0]) throw new Error('No record found...');

            return result[0] as dto;
        } catch (error) {
            throw error;
        }
    }

    getQueryFilter(filter: SqlFilter) {

    }
    // async add({ }): Promise<dto> { return null; }
    // async update({ }): Promise<boolean> { return true }
    // async remove({ }): Promise<boolean> { return true; }
}

export type SqlFilter = {
    operator: sqlOperators;
    column: Column;
    value: unknown;
    filters?: SqlFilter[];
}
