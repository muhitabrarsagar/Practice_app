import { Typography } from "@mui/material";
import React from "react";
import { UserContex } from "./hookspass/Context";
import { useContext } from "react";
const Text = () => {
  const { text, name, count } = useContext(UserContex);
  return (
    <div>
      <Typography sx={{ fontSize: "32px" }}>
        {text}
        {count}
      </Typography>
      <Typography sx={{ fontSize: "20px" }}>{name}</Typography>
    </div>
  );
};

export default Text;
