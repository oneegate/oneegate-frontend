/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx, Container, Box, Button } from "theme-ui";
import axios from "axios";
import { BACKEND_BASE_URI } from "../util/base-uri";
import JobItem from "../components/job-item";
import Loader from "../components/loader";
import { useLocation, useHistory } from 'react-router-dom'

export default function Admin()
 {
  const [items, setItems] = useState([]);
  const location = useLocation()
  const history = useHistory()

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
  }, [location]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BACKEND_BASE_URI}/career/${id}`)
      getData()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        {items.length === 0 ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '5rem'}}>
            <h1>Admin Dashboard</h1>
            <Button variant='primary' onClick={() => history.push('/admin-dashboard/create')}>Create a Job</Button>
            </Box>
            <Box sx={{paddingLeft: ['0', '20rem'], paddingRight: ['0', '20rem']}}>
            {items.map((item) => (
              <JobItem key={item._id} item={item} handleDelete={handleDelete} />
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
  },
};
