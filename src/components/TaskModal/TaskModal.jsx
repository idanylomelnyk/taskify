import {
  Dialog,
  Card,
  Typography,
  Divider,
  Box,
  Button,
  TextField,
} from "@mui/material";
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
  isTaskEditing,
  setIsTaskEditing,
  editTaskText,
  setEditTaskText,
  editingTask,
}) {
  const handleChangeBgColor = (color) => {
    setTasks((prev) => {
      return prev.map((task) =>
        task.id === id ? { ...task, bgColor: color } : task
      );
    });
  };

  const saveEditedTask = () => {
    setTasks((prev) => {
      return prev.map((task) =>
        task.id === id
          ? {
              ...task,
              title: editTaskText.title,
              description: editTaskText.description,
              complete: editTaskText.title && editTaskText.description,
            }
          : task
      );
    });

    setIsTaskEditing(false);
  };

  const cancelEditedTask = () => {
    setIsTaskEditing(false);
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
          <TaskActionsButton
            id={id}
            title={title}
            description={description}
            complete={complete}
            setTasks={setTasks}
            isTaskEditing={isTaskEditing}
            setIsTaskEditing={setIsTaskEditing}
            editingTask={editingTask}
          />
          {isTaskEditing ? (
            <TextField
              autoFocus
              variant='filled'
              value={editTaskText.title}
              onChange={(e) => {
                setEditTaskText({ ...editTaskText, title: e.target.value });
              }}
              slotProps={{
                input: { sx: { fontWeight: 700, height: "none" } },
              }}
              sx={{
                "& .MuiInputBase-input": { padding: 0 },
              }}
            ></TextField>
          ) : (
            <Typography
              sx={{
                fontWeight: 700,
                color: complete ? "#bdbdbd" : "#000",
                textDecoration: complete ? "line-through" : "none",
              }}
            >
              {title}
            </Typography>
          )}
          {isTaskEditing ? (
            <TextField
              variant='filled'
              value={editTaskText.description}
              onChange={(e) =>
                setEditTaskText({
                  ...editTaskText,
                  description: e.target.value,
                })
              }
              multiline
              rows={3}
              sx={{
                mt: 1,
                width: "100%",

                "& .MuiInputBase-root": { padding: 0, lineHeight: 1.5 },
              }}
            ></TextField>
          ) : (
            <Typography
              sx={{
                minHeight: "70px",
                mt: 1,
                color: complete ? "#bdbdbd" : "#000",
                textDecoration: complete ? "line-through" : "none",
              }}
            >
              {description}
            </Typography>
          )}
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
              {isTaskEditing && (
                <Box>
                  <Button onClick={cancelEditedTask}>Cancel</Button>
                  <Button onClick={saveEditedTask}>Save</Button>
                </Box>
              )}
              {!isTaskEditing && <Button onClick={onClose}>Close</Button>}
            </Box>
          </Box>
        </Card>
      </Dialog>
    </>
  );
}
