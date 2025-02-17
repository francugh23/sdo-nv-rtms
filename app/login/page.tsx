import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo.png";

export default function LoginPage() {
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

        <Input
          type="text"
          placeholder="Email or username"
          className="w-full bg-white border-gray-800 text-black placeholder:text-gray-600 focus:border-black-700 rounded-full py-6 px-4"
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full bg-white border-gray-800 text-black placeholder:text-gray-600 focus:border-black-700 rounded-full py-6 px-4"
        />

        <Button className="w-full bg-black text-white hover:bg-gray-700 rounded-full py-6 font-bold text-lg">
          <Link href="/user-page">Next</Link>
        </Button>
        <Button
          variant="outline"
          className="w-full bg-transparent border-gray-300 text-black hover:bg-gray-100 rounded-full py-6"
        >
          Forgot password?
        </Button>

        <p className="text-gray-500 text-center">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
