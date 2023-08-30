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
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "LNK: Styles",
};
export default async function StylesIndexPage() {
  const styles = await prisma.style.findMany({});

  return (
    <Box sx={{ flexGrow: 1 }}>
      <List sx={{ bgcolor: "background.paper" }}>
        {styles.map((style) => (
          <ListItemButton
            href={style.urlString}
            component={Link}
            key={style.id}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={style.name} secondary={style.identifier} />
          </ListItemButton>
        ))}
      </List>
      Styles
      <Link href="/hops">Hops</Link>
    </Box>
  );
}
