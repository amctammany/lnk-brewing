export const preferredRegion = "home";
//export const dynamic = "force-dynamic";
import { PrismaClient } from "@prisma/client/edge";
import { Box, Paper, Typography } from "@mui/material";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Ingredients",
};
const Item = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        //color: theme.palette.text.secondary,
        height: 128,
        lineHeight: "128px",
      }}
    >
      {children}
    </Typography>
  );
};
//const prisma = new PrismaClient();
export default async function IngredientsPage() {
  //const hops = await prisma.hop.findMany();

  return (
    <Box sx={{ flexGrow: 1 }}>
      Ingredients
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper component={Link} href="/ingredients/hops">
          <Item>Hops</Item>
        </Paper>

        <Paper component={Link} href="/ingredients/fermentables">
          <Item>Fermentables</Item>
        </Paper>
        <Paper component={Link} href="/ingredients/yeasts">
          <Item>Yeasts</Item>
        </Paper>
        <Paper component={Link} href="/ingredients/others">
          <Item>Other</Item>
        </Paper>
      </Box>
    </Box>
  );
}
