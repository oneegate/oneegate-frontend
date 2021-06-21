import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

import Layout from "../components/layout";
import Contact from "../sections/contact";

export default function ContactPage({ history }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout history={history}>
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}
