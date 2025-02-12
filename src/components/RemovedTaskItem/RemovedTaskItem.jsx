import { Box, Card, IconButton, ListItem, Typography } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useEffect } from "react";

export default function RemovedTaskItem({
  id,
  title,
  description,
  complete,
  bgColor,
  taskInTrash,
  setTaskInTrash,
  setTasks,
  deleteAt,
}) {
  const daysToAutoDelete = Math.floor(
    (deleteAt - Date.now()) / 3600 / 1000 / 24
  );

  useEffect(() => {
    const intervalTime = 1000 * 60 * 60;

    const intervalId = setInterval(() => {
      setTaskInTrash((prev) => {
        return prev.filter((t) => t.deleteAt > Date.now());
      });
    }, intervalTime);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          variant='caption'
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            p: "2px 4px",
            borderRadius: 1,
            backgroundColor: "#ff7961",
          }}
        >
          {daysToAutoDelete > 1
            ? `${daysToAutoDelete} days left`
            : "Delete today"}
        </Typography>
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
