import { ReactNode } from "react";
import {
  AppShell,
  Burger,
  Button,
  createTheme,
  Group,
  Image,
  MantineProvider,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import useAuthStore from "@/stores/authStore";

const globalFontFamily =
  'Avenir, "Helvetica Neue", Helvetica, Arial, "Hiragino Kaku Gothic ProN", YuGothic';

const theme = createTheme({
  fontFamily: globalFontFamily,
  black: "#444",
  headings: {
    fontFamily: globalFontFamily,
  },
});

interface TemplateProps {
  children: ReactNode;
  title?: string;
}

const Default = ({ children }: TemplateProps) => {
  const [opened, { toggle }] = useDisclosure();
  const { user, signOut } = useAuthStore();
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-center" />
      <ModalsProvider>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="sm"
        >
          <AppShell.Header>
            <Group align="center" h="100%" p={10}>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <Title>Grass Routine</Title>
            </Group>
          </AppShell.Header>
          <AppShell.Navbar p="md">
            {user && (
              <>
                <Group mb={10}>
                  {user.photoURL && (
                    <Image src={user.photoURL} w={40} h={40} radius="50%" />
                  )}
                  <Stack gap={0}>
                    <Text fw="bold">{user.displayName}</Text>
                    <Text>{user.email}</Text>
                  </Stack>
                </Group>
                <Button onClick={signOut}>ログアウト</Button>
              </>
            )}
          </AppShell.Navbar>
          <AppShell.Main bg="#efefef">{children}</AppShell.Main>
          <AppShell.Footer py={10} bg="#efefef">
            <Text ta="center">
              {"Copyright © "}
              {"h4topigeon "}
              {new Date().getFullYear()}
              {"."}
            </Text>
          </AppShell.Footer>
        </AppShell>
      </ModalsProvider>
    </MantineProvider>
  );
};
export default Default;
