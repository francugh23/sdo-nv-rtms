"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";

export type Document = {
  trackingID: string;
  DID: string;
  DocumentTitle: string;
  Status: string;
  Location: string;
  DateTime: Date;
};
export const data: Document[] = [
  {
    trackingID: "001",
    DID: "DA001-02-21-25",
    DocumentTitle: "To attend MANCOM",
    Status: "Pending",
    Location: "Records Unit Office",
    DateTime: new Date(),
  },
  {
    trackingID: "001",

    DID: "DA001-02-21-25",
    DocumentTitle: "To attend MANCOM",
    Status: "Received",
    Location: "Records Unit Office",
    DateTime: new Date(),
  },
  {
    trackingID: "001",

    DID: "DA001-02-21-25",
    DocumentTitle: "To attend MANCOM",
    Status: "Received",
    Location: "CID",
    DateTime: new Date(),
  },
];

export const columns: ColumnDef<Document>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center">#</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
  },
  {
    accessorKey: "trackingID",
    header: () => <div className="text-center">Tracking Code</div>,
    cell: ({ row }) => <div className="text-center">{row.getValue("trackingID")}</div>,
  },
  {
    accessorKey: "DID",
    header: () => <div className="text-center">DocumentID</div>,
    cell: ({ row }) => <div className="text-center">{row.getValue("DID")}</div>,
  },
  {
    accessorKey: "DocumentTitle",
    header: "Document Title",
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: (row) => {
      return (
        <Badge
          className={
            (row.getValue() as string) === "Pending"
              ? "font-bold bg-yellow-50 border border-yellow-200 text-yellow-800 hover:bg-yellow-100"
              : (row.getValue() as string) === "Received"
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
    accessorKey: "Location",
    header: "Location",
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
