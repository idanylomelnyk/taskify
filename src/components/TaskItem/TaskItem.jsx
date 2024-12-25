import {
  Box,
  Card,
  Checkbox,
  Divider,
  IconButton,
  ListItem,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ColorLensIcon from "@mui/icons-material/ColorLens";

export default function TaskItem({ title, description }) {
  return (
    <ListItem sx={{ maxWidth: "350px", p: 1 }}>
      <Card
        variant='outlined'
        sx={{
          width: "350px",
          height: "260px",
          padding: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox />
            <Typography variant='h6' component='h3'>
              {title}
            </Typography>
          </Box>
          <Box></Box>
        </Box>
        <Typography sx={{ mt: 1, flexGrow: 1, textAlign: "justify" }}>
          {description}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Divider variant='middle'></Divider>
          <Box sx={{ mt: 1, display: "flex", justifyContent: "flex-end" }}>
            <IconButton>
              <ColorLensIcon />
            </IconButton>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </ListItem>
  );
}
