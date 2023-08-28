import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

import { NavLink } from "./NavLink";
import Link from "next/link";

const navItems = ["Recipes", "Ingredients", "Data"];
export function Nav() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            href="/"
            component={Link}
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
            }}
          >
            LNK Brewing
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ ml: 2, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <NavLink href={`/${item}`} key={item}>
                {item}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
