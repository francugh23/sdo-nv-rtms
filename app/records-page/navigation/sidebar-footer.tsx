"use client";

import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ChevronsUpDown, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const AppSidebarFooter = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
  }

  return (
    <SidebarFooter className="bg-white">
      <SidebarMenu className="cursor-pointer">
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="h-[50px]">
                <div className="flex flex-col justify-between w-full">
                  <p className="text-xs font-bold">{"Johannes Franco"}</p>
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: "0.65rem",
                    }}
                  >
                    {"francojohannes23@gmail.com"}
                  </p>
                </div>
                <ChevronsUpDown size={20} />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              className="bg-white border rounded-md w-[200px] p-2 text-sm my-1"
            >
              <DropdownMenuItem>
                <SidebarMenuButton onClick={() => router.push("/login")}>
                  <LogOut size={20} />
                  Sign Out
                </SidebarMenuButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
export default AppSidebarFooter;
