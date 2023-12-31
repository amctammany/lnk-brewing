import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Style, Hop, HopUsage, StyleCategory } from "@prisma/client";
import hops from "../../data/hops.json";
import styles from "../../data/styles.json";
import grains from "../../data/grains.json";

export async function GET(request: Request) {
  await prisma.hop.deleteMany();
  await prisma.fermentable.deleteMany();
  await prisma.recipe.deleteMany();
  await prisma.style.deleteMany();
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Alex",
      email: `testemail@gmail.com`,
      username: "test",
    },
  });
  const kathy = await prisma.user.create({
    data: {
      name: "Kathy",
      email: `Kathy@gmail.com`,
      username: "kathy",
    },
  });
  await prisma.recipe.createMany({
    data: [
      {
        name: "Recipe1",
        description: "Desc",
        authorUsername: user.username,
        slug: "recipe1",
      },
      {
        name: "Recipe2",
        description: "Desc",
        authorUsername: user.username,
        slug: "recipe2",
      },
      {
        name: "Recipe3",
        description: "Desc",
        authorUsername: kathy.username,
        slug: "recipe3",
      },
      {
        name: "First Recipe",
        description: "Desc",
        authorUsername: kathy.username,
        slug: "first-recipe",
      },
    ],
  });
  await prisma.style.createMany({
    data: styles.map(
      ({ category, history, ...style }) =>
        ({
          category: StyleCategory[category.toUpperCase() as StyleCategory],
          ...style,
        } as Style)
    ),
  });

  await prisma.fermentable.createMany({ data: grains });
  await prisma.hop.createMany({
    data: hops.map(({ usage, ...hop }) => ({
      usage: HopUsage[usage as HopUsage],
      ...hop,
    })),
  });
  return NextResponse.json({ message: "Reseeded DB" });
}
