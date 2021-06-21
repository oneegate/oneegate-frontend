/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Button, Heading } from "theme-ui";
import TextFeature from "../components/text-feature";
import { IoIosCheckmarkCircle } from "react-icons/io";

import List from "../components/list";

const data = {
  subTitle: "Careers",
  title: "A Reliable Partner Along Your Growth Journey",
  description:
    "We work with companies of every size, growth stage, and business model, Tell us where you are we'll meet you there",
};

const points = [
  {
    id: 1,
    icon: <IoIosCheckmarkCircle />,
    text: "Marketing and Advertising Strategies Support",
    isAvailable: true,
  },
  {
    id: 2,
    icon: <IoIosCheckmarkCircle />,
    text: "Art and Creative",
    isAvailable: true,
  },
  {
    id: 3,
    icon: <IoIosCheckmarkCircle />,
    text: "Printing and Production Consulting Services",
    isAvailable: true,
  },
  {
    id: 4,
    icon: <IoIosCheckmarkCircle />,
    text: "Digital Media Full Management",
    isAvailable: true,
  },
  {
    id: 5,
    icon: <IoIosCheckmarkCircle />,
    text: "Social Media Full Management",
    isAvailable: true,
  },
  {
    id: 6,
    icon: <IoIosCheckmarkCircle />,
    text: "Performance and Marketing | SEM and SEO",
    isAvailable: true,
  },
];

export default function Careers({ history }) {
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
          />
        </Box>
        <Box sx={styles.list}>
          <List
            items={points}
            childsx={styles.listItem}
            fontSize="25px"
            color="#fff"
          />
        </Box>
      </Container>
      <Box sx={styles.talk}>
        <Heading
          as="h1"
          sx={{ color: "#fff", fontSize: "2rem", marginBottom: "10px" }}
        >
          Ready to Kick Off your growth journey?
        </Heading>
        <Button variant="secondary" onClick={() => history.push("/contact")}>
          Talk To Us
        </Button>
      </Box>
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
  listItem: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: "flex-start",
    color: "text",
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5",
      },
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
  list: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 9],
  },
  talk: {
    margin: "20px auto",
    textAlign: "center",
  },
};
