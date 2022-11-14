import { Grid, Card, CardContent, Typography, CardHeader } from "@mui/material";
import React, { useState } from "react";
type BoardProps = {
  title: String;
  subtitle: String;
  contents?: JSX.Element[];
};
function Board(props: BoardProps) {
  return (
    <Card sx={{ marginLeft: 5, marginRight: 5, transition: "all 0.25s" }}>
      <CardHeader title={props.title} subheader={props.subtitle} />
      <CardContent>{props.contents}</CardContent>
    </Card>
  );
}

export default Board;
