import { PrismaClient } from "@prisma/client/edge";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Hop Display",
};
const prisma = new PrismaClient();
export default async function HopDisplayPage({
  params,
}: {
  params: { slug: string };
}) {
  const hop = await prisma.hop.findFirst({
    where: { slug: { equals: params.slug } },
  });

  console.log(hop);
  return (
    <Box>
      HopDisplay
      <Link href="edit">EditHop</Link>
    </Box>
  );
}
