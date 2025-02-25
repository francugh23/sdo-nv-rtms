'use server'

import { LoginCredential } from "../login/types"
import { redirect } from "next/navigation"

export async function checkCredentials(data: LoginCredential) {


  return redirect("/user-page");
}