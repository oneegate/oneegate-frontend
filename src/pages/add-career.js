import React, { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

import Layout from "../components/layout";
import AddCareer from "../sections/add-career";

export default function AddCareerPage({ history, isLoggedIn }) {
  useEffect(() => {
    if(!isLoggedIn){
      history.push('/admin-login')
    }
  }, [isLoggedIn, history])
  return (
    <ThemeProvider theme={theme}>
      <Layout history={history}>
        <AddCareer history={history} />
      </Layout>
    </ThemeProvider>
  );
}
