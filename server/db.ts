import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "../shared/schema.js";

neonConfig.webSocketConstructor = ws;

// Use a fallback database URL for development if not provided
const databaseUrl = process.env.DATABASE_URL || 'postgresql://localhost:5432/innovai_compass';

if (!process.env.DATABASE_URL) {
  console.warn('DATABASE_URL not set, using fallback. Database operations may fail.');
}

export const pool = new Pool({ connectionString: databaseUrl });
export const db = drizzle({ client: pool, schema });