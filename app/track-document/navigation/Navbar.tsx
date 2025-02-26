"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function TrackDocumentNavbar() {
  return (
    <nav className="bg-[#77B254] sticky top-0 left-0 right-0 z-40 h-[4rem] flex justify-between items-center px-5 py-3">
      <section className="w-full h-full flex gap-1 justify-start items-center space-x-6">
        <Link href="/track-document" className="flex items-center">
          <span>
            <Image
              src="/app_logo.png"
              alt="DocuTrack Logo"
              width={50}
              height={50}
              className="rounded-lg shadow-2xl"
            />
          </span>
          <h1 className="text-3xl font-bold text-white ml-2">DocuTrack</h1>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-10">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="https://sdonuevavizcaya.com/"
                  className="text-white font-semibold hover:text-gray-300 transition-colors"
                  target="_blank"
                >
                  SDO Nueva Vizcaya Site
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/track-document"
                  className="text-white font-semibold hover:text-gray-300 transition-colors"
                >
                  Track Document
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </section>

      <div className="md:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-transparent">
                Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-2 bg-[#77B254] rounded-md space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/user-page"
                        className="text-white font-semibold hover:text-gray-300 transition-colors"
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {/* <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/track-document"
                        className="text-white font-semibold hover:text-gray-300 transition-colors"
                      >
                        Track Document
                      </Link>
                    </NavigationMenuLink>
                  </li> */}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
