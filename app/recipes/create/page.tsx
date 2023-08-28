import { PrismaClient } from "@prisma/client/edge";
import { Box } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Create Recipe",
};
const prisma = new PrismaClient();
export default async function RecipeCreatePage() {
  //const recipes = await prisma.recipe.findMany();

  //console.log(recipes);
  return (
    <Box>
      Create Recipe
      <Link href="/recipes">Recipes</Link>
    </Box>
  );
}
