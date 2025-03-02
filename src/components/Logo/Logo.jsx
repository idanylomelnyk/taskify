import { Box, Typography } from "@mui/material";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

export default function Logo() {
  return (
    <Box sx={{ p: "24px 48px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant='h6' sx={{ textTransform: "uppercase" }}>
          Taskify
        </Typography>
        <TaskAltOutlinedIcon sx={{ color: "primary.main" }} />
      </Box>
      <Typography variant='caption'>Never forget anything</Typography>
    </Box>
  );
}
