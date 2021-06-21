import { Container } from "theme-ui";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import ButtonGroup from "../components/button-group";

import "react-multi-carousel/lib/styles.css";
import MarketingItem from "../components/marketing-item";
import SectionHeader from "../components/section-header";

import MarketingImage1 from "../assets/marketing-1.jpg";
import MarketingImage2 from "../assets/marketing-2.jpg";
import MarketingImage3 from "../assets/marketing-3.jpg";
import MarketingImage4 from "../assets/marketing-4.jpg";
import MarketingImage5 from "../assets/marketing-5.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Marketing({ history }) {
  const [items] = useState([
    {
      heading: "FULL-SERVICE DIGITAL MARKETING AGENCY",
      description: "REDEFINING DIGITAL TRANSFORMATION",
      image: MarketingImage1,
    },
    {
      heading: "TRANSFORMING THE WORLD THROUGH DIGITALIZATION",
      description:
        "Combining needs to get an out-of-the-ordinary originative vision to reach the optimum results and helping organizations of all sizes mount the intricacy of today’s digital world to achieve outputs that last far beyond a digital strategy.",
      image: MarketingImage2,
    },
    {
      heading: "REVOLUTIONIZING MEDICAL CONNECTIONS",
      description:
        "Limitless Triage Methodology of online presence, digital marketing and online consultation which empowers, optimizes, transforms and connects HCPs, customers and Pharma Ensuring facilitated healthcare processes every step of the way And much more…",
      image: MarketingImage3,
    },
    {
      heading: "CRAFTING EXPERIENCES THROUGH CREATIVITY",
      description:
        "Adding prospects to hospitality brands with a strong online presence and continuous efforts to remain above trends enables us to provide both, brands and audiences, the desired quality of deliverables to set the bar high for digital standards.",
      image: MarketingImage4,
    },
    {
      heading: "BRINGING JOY THROUGH REELS",
      description:
        "Anchoring the digital expertise and production potencies with smart incorporated planning, emotional comprehension, artful design and insightful analysis that create sustainable engagement Spotting beauty with our cameras and excellence in every take",
      image: MarketingImage5,
    },
  ]);

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
  };

  return (
    <Container sx={styles.wrapper}>
      <SectionHeader
        slogan="Marketing"
        title="Full Service - Digital Marketing Agency"
        isTitleWhite={true}
      />
      <Carousel {...sliderParams}>
        {items.map((item, index) => (
          <MarketingItem item={item} key={index} />
        ))}
      </Carousel>
      <h1 color="#fff" style={{ marginTop: "5rem", textAlign: "center" }}>
        <span
          onClick={() => history.push("/contact")}
          style={{ color: "#00ccff", cursor: "pointer" }}
        >
          Contact Us
        </span>{" "}
        Now, To get the best Digital Services on the Planet
      </h1>
    </Container>
  );
}

const styles = {
  wrapper: {
    pb: [8, null, 9, null, null, 9],
  },
};
