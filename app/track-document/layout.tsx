import type { Metadata } from "next";
import Navbar from "@/app/user-page/navigation/Navbar";
import Footer from "../user-page/navigation/Footer";

export const metadata: Metadata = {
  title: "SDO Nueva Vizcaya DocuTrack Management System",
  description: "Generated by create next app",
};

export default function TrackDocumentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center p-8 overflow-hidden">
        {children}
      </section>
      <Footer />
    </div>
  );
}
