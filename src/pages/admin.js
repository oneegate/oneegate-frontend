import React, { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

import Layout from "../components/layout";
import Admin from "../sections/admin";

export default function AdminPage({ history, isLoggedIn }) {
  useEffect(() => {
    if(!isLoggedIn){
      history.push('/admin-login')
    }
  }, [isLoggedIn, history])
  return (
    <ThemeProvider theme={theme}>
      <Layout history={history}>
        <Admin />
      </Layout>
    </ThemeProvider>
  );
}
