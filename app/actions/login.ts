'use server'

import { LoginCredential } from "../login/types"
import { redirect } from "next/navigation"

export async function checkCredentials(data: LoginCredential) {

  // Add your login logic here

  return redirect("/user-page");
}