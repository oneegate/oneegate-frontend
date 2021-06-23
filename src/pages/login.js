import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

import Layout from "../components/layout";
import Login from "../sections/login";

export default function LoginPage({ history, isLoggedIn, setIsLoggedIn }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout history={history}>
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Layout>
    </ThemeProvider>
  );
}
