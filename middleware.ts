import { NextResponse } from "next/server";
import { createConnection } from "./app/actions/db";

// @ts-ignore
export async function middleware(req) {
  const token = req.cookies.get("authToken"); // Replace with your session mechanism
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Decode the token or fetch user data from the database
  const user = await getUserFromToken(token); // Implement this function
  if (!user || user.role !== "Admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

// @ts-ignore
async function getUserFromToken(token) {
  // Fetch user data from the database or verify the token
  // For simplicity, assume the token contains the user's ID
  const connection = await createConnection();
  const [rows] = await connection.execute("SELECT * FROM Users WHERE Id = ?", [
    token.userId,
  ]);
  return rows[0];
}
