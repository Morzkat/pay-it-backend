import { Column } from "drizzle-orm";

export default interface ColumnsMap {
    [key: string]: Column
}