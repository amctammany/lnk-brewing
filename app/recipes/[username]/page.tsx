import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "LNK: Recipes",
};
export default async function RecipesIndexPage({
  params,
}: {
  params: { username: string };
}) {
  const recipes = await prisma.recipe.findMany({
    include: {
      author: true,
    },
    where: {
      author: {
        username: { equals: params.username },
      },
    },
  });

  return (
    <Box>
      RecipeList for {params.username}
      <List>
        {recipes.map((recipe) => (
          <ListItem key={recipe.id}>
            {recipe.name} - {recipe.author.name}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
