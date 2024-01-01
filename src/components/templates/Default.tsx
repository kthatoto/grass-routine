import "@mantine/core/styles";
import "@mantine/notifications/styles";
import { ReactNode } from "react";
import {
  Box,
  createTheme,
  MantineProvider,
  Text,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import authStore from "@/stores/authStore";

const globalFontFamily =
  'Avenir, "Helvetica Neue", Helvetica, Arial, "Hiragino Kaku Gothic ProN", YuGothic';

const theme = createTheme({
  fontFamily: globalFontFamily,
  black: '#444',
  headings: {
    fontFamily: globalFontFamily,
  },
});

interface TemplateProps {
  children: ReactNode;
  title?: string;
}

const Default = ({ children }: TemplateProps) => {
  const { user, signOut } = authStore();
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <ModalsProvider>
        {children}
        <Box pt={4}>
          <Text>
            {"Copyright © "}
            {"h4topigeon "}
            {new Date().getFullYear()}
            {"."}
          </Text>
        </Box>
      </ModalsProvider>
    </MantineProvider>
  )
};
export default Default;
