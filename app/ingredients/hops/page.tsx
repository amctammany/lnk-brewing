import { PrismaClient } from "@prisma/client/edge";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Hops",
};
const prisma = new PrismaClient();
export default async function HopsIndexPage() {
  const hops = await prisma.hop.findMany();

  return (
    <Box>
      Hops
      <Link href="/hops">Hops</Link>
    </Box>
  );
}
