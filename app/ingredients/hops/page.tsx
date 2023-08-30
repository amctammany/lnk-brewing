import { PrismaClient } from "@prisma/client";
import {
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LNK: Hops",
};
const prisma = new PrismaClient();
export default async function HopsIndexPage() {
  const hops = await prisma.hop.findMany();

  return (
    <Box>
      Hops
      <List sx={{ bgcolor: "background.paper" }}>
        {hops.map((hop) => (
          <ListItemButton
            href={`/ingredients/hops/${hop.slug}`}
            component={Link}
            key={hop.id}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={hop.name} secondary={hop.country} />
          </ListItemButton>
        ))}
      </List>
      <Link href="/hops">Hops</Link>
    </Box>
  );
}
