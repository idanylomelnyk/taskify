import { Card, ListItem, Typography } from "@mui/material";
import TaskActionsButton from "../TaskActionsButton/TaskActionsButton";

export default function TaskItem({
  id,
  title,
  description,
  bgColor,
  setTasks,
}) {
  return (
    <ListItem
      disablePadding
      sx={{ position: "relative", flexBasis: "calc(1587px/5)" }}
    >
      <Card
        variant='outlined'
        sx={{
          width: "calc(1587px/5)",
          height: 140,
          bgcolor: bgColor,
          padding: 2,
          cursor: "default",

          "&:hover": {
            boxShadow: 2,
          },
          "&:hover .moreVert": { opacity: 1 },
        }}
      >
        <TaskActionsButton id={id} setTasks={setTasks} />
        <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
        <Typography
          sx={{
            mt: 1,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
      </Card>
    </ListItem>
  );
}
