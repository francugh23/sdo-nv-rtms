import type { Metadata } from "next";
import Navbar from "@/app/client/navigation/Navbar";
import Footer from "../client/navigation/Footer";
import TrackDocumentNavbar from "./navigation/Navbar";
import TrackDocumentFooter from "./navigation/Footer";

export const metadata: Metadata = {
  title: "DocuTrack Track Document",
  description: "Generated by create next app",
};

export default function TrackDocumentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <TrackDocumentNavbar />
      <section className="flex-1 flex flex-col items-center justify-center p-8 overflow-hidden">
        {children}
      </section>
      <TrackDocumentFooter />
    </div>
  );
}
