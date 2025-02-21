"use server";
import { createConnection } from "@/app/actions/db";

export async function signOutAction() {
  console.log("User signed out");
}

export async function signInAction(username: string, password: string) {
  try {
    const connection = await createConnection();
    const [rows] = await connection.execute(
      "SELECT Id, Username, Password, Role FROM Users WHERE Username = ?",
      [username]
    );

    const user = rows[0];

    if (!user) {
      throw new Error("User not found");
    }

    if (password !== user.Password) {
      throw new Error("Invalid password");
    }

    return {
      id: user.Id,
      username: user.Username,
      role: user.Role,
    };
  } catch (error) {
    console.error("Sign-in error:", error);
    throw new Error("Authentication failed");
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.id) {
      throw new Error("No active session");
    }

    // Query the database for the user
    const connection = await createConnection();
    const [rows] = await connection.execute(
      "SELECT Id, Username, Role FROM Users WHERE Id = ?",
      [session.user.id]
    );

    const user = rows[0]; // Get the first matching user

    if (!user) {
      throw new Error("User not found");
    }

    return {
      id: user.Id,
      username: user.Username,
      role: user.Role,
    };
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

// Helper Function to Retrieve Session
async function getSession() {
  // Replace this with your actual session retrieval logic
  // For example, you can use cookies or localStorage
  const session = {
    user: {
      id: 1, // Replace with the actual user ID from the session
    },
  };
  return session;
}
