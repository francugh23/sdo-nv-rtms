"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

const UserPage = () => {
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = () => {
    toast({
      title: "Form Submitted!",
      description: "Your form has been submitted to the Records Office.",
      action: (
        <ToastAction
          altText="Proceed to enrollment"
          onClick={() => router.push("/track-document")}
        >
          Track Document
        </ToastAction>
      ),
    });
  };

  return (
    <Card className="w-full max-w-[1200px] bg-white rounded-2xl p-8">
      <CardHeader>
        <CardTitle className="font-semibold tracking-wide uppercase">
          Document Submission Form
        </CardTitle>
        <CardDescription>
          Fill in all the necessary information.
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <Input type="text" placeholder="Name" />
          </div>
          <div className="col-span-1">
            <Input type="text" placeholder="School/Agency/District" />
          </div>
          <div className="col-span-1">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Document Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Options</SelectLabel>
                  <SelectItem value="transmitDocument">Transmit Document</SelectItem>
                  <SelectItem value="application">Application</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1">
            <Input
              type="text"
              placeholder="Date and Time"
              readOnly
              value={"February 21, 2025"}
              className="text-right"
            />
          </div>
          <Textarea
            className="col-span-4 min-h-[100px]"
            placeholder="Document Title/Purpose"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-end space-x-2">
        <Button variant={"secondary"}>Clear</Button>
        <Button variant={"default"} onClick={handleSubmit}>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};
export default UserPage;
