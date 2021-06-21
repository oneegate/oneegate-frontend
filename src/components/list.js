/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, Box, IconButton, jsx } from "theme-ui";

export default function List({
  items = [],
  parentStyle,
  childStyle,
  fontSize,
  color,
}) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {/* Icon, Text, isAvailable */}
      {items.map((item, i) => (
        <Flex
          className={item.isAvailable ? "open" : "close"}
          as="li"
          sx={{ ...childStyle }}
          key={i}
        >
          <IconButton sx={styles.listIcon} aria-label="list icon">
            {item.icon}
          </IconButton>
          <span
            sx={
              fontSize
                ? { ...styles.careerFont, color: color ? color : "#0F2137" }
                : { color: color ? color : "#0F2137" }
            }
          >
            {item.text}
          </span>
        </Flex>
      ))}
    </Box>
  );
}

const styles = {
  listIcon: {
    width: ["25px", "35px"],
    height: "auto",
    color: "primary",
    padding: 0,
    fontSize: [3, 5],
    ml: "-1px",
    flexShrink: 0,
    justifyContent: "flex-start",
    mt: "2px",
  },
  careerFont: {
    fontSize: ["16px", "27px"],
  },
};
