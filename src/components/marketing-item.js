import { Card, Heading, Text } from "@theme-ui/components";
import React from "react";

export default function MarketingItem({
  item: { heading, description, image },
}) {
  return (
    <Card
      sx={{
        ...styles.item,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${image})`,
      }}
    >
      <Heading variant="title" color="#fff">
        {heading}
      </Heading>
      <Text as="p">{description}</Text>
    </Card>
  );
}

const styles = {
  item: {
    p: ["35px 25px", null, null, "40px"],
    width: ["95%", "75%", "95%"],
    mb: "40px",
    mt: "40px",
    mx: [0, "auto", 0],
    transition: "all 0.2s ease-in-out",
    height: "25rem",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(15px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "5px 5px 30px rgba(0, 0, 0, 0.2)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    "&:hover": {
      borderBottom: "5px solid #00ccff",
    },
  },
};
