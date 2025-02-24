import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAtom } from "jotai";
import { Card } from "@/components/ui/card";
import { ActionDocument } from "../action-document";

interface DataTableProps<TData, TValue> {
  //   onUpdate: () => void;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchColumnKey?: string;
  searchPlaceholder?: string;
  showFooter?: boolean;
  footerContent?: React.ReactNode;
  paginationEnabled?: boolean;
  filterEnabled?: boolean;
  initialPageSize?: number; // Add pageSize prop
}

export function DataTable<TData, TValue>({
  columns,
  data,
  // searchColumnKey,
  // searchPlaceholder,
  //   onUpdate,
  showFooter = false,
  footerContent,
  paginationEnabled = true,
  filterEnabled = true,
  initialPageSize = 10, // Default to 10 rows per page
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  // Manage pagination state: pageIndex and pageSize
  const [pagination, setPagination] = React.useState({
    pageIndex: 0, // Starting from page 0 (first page)
    pageSize: initialPageSize,
  });

  // ADDED LINES

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: paginationEnabled
      ? getPaginationRowModel()
      : undefined,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: filterEnabled ? getFilteredRowModel() : undefined,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      pagination, // Add the pagination state here
      rowSelection,
      // globalFilter: searchTerm,
    },
    onPaginationChange: setPagination, // Add handler to update pagination state
    // onGlobalFilterChange: setSearchTerm,
  });

  return (
    <div>
      <Card className="p-0 rounded-md h-auto mt-2">
        <Table>
          <TableHeader className="bg-gray-100/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="whitespace-nowrap">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <ActionDocument
                      key={cell.id}
                      trigger={
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      }
                    />
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          {showFooter && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={columns.length} className="text-right">
                  {footerContent}
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </Card>

      {paginationEnabled && (
        <div className="flex items-center justify-between py-4 space-x-4">
          {/* Page Size Selector */}
          <div className="flex items-center space-x-2 text-xs">
            Showing {table.getRowModel().rows?.length} of {data.length} results.
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setPagination((prev) => ({
                  ...prev,
                  pageIndex: prev.pageIndex - 1,
                }))
              }
              disabled={!table.getCanPreviousPage()}
              className={`${
                !table.getCanPreviousPage()
                  ? "text-gray-300 border-gray-300"
                  : ""
              } bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500`}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* current page indicator */}
            <span className="text-sm text-gray-700">
              Page {pagination.pageIndex + 1} of {table.getPageCount()}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setPagination((prev) => ({
                  ...prev,
                  pageIndex: prev.pageIndex + 1,
                }))
              }
              disabled={!table.getCanNextPage()}
              className={`${
                !table.getCanNextPage() ? "text-gray-300 border-gray-300" : ""
              } bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500`}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
