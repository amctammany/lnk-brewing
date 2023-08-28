import { PrismaClient } from "@prisma/client/edge";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export const dynamic = "force-dynamic";
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
    include: { author: true },
    where: {
      author: { username: { equals: params.username } },
      slug: { equals: params.slug },
    },
  });

  return (
    <Box>
      Recipe
      <Typography variant="h2">{recipe?.name}</Typography>
      <Link href="edit">Edit</Link>
    </Box>
  );
}
