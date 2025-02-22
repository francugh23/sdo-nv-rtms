"use server";

import mysql from "mysql2/promise";

export const createPool = mysql.createPool({
  connectionLimit: 500,
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
});

export const getPoolConnection = async () => {
  try {
    const connection = await createPool.getConnection();
    return connection;
  } catch (e) {
    console.error("Error getting database connection: ", e);
    throw e
  }
}