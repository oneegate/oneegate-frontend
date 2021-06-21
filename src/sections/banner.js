/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { Container, Box, Heading, Text, Button } from "theme-ui";
import { useColorMode } from "theme-ui";
import { motion } from "framer-motion";
import { IoIosPlay } from "react-icons/io";
import ModalVideo from "react-modal-video";

export default function Banner() {
  const [colorMode] = useColorMode();
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

  return (
    <section sx={styles.banner} id="home">
      <video src="/bg/bg.mp4" muted autoPlay loop sx={styles.video}></video>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { delay: 0.6 } },
            }}
          >
            <Heading
              as="h1"
              variant="heroPrimary"
              color={colorMode === "default" ? "#0F2137" : "#fff"}
            >
              360° Marketing and communications solutions, that really works!
            </Heading>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { delay: 0.8 } },
            }}
          >
            <Text
              as="p"
              variant="heroSecondary"
              color={colorMode === "default" ? "#0F2137" : "#fff"}
              sx={{ paddingLeft: "0 !important" }}
            >
              We believe that being a consultant is more important than just
              being an executive
            </Text>
          </motion.div>
          {/* <Button variant="primary">Explore</Button> */}
          <Button
            sx={styles.videoBtn}
            onClick={handleClick}
            aria-label="Play Button"
          >
            <span>
              <IoIosPlay />
            </span>
          </Button>
        </Box>
        <ModalVideo
          channel="youtube"
          isOpen={videoOpen}
          videoId="JO0fhogRlC8"
          onClose={() => setVideoOpen(false)}
        />
      </Container>
    </section>
  );
}

const styles = {
  video: {
    position: "absolute",
    zIndex: -199,
    bottom: 0,
    right: 0,
    filter: "brightness(30%)",
  },
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    height: "100vh",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      textAlign: "left",
      mb: ["40px", null, null, null, null, 7],
    },
  },
  videoBtn: {
    zIndex: 2,
    width: ["60px", null, "80px", null, "80px"],
    height: ["60px", null, "80px", null, "80px"],
    p: "0px !important",
    backgroundColor: "#00ccff",
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
      fontSize: [40, null, 48, null, 50],
    },
  },
};
