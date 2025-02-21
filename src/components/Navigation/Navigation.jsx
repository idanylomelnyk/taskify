import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Navigation({ query, handleSearch }) {
  return (
    <Drawer variant='permanent' sx={{ width: 220 }}>
      <Box sx={{ width: 220 }}>
        <Logo />
        <Divider variant='middle' />
        <Box>
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
        <Divider variant='middle' sx={{ mt: 4 }} />
        <SearchForm query={query} handleSearch={handleSearch} />
      </Box>
    </Drawer>
  );
}
