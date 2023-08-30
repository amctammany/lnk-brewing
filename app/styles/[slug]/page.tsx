import { Box, Typography } from "@mui/material";
import Link from "next/link";

//export const dynamic = "force-dynamic";
import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { DataDisplay } from "@/components";

export const metadata: Metadata = {
  title: "LNK: Style Display",
};
export default async function StyleDisplayPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params);
  const style = (await prisma.style.findFirst({
    where: {
      slug: { equals: params.slug },
    },
  })) || { urlString: "" };

  return (
    <Box>
      <DataDisplay title="Style" data={style} />
      <Link href="edit">Edit</Link>
    </Box>
  );
}
