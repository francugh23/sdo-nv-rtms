"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";

export type Users = {
  UserID: string;
  Username: string;
  Password: string;
  Role: string;
  AddedBy: string;
  DateTime: Date;
};

export const data: Users[] = [
  {
    UserID: "25-00001",
    Username: "jemigallego",
    Password: "deped@2025",
    Role: "Guest",
    AddedBy: "Ken Guzman",
    DateTime: new Date(),
  },
  {
    UserID: "25-00002",
    Username: "yohanfranco",
    Password: "deped@2025",
    Role: "SDS",
    AddedBy: "Ken Guzman",
    DateTime: new Date(),
  },
  {
    UserID: "25-00003",
    Username: "jefersonsoto",
    Password: "deped@2025",
    Role: "ASDS",
    AddedBy: "Ken Guzman",
    DateTime: new Date(),
  },
];

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center">#</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
  },
  {
    accessorKey: "UserID",
    header: () => <div className="text-center">User ID</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("UserID")}</div>
    ),
  },
  {
    accessorKey: "Username",
    header: () => <div className="text-center">Username</div>,
    cell: ({ row }) => <div className="text-center">{row.getValue("Username")}</div>,
  },
  {
    accessorKey: "Password",
    header: "Password",
  },
  {
    accessorKey: "Role",
    header: "Role",
    cell: (row) => {
      return (
        <Badge
          className={
            (row.getValue() as string) === "ASDS"
              ? "font-bold bg-yellow-50 border border-yellow-200 text-yellow-800 hover:bg-yellow-100"
              : (row.getValue() as string) === "SDS"
              ? "font-bold bg-green-50 border border-green-200 text-green-800 hover:bg-green-100"
              : "font-bold bg-red-50 border border-red-200 text-red-800 hover:bg-red-100"
          }
        >
          {row.getValue() as string}
        </Badge>
      );
    },
  },
  {
    accessorKey: "AddedBy",
    header: "Added By",
  },
  {
    accessorKey: "DateTime",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date & Time
            <ArrowUpDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-right">
        {format(new Date(row.getValue("DateTime")), "MMM dd, yyyy hh:mm a")}
      </div>
    ),
  },
];
