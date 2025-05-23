import { PrismaClient } from "./prisma";

declare global {
  var __prisma: PrismaClient | undefined;
}

const prisma = global.__prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.__prisma = prisma;

export { prisma };