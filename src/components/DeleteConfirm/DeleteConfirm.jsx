import { Box, Button, Card, Dialog, Typography } from "@mui/material";

export default function DeleteConfirm({ open, onClose, clearTrash }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Card sx={{ p: 2, width: "300px" }}>
        <Typography
          sx={{ textAlign: "center", fontSize: "18px", fontWeight: "500" }}
        >
          Do you want delete all tasks forever?
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 1 }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={clearTrash}>Delete</Button>
        </Box>
      </Card>
    </Dialog>
  );
}
