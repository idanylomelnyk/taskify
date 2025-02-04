import { Dialog, Card, Typography, Divider, Box, Button } from "@mui/material";
import TaskActionsButton from "../TaskActionsButton/TaskActionsButton";
import ColorPicker from "../ColorPicker/ColorPicker";

export default function TaskModal({
  id,
  title,
  description,
  bgColor,
  complete,
  setTasks,
  open,
  onClose,
}) {
  const handleChangeBgColor = (color) => {
    setTasks((prev) => {
      return prev.map((task) =>
        task.id === id ? { ...task, bgColor: color } : task
      );
    });
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <Card
          variant='outlined'
          sx={{
            width: 350,
            minHeight: 140,
            bgcolor: bgColor,
            padding: 2,
            cursor: "default",

            "&:hover": {
              boxShadow: 2,
            },
            "&:hover .moreVert": { opacity: 1 },
          }}
        >
          <TaskActionsButton id={id} complete={complete} setTasks={setTasks} />
          <Typography
            sx={{
              fontWeight: 700,
              color: complete ? "#bdbdbd" : "#000",
              textDecoration: complete ? "line-through" : "none",
            }}
          >
            {title.length === 0 ? "Title" : title}
          </Typography>
          <Typography
            sx={{
              minHeight: "70px",
              mt: 1,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              color: complete ? "#bdbdbd" : "#000",
              textDecoration: complete ? "line-through" : "none",
            }}
          >
            {title.length === 0 ? "Description" : description}
          </Typography>
          <Divider
            sx={{
              mt: 2,
            }}
          />
          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ColorPicker setBgColorSelected={handleChangeBgColor} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button>Save</Button>
              <Button>Close</Button>
            </Box>
          </Box>
        </Card>
      </Dialog>
    </>
  );
}
