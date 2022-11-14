import { Language } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import Board from "../components/Board";
import "./MainPage.css";

function CreateCard(
  title: String,
  subTitle: String,
  key: number,
  list: String[]
) {
  let b: JSX.Element = Board({
    title: title,
    subtitle: subTitle,
    contents: [
      ...list.map((v, i) => {
        return (
          <div key={i}>
            <Stack
              sx={{
                marginBottom: 2,
              }}
            >
              <Stack direction={"row"}>
                <Language />
                <Link
                  className="board-link"
                  href="#"
                  underline="none"
                  color={"inherit"}
                >
                  {"테스트 사용자"}
                </Link>
              </Stack>
              <Link
                className="board-link"
                href="#"
                underline="none"
                color={"inherit"}
              >
                {"테스트 게시글 " + i}
              </Link>
              <Divider />
            </Stack>

            {/* <CardActionArea>
              <Typography variant="body2">VVVVVVVVASDFASDFASDFASDF</Typography>
            </CardActionArea> */}
          </div>
        );
      }),
    ],
  });
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={6}
      display="stretch"
      key={key}
      sx={{
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      {b}
    </Grid>
  );
}

function MainPage() {
  const [count, setCount] = useState(0);
  const [contents, setContents] = useState<JSX.Element[]>([]);
  const [layouts, setLayouts] = useState<ReactGridLayout.Layouts>({});
  let list: String[] = ["Q&A", "커뮤니티", "정보", "구인"];
  let listd: String[] = [
    "Q&A 게시판 입니다.",
    "커뮤니티 게시판 입니다.",
    "정보공유 게시판 입니다.",
    "구인 게시판 입니다.",
  ];
  let listCount: number = 6;
  let list2: String[] = [];
  for (let i = 0; i < listCount; i++) {
    list2.push("");
  }
  return (
    <div
      style={{
        maxWidth: "1200px",
      }}
    >
      <Grid
        container
        spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
        sx={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        {list.map((v, i) => {
          return CreateCard(v, listd[i], i, list2);
        })}
      </Grid>
    </div>
  );
}

export default MainPage;
