import { PrismaClient } from "@prisma/client/edge";
import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Recipes",
};
const prisma = new PrismaClient();
export default async function RecipesIndexPage() {
  const recipes = await prisma.recipe.findMany({
    include: {
      author: true,
    },
  });

  console.log(recipes);
  return (
    <Box>
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id}>
            {recipe.name} - {recipe.author.name}
          </ListItem>
        ))}
      </List>
      Recipes
      <Link href="/hops">Hops</Link>
    </Box>
  );
}
