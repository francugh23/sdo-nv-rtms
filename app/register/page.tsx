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

const RegistrationPage = () => {
  return (
    <>
      <div className="absolute w-full h-full bg-orange-700 opacity-75">
        <div className="h-full w-full bg-transparent z-10 p-4 flex justify-center items-center">
          <Card className="h-[full] w-[500px] z-40 shadow-lg bg-white">
            <CardHeader className="items-center justify-center flex">
              <Image src={logo} alt="NVGCHS Logo" width={200} height={200} />
              <div className="text-2xl font-bold">Join SDO-RTMS Today!</div>
              <p className="text-sm">Records Tracking ang Management System</p>
            </CardHeader>
            <CardContent className="flex justify-center items-center gap-10">
              <div className="flex flex-col gap-4 text-center">
                <Input type="email" id="email" placeholder="Email" />
                <Input type="password" id="password" placeholder="Password" />
                <Input type="name" id="name" placeholder="Name" />
                <Input type="phone" id="cpNumber" placeholder="CP#" />
                <Button className="w-[300px] rounded-full bg-black text-white">
                  Sign Up
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm mr-1">Have an account already?</p>
              <Link href="/login" className="text-sm text-blue-600">
                Log in
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};
export default RegistrationPage;
