import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

import Layout from "../components/layout";
import CareersSection from "../sections/careers-section";

export default function CareersPage({ history }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout history={history}>
        <CareersSection />
      </Layout>
    </ThemeProvider>
  );
}
