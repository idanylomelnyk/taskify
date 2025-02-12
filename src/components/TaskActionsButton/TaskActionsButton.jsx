import { useState } from "react";
import { IconButton, Menu, MenuItem, Fade } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function TaskActionsButton({
  id,
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

    const taskDeleted = tasks.find((t) => t.id === id);
    const deleteTime = Date.now() + 1000 * 60 * 60 * 24 * 10;

    setTaskInTrash((prev) => {
      return [...prev, { ...taskDeleted, deleteAt: deleteTime }];
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
        <MenuItem
          data-action='edit'
          sx={{ display: "flex", gap: 1, alignItems: "center" }}
          onClick={handleEdit}
        >
          <EditOutlinedIcon sx={{ width: "22px", color: "#757575" }} />
          Edit
        </MenuItem>
        {complete ? (
          <MenuItem
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
            onClick={() => {
              toggleTask(false);
            }}
          >
            <DoNotDisturbAltIcon sx={{ width: "22px", color: "#757575" }} />
            Undone
          </MenuItem>
        ) : (
          <MenuItem
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
            onClick={() => {
              toggleTask(true);
            }}
          >
            <DoneOutlineOutlinedIcon sx={{ width: "22px", color: "#757575" }} />
            Done
          </MenuItem>
        )}
        <MenuItem
          sx={{ display: "flex", gap: 1, alignItems: "center" }}
          onClick={deleteItem}
        >
          <DeleteOutlineIcon sx={{ width: "22px", color: "#757575" }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}
