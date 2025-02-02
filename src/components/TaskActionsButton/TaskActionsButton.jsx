import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVertRounded } from "@mui/icons-material";
import { useState } from "react";

export default function TaskActionsButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <MoreVertRounded />
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
      >
        <MenuItem>Edit</MenuItem>
        <MenuItem>Done</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>
    </>
  );
}
