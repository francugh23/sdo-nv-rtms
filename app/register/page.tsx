import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export const autoGeneratedID = () => {
  const year = new Date().getFullYear().toString().slice(-2);
  const randomDigits = Math.floor(10000 + Math.random() * 90000).toString();
  return `${year}-${randomDigits}`;
}

const RegistrationPage = () => {
  return (
    <div className="w-full max-w-[600px] bg-white rounded-2xl p-8">
      <div className="max-w-[380px] mx-auto space-y-4">
        <div className="flex justify-center mb-4">
          <Image
            src={logo || "/placeholder.svg"}
            alt="NVGCHS Logo"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-3xl font-bold mb-0 text-black text-center">
          Join SDO-RTMS Today!
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Records Tracking and Management System
        </p>

        <Input
          type="text"
          placeholder="UserID"
          className="w-full bg-white border-gray-800 text-black placeholder:text-gray-600 focus:border-black-700 rounded-full py-6 px-4"
          value={autoGeneratedID()}
          readOnly
        />
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
        <Input
          type="password"
          placeholder="Confirm Password"
          className="w-full bg-white border-gray-800 text-black placeholder:text-gray-600 focus:border-black-700 rounded-full py-6 px-4"
        />

        <Button className="w-full bg-black text-white hover:bg-gray-700 rounded-full py-6 font-bold text-lg">
          <Link href="/user-page">Sign Up</Link>
        </Button>
        <p className="text-gray-500 text-center">
          Have an account already?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
export default RegistrationPage;
