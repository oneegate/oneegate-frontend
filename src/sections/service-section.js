/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";

import {
  jsx,
  Container,
  Box,
  Grid,
  Text,
  Heading,
  Button,
  Image,
} from "theme-ui";
import { keyframes } from "@emotion/react";
import TextFeature from "../components/text-feature";
import ModalVideo from "react-modal-video";
import { IoIosPlay } from "react-icons/io";
import { useColorMode } from "theme-ui";

import ServiceThumb from "../assets/service-thumb.png";

import Smart from "../assets/services/smart.svg";
import Secure from "../assets/services/secure.svg";

import "react-modal-video/css/modal-video.min.css";

const data = {
  subTitle: "our approach",
  title: "We Help You Achieve Your Business Goals",
  features: [
    {
      id: 1,
      imgSrc: Smart,
      altText: "Case Study",
      title: "Case Study",
      text: "We help you unlock your unique growth loops and put them into action with frameworks and strategies that drive rapid growth and and maximize revenue potential",
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: "Provide industries best practices, and offer winning solutions",
      title: "Provide industries best practices, and offer winning solutions",
      text: "We've learned by doing: We scale experiments to full-funnel strategies to drive sustainable, compounding growth.",
    },
  ],
};

export default function ServiceSection() {
  const [colorMode] = useColorMode();
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

  return (
    <section sx={{ variant: "section.services" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={ServiceThumb} alt="Thumbnail" />
          <Button
            sx={styles.videoBtn}
            onClick={handleClick}
            aria-label="Play Button"
          >
            <span>
              <IoIosPlay />
            </span>
          </Button>
          {/* <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="shape" />
          </Box> */}
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />
          <Grid sx={styles.grid}>
            {data.features.map((feature) => (
              <Box sx={styles.card} key={feature.id}>
                <Image
                  src={feature.imgSrc}
                  alt={feature.altText}
                  sx={styles.icon}
                />
                <Box sx={styles.wrapper}>
                  <Heading
                    sx={styles.wrapper.title}
                    style={
                      colorMode === "default"
                        ? { color: "#0F2137" }
                        : { color: "#fff" }
                    }
                  >
                    {feature.title}
                  </Heading>
                  <Text sx={styles.wrapper.subTitle}>{feature.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="JO0fhogRlC8"
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative",
  },
  containerBox: {
    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    justifyContent: ["flex-start", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ["auto", null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ["auto", null, null, 0],
    display: "inline-flex",
    position: "relative",
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"],
  },
  videoBtn: {
    zIndex: 2,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: ["60px", null, "80px", null, "100px"],
    height: ["60px", null, "80px", null, "100px"],
    p: "0px !important",
    backgroundColor: "transparent",
    "&::before": {
      position: "absolute",
      content: '""',
      left: "50%",
      top: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      display: "block",
      width: ["60px", null, "80px", null, "100px"],
      height: ["60px", null, "80px", null, "100px"],
      backgroundColor: "primary",
      borderRadius: "50%",
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    "> span": {
      backgroundColor: "rgba(255,255,255,0.5)",
      width: "inherit",
      height: "inherit",
      textAlign: "center",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.5s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    width: ["100%", null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    pr: [2, 0, null, null, 6, "70px"],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: "auto",
    width: ["100%", 370, 420, "100%"],
    gridGap: ["35px 0", null, null, null, "50px 0"],
    gridTemplateColumns: ["repeat(1,1fr)"],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    transition: "all 0.3s",
  },

  icon: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, "14px", 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: "100%",
    position: "relative",
    width: "900px",
    "&:before": {
      content: '""',
      display: "block",
      paddingTop: "56.25%",
    },
    iframe: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
};
