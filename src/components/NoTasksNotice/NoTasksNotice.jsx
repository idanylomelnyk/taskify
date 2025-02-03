import { Typography } from "@mui/material";

export default function NoTasksNotice() {
  return (
    <>
      <Typography
        sx={{
          mt: 16,
          textAlign: "center",
          fontSize: 22,
          fontWeight: 500,
          color: "#757575",
        }}
      >
        Congrats! Your task list is empty. Create a new task to begin 👍
      </Typography>
    </>
  );
}
