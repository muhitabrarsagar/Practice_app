import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { UserContex } from "../hookspass/Context";
import Text from "../Text";

const Buttons = () => {
  const [text, setText] = useState("Try to laren useContext");
  const [name, setName] = useState("Muhit Abrar Sagar");
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
    <UserContex.Provider value={{ text, name, count }}>
      <Text />
      <TextField
        onChange={(e) => setCount(e.target.value)}
        value={count}
      ></TextField>
      <Typography mt={"10px"}>{count}</Typography>
      <Button
        onClick={pluseOne}
        sx={{
          background: color ? "red" : "blue",
          color: color ? "white" : "",
          border: color ? "1px solid #000" : "white",
          textTransform: "none",
        }}
      >
        pluseone
      </Button>
      <Button onClick={MiOne}>MiOne</Button>
    </UserContex.Provider>
  );
};

export default Buttons;
