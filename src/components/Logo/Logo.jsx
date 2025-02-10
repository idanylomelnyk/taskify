import { Box, Typography } from "@mui/material";

export default function Logo() {
  return (
    <>
      <Box sx={{ p: "24px 0" }}>
        <Typography sx={{ textAlign: "center", fontSize: 24, fontWeight: 700 }}>
          Taskify
        </Typography>
      </Box>
    </>
  );
}
