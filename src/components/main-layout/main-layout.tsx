import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Navigation } from "./navigation/navigation";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box height="100vh">
      <AppBar position="fixed" sx={{ background: "black" }}>
        <Toolbar>
          <Box flexGrow={1}>
            <Link href="#" underline="none">
              <Box>
                <Typography color="white">Code With Bharat</Typography>
              </Box>
            </Link>
          </Box>
          <Navigation />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box>{children}</Box>
    </Box>
  );
};
