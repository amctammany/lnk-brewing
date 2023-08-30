// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
//import { links } from '../data/links'

let prisma: any;
async function main() {
  prisma = new PrismaClient({
    datasources: {
      db: { url: "postgresql://lnk:neipa@localhost:5432/lnk?schema=public" },
    },
  });
  //prisma = new PrismaClient();
  console.log(prisma);
  //await prisma.hop.deleteMany();
  //await prisma.recipe.deleteMany();
  //await prisma.user.deleteMany();
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
        authorId: user.id,
        slug: "recipe1",
      },
      {
        name: "Recipe2",
        description: "Desc",
        authorId: user.id,
        slug: "recipe2",
      },
      {
        name: "Recipe3",
        description: "Desc",
        authorId: kathy.id,
        slug: "recipe3",
      },
      {
        name: "First Recipe",
        description: "Desc",
        authorId: kathy.id,
        slug: "first-recipe",
      },
    ],
  });

  await prisma.hop.createMany({
    data: [
      { name: "Apollo", slug: "apollo" },
      { name: "Citra", slug: "citra" },
      { name: "Mosaic", slug: "mosaic" },
    ],
  });
}

main()
  .then(async () => {
    if (prisma) await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    if (prisma) await prisma.$disconnect();
    process.exit(1);
  });
