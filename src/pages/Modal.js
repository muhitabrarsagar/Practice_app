import {
  Modal as MuiModal,
  Box,
  Typography,
  CardMedia,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ open, setOpen, movieData }) => {
  if (!movieData) return null;

  const { Title, Poster, Year, Plot } = movieData;

  return (
    <MuiModal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#282828",
          boxShadow: 24,
          p: "50px 20px 20px 20px",
          borderRadius: 2,
          border: "none",
          width: "500px",
          display: "flex",
          flexDirection: "row",
          gap: 3,
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box color={"white"}>
          <Typography variant="h5" fontWeight="bold">
            {Title} ({Year})
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {Plot}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button variant="contained" color="primary" sx={{ width: "100%" }}>
              Watch Now
            </Button>
          </Box>
        </Box>

        <CardMedia
          component="img"
          image={Poster}
          alt={Title}
          sx={{ width: "300px", borderRadius: 2, display: "block" }}
        />
      </Box>
    </MuiModal>
  );
};

export default Modal;
