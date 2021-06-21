/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, Text, Heading, jsx } from "theme-ui";

export default function SectionHeader({
  title,
  slogan,
  isWhite,
  isTitleWhite,
  smallText,
}) {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Text
        as="p"
        sx={{
          variant: "sectionHeader.subTitle",
          color: isWhite ? "white" : "primary",
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: "sectionHeader.title",
          color: isTitleWhite ? "white" : "heading",
        }}
      >
        {title}
      </Heading>
      {smallText && <Text as="p">Futuristic, Exciting, Technology Driven</Text>}
    </Box>
  );
}
