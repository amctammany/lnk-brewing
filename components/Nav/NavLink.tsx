import { Button } from "@mui/material";
export interface NavLinkProps {
  children: string;
}
export const NavLink = ({ children }: NavLinkProps) => (
  <Button key={children} sx={{ my: 2, display: "block", color: "#fff" }}>
    {children}
  </Button>
);
