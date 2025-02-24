import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-white text-gray-600 sticky bottom-0 left-0 right-0 py-4 border-t border-gray-200">
      {/* Logos */}
      <div className="flex items-center space-x-4 mb-2">
        <Image
          src="/deped_logo.svg" // Path to your DepEd logo
          alt="DepEd Logo"
          width={100}
          height={100}
          className="rounded-md"
        />
        {/* Copyright Text */}
        <p className="text-sm">
          © 2025 SDO-RTMS. All rights reserved.{" "}
          <Link href="/privacy" className="underline hover:text-gray-900">
            Privacy Policy
          </Link>
        </p>
        <Image
          src="/logo.png" // Path to your main logo
          alt="SDO-RTMS Logo"
          width={100}
          height={100}
          className="rounded-md"
        />
      </div>
    </footer>
  );
}
