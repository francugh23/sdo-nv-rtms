"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "./records-table/data-table";
import { columns, data } from "./records-table/columns";
// import { AddUserModal } from "./add-user-modal";
// import SearchUser from "./components/search";

const AdminPage = () => {
  return (
    <Card className="w-full max-w-[1200px] bg-white rounded-2xl p-2">
      <CardHeader>
        <CardTitle className="font-semibold tracking-wide uppercase">
          List of Documents
        </CardTitle>
        <div className="flex items-center justify-between mb-4">
          <CardDescription>
            Track all transmitted documents awaiting action.
          </CardDescription>
          {/* <SearchUser /> */}
        </div>
      </CardHeader>
      <CardContent className="mx-auto space-y-4">
        <DataTable columns={columns} data={data} />
      </CardContent>
      <CardFooter className="flex flex-row justify-end space-x-2">
        {/* <AddUserModal /> */}
      </CardFooter>
    </Card>
  );
};
export default AdminPage;
