import { PrismaClient } from "@prisma/client";
import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <List sx={{ bgcolor: "background.paper" }}>
        {recipes.map((recipe) => (
          <ListItemButton
            href={`/recipes/${recipe.author.username}/${recipe.slug}`}
            component={Link}
            key={recipe.id}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={recipe.name}
              secondary={recipe.author.name}
            />
          </ListItemButton>
        ))}
      </List>
      Recipes
      <Link href="/hops">Hops</Link>
    </Box>
  );
}
