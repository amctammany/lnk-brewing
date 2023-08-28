// prisma/seed.ts

import { PrismaClient } from "@prisma/client/edge";
//import { links } from '../data/links'
const prisma = new PrismaClient();

async function main() {
  console.log(prisma);
  await prisma.hop.deleteMany();
  await prisma.recipe.deleteMany();
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

  await prisma.recipe.create({
    data: {
      name: "Recipe1",
      description: "Desc",
      authorId: user.id,
      slug: "recipe1",
    },
  });
  await prisma.recipe.create({
    data: {
      name: "Recipe2",
      description: "Desc",
      authorId: user.id,
      slug: "recipe2",
    },
  });
  await prisma.recipe.create({
    data: {
      name: "Recipe3",
      description: "Desc",
      authorId: kathy.id,
      slug: "recipe3",
    },
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
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
