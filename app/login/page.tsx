"use client"

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/public/app_logo.png";
import { checkCredentials } from "../actions/login";
import { LoginCredential } from "./types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [credentials, setCredentials] = useState<LoginCredential>({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    if (data.success) {
      router.push(data.redirectPath);
    } else {
      alert(data.error || "Login failed");
    }
  };

  return (
    <div className="w-full max-w-[600px] bg-[#F7F7F7] rounded-2xl p-8 shadow-2xl">
      <div className="max-w-[380px] mx-auto space-y-4">
        <div className="flex justify-center mb-8">
          <Image
            src={logo || "/placeholder.svg"}
            alt="NVGCHS Logo"
            width={150}
            height={150}
            className="shadow-2xl rounded-2xl"
          />
        </div>
        <h1 className="text-3xl font-bold mb-0 text-black text-center">
          Welcome to DocuTrack!
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Where you can track your document anywhere.
        </p>
        <form action={handleLogin} className="flex flex-col gap-2">
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
            className="w-full bg-white border-gray-800 text-black placeholder:text-gray-600 focus:border-black-700 rounded-full py-6 px-4"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="w-full bg-white border-gray-800 text-black placeholder:text-gray-600 focus:border-black-700 rounded-full py-6 px-4"
          />
          <Button
            type="submit"
            className="w-full py-6 mt-5 bg-black text-white hover:bg-gray-700 rounded-full font-bold text-lg"
          >
            Login
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
