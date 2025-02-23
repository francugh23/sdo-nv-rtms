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

const TrackDocumentPage = () => {
  return (
    <Card className="w-full max-w-[900px] bg-white rounded-2xl p-2">
      <CardTitle className="font-semibold tracking-wide uppercase">
        Track Document
      </CardTitle>
      <div className="flex items-center justify-between mb-4">
        <CardDescription>Track your necessary documents here.</CardDescription>
        <SearchDocument />
      </div>
      <CardContent className="mx-auto space-y-4">
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};
export default TrackDocumentPage;
