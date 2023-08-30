import { PrismaClient } from "@prisma/client";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Recipe Edit",
};
const prisma = new PrismaClient();
export default async function RecipeEditPage({
  params,
}: {
  params: { username: string; slug: string };
}) {
  const recipe = await prisma.recipe.findFirst({
    where: {
      author: { username: { equals: params.username } },
      slug: { equals: params.slug },
    },
  });

  console.log(recipe);

  return (
    <Box>
      RecipeEditPage
      <Link href="edit">Edit</Link>
    </Box>
  );
}
