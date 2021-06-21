import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

import Layout from "../components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import CoreFeature from "../sections/core-feature";
import TeamSection from "../sections/team-section";
import Marketing from "../sections/marketing";
import Careers from "../sections/careers";

export default function HomePage({ history }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout history={history}>
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Careers history={history} />
        <CoreFeature />
        <Marketing history={history} />
        <TeamSection />
      </Layout>
    </ThemeProvider>
  );
}
