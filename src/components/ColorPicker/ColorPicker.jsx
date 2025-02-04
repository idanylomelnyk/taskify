import { Box, IconButton, List, ListItem } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function ColorPicker({ setBgColorSelected }) {
  const COLORS = ["#fff", "#fffde7", "#e0f2f1", "#e3f2fd", "#ffebee"];

  const colorSelected = (e) => {
    const listItem = e.target.closest("li");
    if (!listItem) return;

    setBgColorSelected(listItem.dataset.color);
  };

  return (
    <>
      <Box>
        <List
          disablePadding
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
          onClick={colorSelected}
        >
          {COLORS.map((color) => {
            return (
              <ListItem
                key={color}
                disablePadding
                sx={{ width: "25px" }}
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
