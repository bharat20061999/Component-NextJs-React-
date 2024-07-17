import { Box, Typography } from "@mui/material";
import React from "react";

export const IntroSection: React.FC = () => {
  return (
    <Box py={3}>
      <Typography variant="h6">Hello , my name is</Typography>
      <Typography variant="h3" mb={1} fontWeight={500}>
        Bharat Kumar Sirvi
      </Typography>
      <Typography variant="h5" mb={2}>
        I am a Software Developer
      </Typography>
      <Typography maxWidth={500}>
        Here are two lines for a frontend developer description: Crafting
        intuitive user interfaces and seamless web experiences through modern
        technologies and design principles. Bridging creativity and
        functionality to bring digital visions to life with responsive,
        accessible, and performant web applications.
      </Typography>
    </Box>
  );
};
