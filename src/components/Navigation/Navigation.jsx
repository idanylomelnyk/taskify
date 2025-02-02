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
import HomeIcon from "@mui/icons-material/Home";
import Logo from "../Logo/Logo";

export default function Navigation() {
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
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary='Dashboard'></ListItemText>
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}
