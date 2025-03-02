import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Button,
} from "@mui/material";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

export default function Navigation({ query, handleSearch, setTasks }) {
  const [openNewTaskModal, setOpenNewTaskModal] = useState(false);
  const [bgColorSelected, setBgColorSelected] = useState("#fff");
  const handleOpenNewTaskModal = () => setOpenNewTaskModal(true);
  const handleCloseNewTaskModal = () => {
    setOpenNewTaskModal(false);
    setBgColorSelected("#fff");
  };

  return (
    <Drawer variant='permanent' sx={{ width: 220 }}>
      <Box sx={{ width: 220 }}>
        <Logo />
        <Divider variant='middle' />

        <Box sx={{ mt: 2 }}>
          <List>
            <ListItem disablePadding>
              <NavLink
                to='/'
                style={{
                  width: "100%",
                  color: "#000000de",
                  textDecoration: "none",
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary='Dashboard'></ListItemText>
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink
                to='/trash'
                style={{
                  width: "100%",
                  color: "#000000de",
                  textDecoration: "none",
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <DeleteOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary='Trash'></ListItemText>
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        </Box>
        <Divider variant='middle' sx={{ mt: 2 }} />
        <Box>
          <SearchForm query={query} handleSearch={handleSearch} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              aria-label='open-new-task-form'
              variant='outlined'
              onClick={handleOpenNewTaskModal}
              sx={{ mt: 2 }}
            >
              Create new task
            </Button>
            <NewTaskForm
              open={openNewTaskModal}
              onClose={handleCloseNewTaskModal}
              setTasks={setTasks}
              bgColorSelected={bgColorSelected}
              setBgColorSelected={setBgColorSelected}
            />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
