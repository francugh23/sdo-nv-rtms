'use server'

import { LoginCredential } from "../../types/login"
import { redirect } from "next/navigation"

export async function checkCredentials(data: LoginCredential) {


  return redirect("/user-page");
}