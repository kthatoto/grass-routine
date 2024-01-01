import {Button} from "@mantine/core";
import authStore from "@/stores/authStore";

const SignIn = () => {
  const auth = authStore();
  return (
    <Button
      onClick={auth.signInWithGoogle}
      variant="outlined"
      size="large"
    >ログイン</Button>
  );
};
export default SignIn;
