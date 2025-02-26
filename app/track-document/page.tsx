"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import SearchDocument from "./components/search";
import { DataTable } from "./table/data-table";
import { columns, data } from "./table/columns";
import { Label } from "@/components/ui/label";

const TrackDocumentPage = () => {
  
  return (
    <Card className="w-full max-w-[700px] bg-white rounded-2xl p-8 space-y-4">
      <CardTitle className="font-semibold tracking-wide uppercase item ml-6 text-xl">
        Track Your Document in a Few Clicks
      </CardTitle>
      <CardContent className="mx-auto space-x-2 flex items-center justify-center">
        <SearchDocument />
        <Button>Submit</Button>
      </CardContent>
      <CardFooter className="text-sm ">
        Track and trace your documents here! Input the tracking number provided
        for your transaction, and click submit to view tracking details..
      </CardFooter>
    </Card>
  );
};
export default TrackDocumentPage;
