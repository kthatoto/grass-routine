import { Button, Center } from "@mantine/core";
import useAuthStore from "@/stores/authStore";

const SignIn = () => {
  const { signInWithGoogle } = useAuthStore();
  return (
    <Center>
      <Button onClick={signInWithGoogle} fullWidth>
        ログイン
      </Button>
    </Center>
  );
};
export default SignIn;
