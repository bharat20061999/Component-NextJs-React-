import React, { useState } from "react";
import { SectionIdEnum } from "../../../types";
import {
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  {
    text: "About",
    to: SectionIdEnum.about,
  },
  {
    text: "Skills",
    to: SectionIdEnum.skills,
  },
  {
    text: "Projects",
    to: SectionIdEnum.projects,
  },
  {
    text: "Contact",
    to: SectionIdEnum.contact,
  },
];
export const Navigation: React.FC = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);
  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map(({ to, text }) => {
          return (
            <Link href={`#${to}`} key={to} underline="none" color="white">
              <Button color="inherit">{text}</Button>
            </Link>
          );
        })}
      </Box>

      {!isSmUp && (
        <IconButton color="inherit" onClick={onOpenHandler}>
          <MenuIcon />
        </IconButton>
      )}
      <Menu
        sx={{ mt: "45px" }}
        open={open}
        onClose={onCloseHandler}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {navItems.map(({ to, text }) => {
          return (
            <MenuItem key={to}>
              <Button href={`#${to}`} color="inherit">
                {text}
              </Button>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
