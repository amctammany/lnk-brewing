//import { PrismaClient } from "@prisma/client";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { DataDisplay } from "@/components";

export const metadata: Metadata = {
  title: "LNK: Fermentable Display",
};
//const prisma = new PrismaClient();
export default async function FermentableDisplayPage({
  params,
}: {
  params: { slug: string };
}) {
  const fermentable = await prisma.fermentable.findFirst({
    where: { slug: { equals: params.slug } },
  });

  return (
    <Box>
      <DataDisplay title={fermentable?.name} data={fermentable} />
    </Box>
  );
}
