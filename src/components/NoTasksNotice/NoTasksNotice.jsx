import { Typography } from "@mui/material";

export default function NoTasksNotice({ message }) {
  return (
    <>
      <Typography
        sx={{
          mt: "calc(50vh - 50px)",
          textAlign: "center",
          fontSize: 22,
          fontWeight: 500,
          color: "#757575",
        }}
      >
        {message}
      </Typography>
    </>
  );
}
