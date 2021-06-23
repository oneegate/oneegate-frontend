/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from "react";
import { jsx, Container, Box, Button, Alert } from "theme-ui";
import InputContact from "../components/input-contact";
import TextFeature from "../components/text-feature";
import axios from "axios";
import Loader from '../components/loader'
import { BACKEND_BASE_URI } from "../util/base-uri";

const data = {
  subTitle: "Contact",
  title: "Ready to meet your One Egate partner?",
  description:
    "We seek lasting relationships to help our clients unlock rapid growth at efficient economics. Telll us where you are and where you want to be.",
  btnName: "We’ll help you get there.",
  btnURL: "#",
};

export default function CoreFeature() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [mediaBudget, setMediaBudget] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${BACKEND_BASE_URI}/contact`, {
        firstName,
        lastName,
        companyEmail,
        companySize,
        mediaBudget,
        message,
      });
      setLoading(false);
      setAlert({ type: "success", message: "Email was succesfully sent" });
    } catch (error) {
      setLoading(false);
      setAlert({ type: "danger", message: "Internal Server Error" });
    }
  };

  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            btnName={data.btnName}
            description={data.description}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.form}>
          <h1 sx={{ color: "#000", fontSize: "2rem" }}>Tell us about you.</h1>
          <form onSubmit={handleSubmit}>
            {loading && <Loader />}
            {alert.message && (<Alert variant={alert.type}>{alert.message}</Alert>)}
            <InputContact
              label="First Name*"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputContact
              label="Last Name*"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <InputContact
              label="Company Email*"
              type="email"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
            />
            <InputContact
              label="COMPANY SIZE (# OF EMPLOYEES)*"
              select={true}
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
              options={[
                { label: "Please Select", value: null },
                { label: "1-10", value: "1-10" },
                { label: "11-50", value: "11-50" },
                { label: "51-200", value: "51-200" },
                { label: "201-1000", value: "201-1000" },
                { label: "1001-10000", value: "1001-10000" },
                { label: "10000+", value: "10000+" },
                { label: "I don't know", value: "I don't know" },
              ]}
            />
            <InputContact
              label="MONTHLY MEDIA BUDGET*"
              select={true}
              value={mediaBudget}
              onChange={(e) => setMediaBudget(e.target.value)}
              options={[
                { label: "Please Select", value: null },
                { label: "$1-$5000", value: "$1-$5000" },
                { label: "$5001-$10000", value: "$5001-$10000" },
                { label: "$10001-$30000", value: "$10001-$30000" },
                { label: "$30001-$50000", value: "$30001-$50000" },
                { label: "$50001-$200000", value: "$50001-$200000" },
                { label: "$200001-$500000", value: "$200001-$500000" },
                { label: "$500000+", value: "$500000+" },
              ]}
            />
            <InputContact
              label="Your Message"
              textArea={true}
              col={10}
              row={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="primary"
              type="submit"
              sx={{ borderRadius: 0, width: "100%", marginTop: "20px" }}
            >
              TALK TO US
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pt: 10,
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
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
