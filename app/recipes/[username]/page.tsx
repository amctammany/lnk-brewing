import { PrismaClient } from "@prisma/client/edge";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Recipes",
};
const prisma = new PrismaClient();
export default async function RecipesIndexPage({
  params,
}: {
  params: { username: string };
}) {
  const recipes = await prisma.recipe.findMany({
    where: {
      author: {
        username: { equals: params.username },
      },
    },
  });

  console.log(recipes);
  return (
    <Box>
      RecipeList
      <Link href="/hops">Hops</Link>
    </Box>
  );
}
