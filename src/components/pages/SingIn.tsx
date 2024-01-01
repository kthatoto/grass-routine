import { Button } from "@material-ui/core";
import { Google } from "@mui/icons-material";
import authStore from "@/stores/authStore";

const SignIn = () => {
  const auth = authStore();
  return (
    <Button
      onClick={auth.signInWithGoogle}
      startIcon={<Google />}
      variant="outlined"
      size="large"
    >ログイン</Button>
  );
};
export default SignIn;
