import { ReactNode } from "react";
import * as colors from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import authStore from "@/stores/authStore";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Noto Sans JP",
      "Lato",
      "游ゴシック Medium",
      "游ゴシック体",
      "Yu Gothic Medium",
      "YuGothic",
      "ヒラギノ角ゴ ProN",
      "Hiragino Kaku Gothic ProN",
      "メイリオ",
      "Meiryo",
      "ＭＳ Ｐゴシック",
      "MS PGothic",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: { main: colors.blue[800] },
  },
});

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//     },
//     toolbar: {
//       paddingRight: 24,
//     },
//   })
// );


const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {"h4topigeon "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

interface TemplateProps {
  children: ReactNode;
  title?: string;
}

const Default = ({ children }: TemplateProps) => {
  const { user, signOut } = authStore();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography
            style={{ color: "white", fontWeight: "bold" }}
          >Grass Routine</Typography>
          {user && (
            <Button
              onClick={signOut}
              style={{ color: "white" }}
            >ログアウト</Button>
          )}
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="xs">
          {children}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  )
};
export default Default;
