import { ReactNode } from "react";
import { AppShell, Box, Burger, createTheme, MantineProvider, Text } from "@mantine/core";
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
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <div>Logo</div>
          </AppShell.Header>
          <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
          <AppShell.Main>
            {children}
            <Box pt={4}>
              <Text>
                {"Copyright © "}
                {"h4topigeon "}
                {new Date().getFullYear()}
                {"."}
              </Text>
            </Box>
          </AppShell.Main>
        </AppShell>
      </ModalsProvider>
    </MantineProvider>
  );
};
export default Default;
