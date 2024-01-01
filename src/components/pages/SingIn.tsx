import { Button, Center } from "@mantine/core";
import authStore from "@/stores/authStore";

const SignIn = () => {
  const { signInWithGoogle } = authStore();
  return (
    <Center>
      <Button onClick={signInWithGoogle} fullWidth>
        ログイン
      </Button>
    </Center>
  );
};
export default SignIn;
