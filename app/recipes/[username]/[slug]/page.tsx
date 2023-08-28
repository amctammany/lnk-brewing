import { PrismaClient } from "@prisma/client/edge";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Recipe Display",
};
const prisma = new PrismaClient();
export default async function RecipeDisplayPage({
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
      Recipe
      <Link href="edit">Edit</Link>
    </Box>
  );
}
