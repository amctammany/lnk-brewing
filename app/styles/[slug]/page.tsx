import { Box, Typography } from "@mui/material";
import Link from "next/link";

//export const dynamic = "force-dynamic";
import { Metadata } from "next";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "LNK: Style Display",
};
export default async function StyleDisplayPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params);
  const style = await prisma.style.findFirst({
    where: {
      AND: {
        slug: { equals: params.slug },
      },
    },
  });

  return (
    <Box>
      Style
      <Typography variant="h2">{style?.name}</Typography>
      <Link href="edit">Edit</Link>
    </Box>
  );
}
