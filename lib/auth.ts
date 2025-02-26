// import jwt from "jsonwebtoken";

// interface JwtPayload {
//   userId: number;
//   role: string;
// }

// export const signJwt = (payload: JwtPayload): string => {
//   return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "24h" });
// };

// export const verifyJwt = (token: string): JwtPayload | null => {
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
//     return decoded;
//   } catch (error) {
//     console.error("JWT verification failed:", error);
//     return null;
//   }
// };