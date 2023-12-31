import { Button, Container } from "@material-ui/core";
import { Google } from "@mui/icons-material";
import authStore from "@/stores/authStore";

const App = () => {
  const auth = authStore();

  if (auth.loading) return <></>;
  return (
    <Container>
      {auth.user ? (
        <h1>Signed In</h1>
      ) : (
        <Button
          onClick={auth.signInWithGoogle}
          startIcon={<Google />}
          variant="outlined"
        >ログイン</Button>
      )}
    </Container>
  );
};
export default App;
