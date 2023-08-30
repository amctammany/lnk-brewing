import { Fermentable, PrismaClient } from "@prisma/client";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";
import { FermentableForm } from "../../_components";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "LNK: Fermentable Edit",
};
//const prisma = new PrismaClient();
export default async function FermentableEditPage({
  params,
}: {
  params: { slug: string };
}) {
  async function update(formData: FormData) {
    "use server";
    const data = Object.fromEntries(formData);
    const d: Fermentable = ["name", "description"].reduce((acc, k) => {
      acc[k] = data[k];
      return acc;
    }, {} as any);
    const res = await prisma.fermentable.update({
      where: { slug: params.slug },
      data: prisma.fermentable.addSlugToData(d),
    });
    redirect(res.urlString);
  }
  const fermentable = await prisma.fermentable.findFirst({
    where: { slug: params.slug },
  });

  if (fermentable == null) {
    return <Box>Bad Fermentable</Box>;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      FermentableEditPage
      <FermentableForm
        fermentable={fermentable}
        action={update}
      ></FermentableForm>
      <Link href="edit">EditFermentable</Link>
    </Box>
  );
}
