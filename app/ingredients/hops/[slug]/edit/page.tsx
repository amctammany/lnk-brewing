import { PrismaClient } from "@prisma/client";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";
import { HopForm } from "../../_components";

export const metadata: Metadata = {
  title: "LNK: Hop Edit",
};
const prisma = new PrismaClient();
export default async function HopEditPage({
  params,
}: {
  params: { slug: string };
}) {
  const hop = await prisma.hop.findFirst({
    where: { slug: { equals: params.slug } },
  });

  if (hop == null) {
    return <Box>Bad Hop</Box>;
  }
  return (
    <Box>
      HopEditPage
      <HopForm hop={hop}></HopForm>
      <Link href="edit">EditHop</Link>
    </Box>
  );
}
