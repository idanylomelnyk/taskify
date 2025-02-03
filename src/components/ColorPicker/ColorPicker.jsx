import { Box, IconButton, List, ListItem } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function ColorPicker({ setBgColor }) {
  const COLORS = ["#fff", "#fffde7", "#e0f2f1", "#e3f2fd", "#ffebee"];

  const colorSelected = (e) => {
    const listItem = e.target.closest("li");
    if (!listItem) return;

    setBgColor(listItem.dataset.color);
  };

  return (
    <>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <List
          disablePadding
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
          onClick={colorSelected}
        >
          {COLORS.map((color) => {
            return (
              <ListItem
                key={color}
                disablePadding
                sx={{ maxWidth: "26px" }}
                data-color={color}
              >
                <IconButton
                  size='small'
                  sx={{ p: 0, border: "1px solid #bdbdbd" }}
                >
                  <CircleIcon sx={{ color: color }} />
                </IconButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
}
