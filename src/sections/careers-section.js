/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx, Container, Box, Text } from "theme-ui";
import CareerBg from "../assets/career2.jpg";
import axios from "axios";
import JobItem from "../components/job-item";
import Loader from "../components/loader";
import { BACKEND_BASE_URI } from "../util/base-uri";

export default function CareersSection() {
  const [items, setItems] = useState([]);

  async function getData() {
    try {
      const { data } = await axios.get(`${BACKEND_BASE_URI}/career`);
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <img src={CareerBg} alt='' sx={{width: '100%', maxWidth: '100%', height: 'auto', marginTop: ['5.5rem', 0]}} />
      <Container sx={styles.containerBox}>
        {items.length === 0 ? (
          <Loader />
        ) : items.length === 0 ? (
          <h1>No Jobs are present currently, Please come back later</h1>
        ) : (
          <React.Fragment>
            <Text as="h1" sx={{ fontWeight: "900", marginBottom: '2rem' }}>
              RECENT JOBS
            </Text>
            <Box
              sx={{ paddingLeft: ["0", "15rem"], paddingRight: ["0", "15rem"] }}
            >
              {items.map((item) => (
                <JobItem
                  key={item._id}
                  item={item}
                  client={true}
                />
              ))}
            </Box>
          </React.Fragment>
        )}
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    pt: 10,
    pb: [0, 7, 0, null, 7],
    marginTop: "1rem",
  },
};
