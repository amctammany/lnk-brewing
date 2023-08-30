import { Box, Typography } from "@mui/material";
import Link from "next/link";

//export const dynamic = "force-dynamic";
import { Metadata } from "next";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "LNK: Recipe Display",
};
export default async function RecipeDisplayPage({
  params,
}: {
  params: { username: string; slug: string };
}) {
  console.log(params);
  const recipe = await prisma.recipe.findFirst({
    include: {
      author: {
        select: {
          name: true,
          username: true,
        },
      },
    },
    where: {
      AND: {
        author: { username: { equals: params.username } },
        slug: { equals: params.slug },
      },
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
