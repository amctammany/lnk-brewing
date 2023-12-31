import slugify from "slugify";
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    model: {
      $allModels: {
        addSlugToData(data: unknown & { name: string }) {
          const slug =
            data && Object.hasOwn(data, "name")
              ? slugify(data.name, { lower: true })
              : data.name;
          return { ...data, slug };
        },
      },
    },
    result: {
      recipe: {
        urlString: {
          needs: { slug: true, authorUsername: true },
          compute(recipe) {
            return `/recipes/${recipe.authorUsername}/${recipe.slug}`;
          },
        },
      },

      style: {
        urlString: {
          needs: { slug: true },
          compute(style) {
            return `/styles/${style.slug}`;
          },
        },
      },

      hop: {
        urlString: {
          needs: { slug: true },
          compute(hop) {
            return `/ingredients/hops/${hop.slug}`;
          },
        },
      },

      fermentable: {
        urlString: {
          needs: { slug: true },
          compute(fermentable) {
            return `/ingredients/fermentables/${fermentable.slug}`;
          },
        },
      },

      yeast: {
        urlString: {
          needs: { slug: true },
          compute(yeast) {
            return `/ingredients/yeasts/${yeast.slug}`;
          },
        },
      },
    },
  });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
export default prisma;
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
