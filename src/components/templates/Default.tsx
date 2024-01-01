import { ReactNode } from "react";
import {
  AppShell,
  Box,
  Burger,
  createTheme,
  Group,
  MantineProvider,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import authStore from "@/stores/authStore";

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
  const { user, signOut } = authStore();
  return (
    <MantineProvider theme={theme}>
      <Notifications />
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
          <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
          <AppShell.Main>
            {children}
          </AppShell.Main>
          <AppShell.Footer py={10}>
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
