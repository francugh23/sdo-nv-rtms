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

const LoginPage = () => {
  return (
    <>
      <div className="absolute w-full h-full bg-orange-700 opacity-75">
        <div className="h-full w-full bg-transparent z-10 p-4 flex justify-center items-center">
          <Card className="h-[470px] w-[500px] z-40 shadow-lg bg-white">
            <CardHeader className="items-center justify-center flex">
              <Image src={logo} alt="NVGCHS Logo" width={200} height={200} />
              <div className="text-2xl font-bold">Welcome to SDO-RTMS!</div>
              <p className="text-sm">Records Tracking ang Management System</p>
            </CardHeader>
            <CardContent className="flex justify-center items-center gap-10">
              <div className="flex flex-col gap-4 text-center">
                <Button className="w-[300px] rounded-full bg-black text-white">
                  <Link href="/user-page">Login</Link>
                </Button>
                <Button className="w-[300px] rounded-full bg-white border-l-black text-black">
                  Forgot password?
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm mr-1">Don't have an account yet?</p>
              <Link href="/register" className="text-sm text-blue-600">Register Now</Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
