import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Modal from "./Modal";
import { useState } from "react";

const MovieCard = ({ movieData }) => {
  const { Poster, imdbID, Title, Year, Plot } = movieData;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        component={"a"}
        onClick={() => setOpen(true)}
        sx={{
          height: "auto",
          marginBottom: 3,
          cursor: "pointer",
          textDecoration: "none",
          color: "inherit",
          bgcolor: "#404040",
        }}
      >
        <CardMedia
          component="img"
          alt={imdbID}
          height="auto"
          image={Poster}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h6">{Title}</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button variant="contained" color="primary" sx={{ width: "100%" }}>
              Watch Now
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Modal open={open} setOpen={setOpen} movieData={movieData} />
    </>
  );
};

export default MovieCard;
