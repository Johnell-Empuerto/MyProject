import { NextResponse } from 'next/server';
import sql from 'mssql';

// Database configuration
const dbConfig: sql.config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER!,
  database: process.env.DB_NAME!,
  options: {
    encrypt: true,
    trustServerCertificate: true // For local dev
  }
};

// GET handler to fetch users
export async function GET(): Promise<NextResponse> {
  let pool: sql.ConnectionPool | undefined;
  try {
    // Connect to database
    pool = await sql.connect(dbConfig);
    
    // Query UserMaster table
    const result = await pool.request()
      .query('SELECT * FROM T_UserMaster');
    
    // Return results
    return NextResponse.json(result.recordset, { status: 200 });
  } catch (err: unknown) {
    console.error('SQL error', err);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  } finally {
    // Close connection
    if (pool) {
      await pool.close();
    }
  }
}