/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "../components/feature-card-column.js";
import Performance from "../assets/key-feature/performance.svg";
import Partnership from "../assets/key-feature/partnership.svg";
import Subscription from "../assets/key-feature/subscription.svg";
import Support from "../assets/key-feature/support.svg";
import { useColorMode } from "theme-ui";

const data = [
  {
    id: 1,
    imgSrc: Subscription,
    altText: "Investment",
    title: "Investment",
    text: "Our portfolio includes investments in Forex, Commodities, Digital Assets. As a sovereign investor with an inventive mindset, we strategically invest worldwide in asset classes and sectors that deliver competitive advantages",
    link: "pricing",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Digital Marketing",
    title: "Digital Marketing",
    text: "We consult clients on a wide spectrum of online advertising tactics, through a well-defined strategic approach. We believe in connecting through with our client's audience in the right time and at the right place and delivering information that appeals them through social media platforms, mobile apps, web apps, search engines, websites/portals, or any other digital channel",
    link: "contact",
  },
  {
    id: 3,
    imgSrc: Performance,
    altText: "Consulting",
    title: "Consulting",
    text: "We consult brands and help them to elevate trust in consumers and promote healthy engagement. We believe a brand is made on two things 'Lucidity' and 'Human Touch'. The successful branding also depends on what you say, how you say and even when you say it. We have a knack to identify these core aspects that are critical in creating the right persona of the brand.",
    link: "contact",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Careers",
    title: "Careers",
    text: "We offer more than a job, we provide you with the tools and set up you need to unleash your creativity, and help yourself, to help others.<br /><br /><i>'Teach him how to fish and you feed him for his life time.'<i>",
    link: "contact",
  },
];

export default function KeyFeature() {
  const [colorMode] = useColorMode();
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of our product"
          isTitleWhite={colorMode === "default" ? false : true}
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
              link={item.link}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
