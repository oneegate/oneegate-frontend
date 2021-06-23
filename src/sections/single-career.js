/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Heading, Box, Text, Button, Alert } from "theme-ui";
import CareerBg from "../assets/career2.jpg";
import { useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_BASE_URI } from "../util/base-uri";
import InputContact from "../components/input-contact";
import FileBase from "react-file-base64";
import Loader from '../components/loader'

export default function CareersSection() {
  const [item, setItem] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [document, setDocument] = useState("");
  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      const { data } = await axios.get(
        `${BACKEND_BASE_URI}/career/${match.params.id}`
      );
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, []);

  const match = useRouteMatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name === '' || email === '' || phone === '' || coverLetter === '' || document === ''){
        setAlert('All fields are required')
    }else{
        setLoading(true);
    try {
      await axios.post(
        `${BACKEND_BASE_URI}/career/${match.params.id}`,
        { name, email, phone, coverLetter, document }
      );
      setLoading(false);
      setAlert({ type: "success", message: "Request Successfully Submitted" });
    } catch (error) {
      setLoading(false);
      setAlert({ type: "danger", message: "Internal Server Error" });
    }
    }
  };

  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <img
        src={CareerBg}
        alt=""
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          marginTop: ["5.5rem", 0],
        }}
      />
      <Container sx={styles.containerBox}>
        <Heading
          variant="heroPrimary"
          sx={{ color: "white", textTransform: "uppercase" }}
        >
          {item?.title}
        </Heading>
        <Box
          sx={{
            display: ["block", "flex"],
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box dangerouslySetInnerHTML={{ __html: item?.sanitizedHtml }}></Box>
          <form
            onSubmit={handleSubmit}
            sx={{ backgroundColor: "white", padding: "2rem", flex: 0.45 }}
          >
            <h1 sx={{ color: "black", marginBottom: '0.5rem' }}>Apply For This position</h1>
            {loading && <Loader />}
            {alert.message && (<Alert variant={alert.type}>{alert.message}</Alert>)}
            <InputContact
              label="Full Name*"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputContact
              label="Email*"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputContact
              label="Phone*"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <InputContact
              label="Cover Letter*"
              textArea={true}
              col={10}
              row={10}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />
            <Text
              as="p"
              color="black"
              sx={{
                color: "#000",
                marginTop: "1rem",
                fontWeight: 700,
                fontSize: "1.2rem",
                textTransform: "uppercase",
              }}
            >
              Upload CV/Resume *
            </Text>
            <Box sx={{ width: "100%", margin: "0 0 3rem 0" }}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setDocument(base64)}
              />
            </Box>
            <Button type="submit" variant="primary">
              Submit
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
  },
};
