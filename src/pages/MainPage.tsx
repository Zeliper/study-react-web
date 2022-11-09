import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

function createCard(index: number) {
  return (
    <Grid key={`card${index}`} item={true} xs={12} sm={6}>
      <Card sx={{ maxWidth: 346, alignSelf: "center" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card {index}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            히히 카드
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

function MainPage() {
  const [count, setCount] = useState(0);
  const [contents, setContents] = useState<JSX.Element[]>([]);
  // setContents((content) => {
  //   content.push(cardTemplate);
  //   return content;
  // });
  return (
    <Stack>
      <Button
        onClick={() => {
          setContents([createCard(contents.length), ...contents]);
        }}
      >
        Click Me!
      </Button>
      {contents}
    </Stack>
  );
}

export default MainPage;
