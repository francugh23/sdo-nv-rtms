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

const UserPage = () => {
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
          Hello World
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Records Tracking and Management System
        </p>

        <p className="text-gray-500 text-center">
          Exit?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log out
          </Link>
        </p>
      </div>
    </div>
  );
};
export default UserPage;
