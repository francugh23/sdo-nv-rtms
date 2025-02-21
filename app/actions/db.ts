"use server"

import mysql from "mysql2/promise";

// @ts-ignore
let connection;
export const createConnection = async () => {
  // @ts-ignore
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
    })
  }
  return connection;
}