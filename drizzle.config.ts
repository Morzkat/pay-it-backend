import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/db/drizzle/schemas.ts',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://postgres:0ec10cf380c8426b8ca0c417fe0ad07b@localhost:5432/pay-it-db',
    },
  });