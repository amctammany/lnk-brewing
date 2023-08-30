import { Hop, PrismaClient } from "@prisma/client";
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
  async function update(formData: FormData) {
    "use server";

    console.log(formData);
    console.log(formData.entries());
    const data = Object.fromEntries(formData);
    const d: Partial<Hop> = ["name", "description"].reduce((acc, k) => {
      acc[k] = data[k];
      return acc;
    }, {} as any);
    await prisma.hop.update({
      where: { slug: params.slug },
      data: d,
    });
  }
  const hop = await prisma.hop.findFirst({
    where: { slug: params.slug },
  });

  if (hop == null) {
    return <Box>Bad Hop</Box>;
  }
  return (
    <Box>
      HopEditPage
      <HopForm hop={hop} action={update}></HopForm>
      <Link href="edit">EditHop</Link>
    </Box>
  );
}
