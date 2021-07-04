/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "../components/text-feature";

import FeatureThumb from "../assets/core-feature.png";

const data = {
  subTitle: "Hospitality Consultancy",
  // title: "Smart Jackpots that you may love this anytime & anywhere",
  description: `<ul style='list-style-type: none'>
    <li>
      Project Management:
      <ul style='list-style-type: none'>
        <li>Preparation of Pre-Opening Budgets</li>
        <li>Sales and Marketing Plan</li>
        <li>Restaurant Advisory</li>
        <li>Development of Policies and Procedures</li>
        <li>Operational Audits and Evaluation</li>
        <li>Room Division Consultancy</li>
        <li>Mystery Guest Service</li>
      </ul>
    </li>
    <li>
      F&B Concept Planning and Development:
      <ul style='list-style-type: none'>
        <li>Food and Beverage Consultancy</li>
        <li>Site Investigations</li>
        <li>Master Planning</li>
        <li>Design Concepts</li>
      </ul>
    </li>
    <li>
      Training:
      <ul style='list-style-type: none'>
        <li>Developing Programs</li>
        <li>Delivering Training to all Hotel Departments</li>
      </ul>
    </li>
  </ul>`,
  btnName: "Talk To Us",
  btnURL: "/contact",
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            btnName={data.btnName}
            description={data.description}
            btnURL={data.btnURL}
            coreFeature
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          {/* <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
