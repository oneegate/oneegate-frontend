/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from "theme-ui";
import { useColorMode } from "theme-ui";
import { Link } from "react-scroll";

export default function FeatureCardColumn({
  src,
  altText = "default alt text",
  title,
  text,
  link,
}) {
  const [colorMode] = useColorMode();
  return (
    <Box sx={styles.card}>
      <Link
        to={link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        sx={{ cursor: "pointer" }}
      >
        <Image src={src} altText={altText} sx={styles.img} />
      </Link>
      <Box sx={styles.wrapper}>
        <Heading
          sx={styles.wrapper.title}
          style={
            colorMode === "default" ? { color: "#0F2137" } : { color: "#fff" }
          }
        >
          {title}
        </Heading>
        <Text
          sx={styles.wrapper.subTitle}
          dangerouslySetInnerHTML={{ __html: text }}
        ></Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: ["center", "flex-start"],
    flexDirection: "column",
    mb: -1,
    textAlign: ["center", null, "left"],
    px: [4, null, 0],
  },
  img: {
    mx: ["auto", null, 0],
    ml: ["auto", null, "-13px"],
    mb: -2,
    width: ["80px", null, null, "90px", null, "auto"],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: "1.9",
    },
  },
};
