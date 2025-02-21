import { useState } from "react";
import { IconButton, Menu, MenuItem, Fade } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function TaskActionsButton({
  id,
  title,
  description,
  complete,
  tasks,
  setTasks,
  setIsTaskEditing,
  editingTask,
  isTaskEditing,
  setTaskInTrash,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteItem = () => {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });

    const taskDelete = tasks.find((t) => t.id === id);
    const deleteTime = Date.now() + 60000 * 5;

    setTaskInTrash((prev) => {
      return [{ ...taskDelete, deleteAt: deleteTime }, ...prev];
    });
  };

  const toggleTask = (bool) => {
    setTasks((prev) => {
      return prev.map((task) =>
        task.id === id ? { ...task, complete: bool } : task
      );
    });

    handleClose();
  };

  const handleEdit = () => {
    setIsTaskEditing(true);
    editingTask();
    handleClose();
  };

  const itemStyles = { display: "flex", gap: 1, alignItems: "center" };

  return (
    <>
      <IconButton
        aria-label='More options'
        className='moreVert'
        size='small'
        sx={{
          display: isTaskEditing ? "none" : "flex",
          position: "absolute",
          top: 8,
          right: 8,
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
        onClick={handleOpen}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        TransitionComponent={Fade}
        transitionDuration={500}
        onClick={(e) => {
          if (!e.target.closest("[data-action='edit']")) e.stopPropagation();
        }}
      >
        <MenuItem data-action='edit' sx={itemStyles} onClick={handleEdit}>
          Edit
        </MenuItem>
        {complete ? (
          <MenuItem
            sx={itemStyles}
            onClick={() => {
              toggleTask(false);
            }}
          >
            Undo
          </MenuItem>
        ) : (
          <MenuItem
            disabled={!(title || description)}
            sx={itemStyles}
            onClick={() => {
              toggleTask(true);
            }}
          >
            Done
          </MenuItem>
        )}
        <MenuItem sx={itemStyles} onClick={deleteItem}>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}
