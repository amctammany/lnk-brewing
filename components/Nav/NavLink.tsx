import { Button } from "@mui/material";
import Link from "next/link";
export interface NavLinkProps {
  href?: string;
  children: string;
}
export const NavLink = ({ href, children }: NavLinkProps) => (
  <Button
    component={Link}
    href={`/${children.toLowerCase()}`}
    key={children}
    sx={{ my: 2, display: "block", color: "#fff" }}
  >
    {children}
  </Button>
);
