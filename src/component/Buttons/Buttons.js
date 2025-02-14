import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useReducer } from "react";
import { UserContex } from "../hookspass/Context";
import Text from "../Text";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1, color: true };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  } else if (action.type === "SET_COUNT") {
    return { ...state, count: action.payload };
  } else {
    return state;
  }
};

const initialState = {
  text: "Try to learn useContext",
  name: "Muhit Abrar Sagar",
  count: 0,
  color: false,
};

const Buttons = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContex.Provider value={{ state, dispatch }}>
      <Text />
      <TextField
        onChange={(e) =>
          dispatch({ type: "SET_COUNT", payload: e.target.value })
        }
        value={state.count}
      />
      <Typography mt={"10px"}>{state.count}</Typography>
      <Button
        onClick={() => dispatch({ type: "INCREMENT" })}
        sx={{
          background: state.color ? "red" : "blue",
          color: state.color ? "white" : "",
          border: state.color ? "1px solid #000" : "white",
          textTransform: "none",
        }}
      >
        pluseone
      </Button>
      <Button onClick={() => dispatch({ type: "DECREMENT" })}>MiOne</Button>
    </UserContex.Provider>
  );
};

export default Buttons;
