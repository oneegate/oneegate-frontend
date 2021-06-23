import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

import Layout from "../components/layout";
import SingleCareer from "../sections/single-career";

export default function SingleCareerPage({ history }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout history={history}>
        <SingleCareer />
      </Layout>
    </ThemeProvider>
  );
}
