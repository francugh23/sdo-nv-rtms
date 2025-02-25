import { JwtPayload } from "@/lib/auth";

declare module "next/server" {
  interface NextRequest {
    user?: JwtPayload; 
  }
}