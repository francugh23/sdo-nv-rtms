"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
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
      </section>
    </nav>
  );
}
