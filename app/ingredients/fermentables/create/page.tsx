import { PrismaClient } from "@prisma/client";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Create Fermentable",
};
const prisma = new PrismaClient();
export default async function FermentableCreatePage() {
  //const fermentables = await prisma.fermentable.findMany();

  //console.log(fermentables);
  return (
    <Box>
      Ingredients
      <Link href="/fermentables">Fermentables</Link>
    </Box>
  );
}
