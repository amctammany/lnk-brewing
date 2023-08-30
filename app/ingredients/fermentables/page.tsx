//import { PrismaClient } from "@prisma/client";
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
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "LNK: Fermentables",
};
//const prisma = new PrismaClient();
export default async function FermentablesIndexPage() {
  const fermentables = await prisma.fermentable.findMany();

  return (
    <Box>
      Fermentables
      <List sx={{ bgcolor: "background.paper" }}>
        {fermentables.map((fermentable) => (
          <ListItemButton
            href={fermentable.urlString}
            component={Link}
            key={fermentable.id}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={fermentable.name}
              secondary={fermentable.country}
            />
          </ListItemButton>
        ))}
      </List>
      <Link href="/fermentables">Fermentables</Link>
    </Box>
  );
}
