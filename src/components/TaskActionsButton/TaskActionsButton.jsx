import { useState } from "react";
import { IconButton, Menu, MenuItem, Fade } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskActionsButton({ id, complete, setTasks }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteItem = () => {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== id);
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

  return (
    <>
      <IconButton
        aria-label='More options'
        className='moreVert'
        size='small'
        sx={{
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
      >
        <MenuItem sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <EditIcon sx={{ width: "20px", color: "#757575" }} />
          Edit
        </MenuItem>
        {complete ? (
          <MenuItem
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
            onClick={() => {
              toggleTask(false);
            }}
          >
            <DoNotDisturbAltIcon sx={{ width: "20px", color: "#757575" }} />
            Undone
          </MenuItem>
        ) : (
          <MenuItem
            sx={{ display: "flex", gap: 1, alignItems: "center" }}
            onClick={() => {
              toggleTask(true);
            }}
          >
            <CheckBoxIcon sx={{ width: "20px", color: "#757575" }} />
            Done
          </MenuItem>
        )}
        <MenuItem
          sx={{ display: "flex", gap: 1, alignItems: "center" }}
          onClick={deleteItem}
        >
          <DeleteIcon sx={{ width: "20px", color: "#757575" }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}
