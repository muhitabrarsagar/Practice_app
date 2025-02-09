import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Buttons = () => {
  const [count, setCount] = useState(0);
  const [color, setCoolor] = useState(false);
  const pluseOne = () => {
    setCount(count + 1);
    setCoolor(true);
  };
  const MiOne = () => {
    setCount(count - 1);
  };

  return (
    <Box>
      <TextField
        onChange={(e) => setCount(e.target.value)}
        value={count}
      ></TextField>
      <Typography>{count}</Typography>
      <Button
        onClick={pluseOne}
        sx={{
          background: color ? "red" : "blue",
          color: color ? "white" : "",
        }}
      >
        pluseOne
      </Button>
      <Button onClick={MiOne}>MiOne</Button>
    </Box>
  );
};

export default Buttons;
