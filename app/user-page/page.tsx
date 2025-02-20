import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const UserPage = () => {
  return (
    <Card className="w-full max-w-[600px] bg-white rounded-2xl p-8">
      <CardHeader>
        <CardTitle>Form Submission</CardTitle>
        <CardDescription>
          Fill in all the necessary information.
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Input type="text" placeholder="Name" />
          </div>
          <div className="col-span-1">
            <Input type="date" placeholder="Date and Time" readOnly/>
          </div>
          <div className="col-span-1">
            <Input type="text" placeholder="School/Agency/District" />
          </div>
          <div className="col-span-2">
            <Input type="text" placeholder="Document Title" />
          </div>
          <div className="col-span-1">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options</SelectLabel>
                  <SelectItem value="apple">Submit</SelectItem>
                  <SelectItem value="banana">Apply</SelectItem>
                  <SelectItem value="blueberry">Receive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-end space-x-2">
        <Button variant={"secondary"}>Cancel</Button>
        <Button variant={"default"}>Submit</Button>
      </CardFooter>
    </Card>
  );
};
export default UserPage;
