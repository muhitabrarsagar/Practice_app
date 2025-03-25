import React, { useEffect, useState } from "react";
import Card from "./Card";
import { List } from "@mui/material";
import getServices from "../services/getServices";

const MovieCardApi = () => {
  const [data, setData] = useState([]);

  const getMovieData = async () => {
    try {
      const res = await getServices();
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <List
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 4,
        padding: 2,
        overflow: "hidden",
        backgroundColor: "#181818",
        color: "white",
        borderRadius: 2,
        p: 3,
      }}
    >
      {data.map((curElem) => {
        return <Card key={curElem.imdbID} movieData={curElem} />;
      })}
    </List>
  );
};

export default MovieCardApi;
