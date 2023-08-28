import { PrismaClient } from "@prisma/client/edge";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Recipes",
};
const prisma = new PrismaClient();
export default async function RecipesIndexPage() {
  const recipes = await prisma.recipe.findMany();

  console.log(recipes);
  return (
    <Box>
      Recipes
      <Link href="/hops">Hops</Link>
    </Box>
  );
}
