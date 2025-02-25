import { NextResponse } from "next/server";
import { getConnection } from "@/lib/db";
import { LoginCredential, Role } from "@/app/login/types";
import { signJwt } from "@/lib/auth";

export async function POST(request: Request) {
  const { username, password }: LoginCredential = await request.json();

  try {
    const connection = await getConnection();
    const [rows]: any = await connection.execute(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { status: 401 }
      );
    }

    const user = rows[0];
    const role: Role = user.Role;

    let redirectPath = "/";
    if (role === "Admin") {
      redirectPath = "/admin-page";
    } else if (role === "Records") {
      redirectPath = "/records-page";
    } else if (role === "Guest") {
      redirectPath = "/user-page";
    }

    const token = signJwt({ userId: user.id, role });

    const response = NextResponse.json({
      success: true,
      redirectPath,
    })

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict", 
      maxAge: 60 * 60 * 24, 
    });

    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}