import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo.png";
import { checkCredentials } from "../actions/login";
import { LoginCredential } from "./types";

export default function LoginPage() {
  async function login(data: FormData) {
    "use server";
    console.log(JSON.stringify(data));
    const payload = {
      username: data.get("username"),
      password: data.get("password"),
    };
    await checkCredentials(payload as LoginCredential);
  }
  return (
    <div className="w-full max-w-[600px] bg-white rounded-2xl p-8">
      <div className="max-w-[380px] mx-auto space-y-6">
        <div className="flex justify-center mb-8">
          <Image
            src={logo || "/placeholder.svg"}
            alt="NVGCHS Logo"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-3xl font-bold mb-0 text-black text-center">
          Welcome to SDO-RTMS!
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Records Tracking and Management System
        </p>
        <form action={login} className="flex flex-col gap-2">
          <Input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full bg-white border-gray-800 text-black placeholder:text-gray-600 focus:border-black-700 rounded-full py-6 px-4"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-white border-gray-800 text-black placeholder:text-gray-600 focus:border-black-700 rounded-full py-6 px-4"
          />
          <Button
            type="submit"
            className="w-full py-6 mt-5 bg-black text-white hover:bg-gray-700 rounded-full font-bold text-lg"
          >
            Login
          </Button>
          <Button
            variant="outline"
            className="w-full bg-transparent border-gray-300 text-black hover:bg-gray-100 rounded-full py-6"
          >
            Forgot password?
          </Button>
        </form>

        <p className="text-gray-500 text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
