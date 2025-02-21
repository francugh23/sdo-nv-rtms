"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
import { ChevronsUpDown, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AppSidebarFooter = () => {
  const router = useRouter();
  return (
    <SidebarFooter className="bg-white">
      <SidebarMenu className="cursor-pointer">
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="h-[50px]">
                <Avatar className="w-7 h-7 rounded-md">
                  <AvatarImage src={undefined} />
                  <AvatarFallback>RTMS</AvatarFallback>
                </Avatar>
                <span className="flex flex-col">
                  <p className="text-xs font-bold">{"Johannes Franco"}</p>
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: "0.65rem",
                    }}
                  >
                    {"francojohannes23@gmail.com"}
                  </p>
                </span>
                <ChevronsUpDown size={20} />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              className="bg-white border rounded-md w-[200px] p-2 text-sm my-1"
            >
              <DropdownMenuItem>
                <SidebarMenuButton
                  onClick={() => router.push("/login")}
                >
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
