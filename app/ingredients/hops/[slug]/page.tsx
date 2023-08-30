//import { PrismaClient } from "@prisma/client";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";
import { HopDisplay } from "../_components/HopDisplay";
import prisma from "@/lib/prisma";
import { DataDisplay } from "@/components";

export const metadata: Metadata = {
  title: "LNK: Hop Display",
};
//const prisma = new PrismaClient();
export default async function HopDisplayPage({
  params,
}: {
  params: { slug: string };
}) {
  const hop = await prisma.hop.findFirst({
    where: { slug: { equals: params.slug } },
  });

  return (
    <Box>
      <DataDisplay title={hop?.name} data={hop} />
      <Link href="edit">EditHop</Link>
    </Box>
  );
}
