import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schemas from './schemas';
 
export const sql = postgres("postgres://postgres:0ec10cf380c8426b8ca0c417fe0ad07b@0.0.0.0:5432/pay-it-db", { max: 1 });
export const db = drizzle(sql, { schema: schemas });