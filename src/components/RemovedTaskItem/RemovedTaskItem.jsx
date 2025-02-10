import { Box, Card, IconButton, ListItem, Typography } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function RemovedTaskItem({
  id,
  title,
  description,
  complete,
  bgColor,
  taskInTrash,
  setTaskInTrash,
  setTasks,
}) {
  const removeTaskForever = () => {
    setTaskInTrash((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  const restoreTask = () => {
    const deletedTask = taskInTrash.find((t) => t.id === id);

    setTaskInTrash((prev) => {
      return prev.filter((t) => t.id !== deletedTask.id);
    });

    setTasks((prev) => {
      return [...prev, deletedTask];
    });
  };

  return (
    <ListItem
      disablePadding
      sx={{ position: "relative", flexBasis: "calc(1587px/5)" }}
    >
      <Card
        variant='outlined'
        sx={{
          position: "relative",
          width: "calc(1587px/5)",
          height: 140,
          bgcolor: bgColor,
          padding: 2,
          cursor: "default",

          "&:hover": {
            boxShadow: 2,
          },
          "&:hover .removedActionsBtn": { opacity: 1 },
        }}
      >
        <Box
          className='removedActionsBtn'
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <IconButton onClick={restoreTask}>
            <RestoreFromTrashIcon />
          </IconButton>
          <IconButton onClick={removeTaskForever}>
            <DeleteForeverIcon />
          </IconButton>
        </Box>
        <Typography
          sx={{
            fontWeight: 700,
            color: complete ? "#bdbdbd" : "#000",
            textDecoration: complete ? "line-through" : "none",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            color: complete ? "#bdbdbd" : "#000",
            textDecoration: complete ? "line-through" : "none",
          }}
        >
          {description}
        </Typography>
      </Card>
    </ListItem>
  );
}
