import { PrismaClient } from "@prisma/client/edge";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Create Hop",
};
const prisma = new PrismaClient();
export default async function HopCreatePage() {
  //const hops = await prisma.hop.findMany();

  //console.log(hops);
  return (
    <Box>
      Ingredients
      <Link href="/hops">Hops</Link>
    </Box>
  );
}
