"use client";

import { CheckCheck, ChevronRight, File, FolderPlus, Home, Loader, LucideIcon, Mails, Search, Undo2 } from "lucide-react";
import Image from "next/image";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import AppSidebarFooter from "./sidebar-footer";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar
      variant="sidebar"
      collapsible="offcanvas"
      className="font-medium shadow"
    >
      {/* HEADER */}
      <SidebarHeader className="bg-[#77B254] min-h-[100px] p-0">
        <section className="w-full h-full flex gap-1 justify-center items-center">
          <Link href="/records-page" className="flex items-center">
            <span>
              <Image src="/logo.png" alt="NVGCHS Logo" width={75} height={75} />
            </span>
            <h1 className="text-2xl font-bold text-white">DocuTrack</h1>
            <span className="text-xs align-text-bottom text-gray-300">
              v1.0
            </span>
          </Link>
        </section>
        <Separator />
      </SidebarHeader>

      <SidebarContent className="bg-white gap-2">
        {/* NAVIGATION */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuSingle
              menuItems={[
                { menuTitle: "Home", url: "/records-page", menuIcon: Home },
              ]}
            />
            <SidebarMenuSingle
              menuItems={[
                {
                  menuTitle: "Data Entry",
                  url: "/data-entry",
                  menuIcon: FolderPlus,
                },
              ]}
            />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Transaction</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuSingle
              menuItems={[
                {
                  menuTitle: "Pending",
                  url: "/data-entry",
                  menuIcon: Loader,
                },
              ]}
            />
            <SidebarMenuSingle
              menuItems={[
                {
                  menuTitle: "Received",
                  url: "/data-entry",
                  menuIcon: CheckCheck,
                },
              ]}
            />
            <SidebarMenuSingle
              menuItems={[
                {
                  menuTitle: "Returned",
                  url: "/data-entry",
                  menuIcon: Undo2,
                },
              ]}
            />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  );
}

// SidebarMenuSingle.tsx
type SidebarMenuSingleType = {
  menuTitle: string;
  menuIcon?: LucideIcon;
  url: string;
};
interface SidebarMenuSingleProps {
  menuItems: SidebarMenuSingleType[];
}
function SidebarMenuSingle({ menuItems }: SidebarMenuSingleProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {menuItems.map((item: SidebarMenuSingleType, index: number) => {
        const isActive = pathname === item.url;

        return (
          <span key={index}>
            <SidebarMenu
              onClick={() => router.push(item.url)}
              className={`cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-50 ${
                isActive ? "bg-gray-100" : "active:bg-green-100"
              }`}
            >
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <span
                    className={`flex items-center gap-2 transition-all ease-in-out duration-200 hover:text-green-700 ${
                      isActive ? "text-primary" : "active:text-secondary"
                    }`}
                  >
                    {item.menuIcon && <item.menuIcon />}
                    <span>{item.menuTitle}</span>
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </span>
        );
      })}
    </>
  );
}

// SidebarMenuCollapsible.tsx
type SidebarMenuSubItem = {
  title: string;
  icon?: LucideIcon;
  url: string;
};
interface SidebarMenuCollapsible {
  menuTitle?: string;
  menuIcon?: LucideIcon;
  subMenus?: SidebarMenuSubItem[];
}
function SidebarMenuCollapsible({
  menuTitle,
  menuIcon: Icon,
  subMenus,
}: SidebarMenuCollapsible) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <SidebarMenu>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarMenuItem>
            <SidebarMenuButton
              className="peer-data-[active=true]/menu-button:opacity-100 hover:bg-gray-100 active:bg-gray-200"
              asChild
            >
              <CollapsibleTrigger className="flex items-center gap-2 hover:text-primary active:text-secondary">
                {Icon && <Icon size={16} />}
                {menuTitle || ""}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarMenuButton>
            <CollapsibleContent>
              <SidebarMenuSub>
                {subMenus?.map((subMenu, index) => {
                  const isActive = pathname === subMenu.url;

                  return (
                    <SidebarMenuSubItem key={index}>
                      <SidebarMenuButton
                        onClick={() => router.push(subMenu.url)}
                        className={`flex items-center gap-2 transition-all ease-in-out duration-300 hover:text-green-700 hover:bg-gray-50 ${
                          isActive
                            ? "bg-gray-100 text-green-700"
                            : "active:bg-green-100 active:text-secondary"
                        }`}
                      >
                        {subMenu.icon && <subMenu.icon />}
                        {subMenu.title}
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </>
  );
}
