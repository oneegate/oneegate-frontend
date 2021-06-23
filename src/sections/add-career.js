/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Button, Alert } from "theme-ui";
import InputContact from "../components/input-contact";
import { useState } from "react";
import axios from "axios";
import Loader from '../components/loader'
import { BACKEND_BASE_URI } from "../util/base-uri";
import {CKEditor} from 'ckeditor4-react';

export default function AddCareer({ history }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Full-Time");
  const [sanitizedHtml, setSanitizedHtml] = useState("");
  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${BACKEND_BASE_URI}/career`, {
        title,
        location,
        type,
        sanitizedHtml
      });
      setLoading(false);
      setAlert({ type: "success", message: "Job successfully added" });
      history.push('/admin-dashboard')
    } catch (error) {
      console.log(error)
      setLoading(false);
      setAlert({ type: "danger", message: "Internal Server Error" });
    }
  };

  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.form}>
          <h1 sx={{ color: "#000", fontSize: "2rem" }}>
            Add a Job to the list
          </h1>
          <form onSubmit={handleSubmit}>
            {loading && <Loader />}
            {alert.message && (<Alert variant={alert.type}>{alert.message}</Alert>)}
            <InputContact
              label="Title*"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <InputContact
              label="Job Location*"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <InputContact
              label="Job Type*"
              select={true}
              value={type}
              onChange={(e) => setType(e.target.value)}
              options={[
                { label: "Full-Time", value: "Full-Time" },
                { label: "Part Time", value: "Part-Time" },
                { label: "Freelance", value: "Freelance" },
              ]}
            />
            <CKEditor onChange={(evt) => setSanitizedHtml(evt.editor.getData())} defaultValue={sanitizedHtml} />
            <Button
              variant="primary"
              type="submit"
              sx={{ borderRadius: 0, width: "100%", marginTop: "20px" }}
            >
              CREATE
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    pt: 10,
    pb: [0, 7, 0, null, 7],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    width: "100%",
    padding: "20px",
    backgroundColor: "#fff",
  },
};
