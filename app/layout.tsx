import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./globals.css";
import { Inter } from "next/font/google";
import { Nav } from "@/components";
import { Box, Button } from "@mui/material";

export const metadata = {
  title: "Vercel Postgres Demo with Kysely",
  description:
    "A simple Next.js app with Vercel Postgres as the database and Kysely as the ORM",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={inter.variable}>
        <Nav />
        <Box
          component="main"
          sx={{ p: 3 }}
          className="relative flex min-h-screen flex-col items-center justify-center"
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
