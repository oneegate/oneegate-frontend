/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Card, Heading, Text } from "@theme-ui/components";

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
      <span className='marketing-content-div'>
      <Heading variant="title" color="#fff" as='h1' sx={{color: 'inherit'}}>
        {heading}
      </Heading>
      <Text as="p">{description}</Text>
      </span>
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
    color: 'transparent !important',
    "&:hover": {
      borderBottom: "5px solid #00ccff",
      color: 'white !important',
    },
  },
};
