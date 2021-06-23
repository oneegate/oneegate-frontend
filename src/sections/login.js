/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from "react";
import { jsx, Container, Box, Button, Text, Alert } from "theme-ui";
import InputContact from "../components/input-contact";
import Loader from '../components/loader'
import axios from 'axios'
import { BACKEND_BASE_URI } from '../util/base-uri'
import { useHistory } from 'react-router-dom'


export default function Login({ isLoggedIn, setIsLoggedIn }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  useEffect(() => {
    if(isLoggedIn){
        history.push('/admin-dashboard')
    }
  }, [isLoggedIn, history])


  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          setLoading(true)
          await axios.post(`${BACKEND_BASE_URI}/login`, { username, password })
          setLoading(false)
          localStorage.setItem('userInfo', JSON.stringify({username, password}))
          setIsLoggedIn(localStorage.getItem('userInfo'))
          history.push('/admin-dashboard')
      } catch (error) {
         setLoading(false)
         setMessage(error.message) 
      }
  };

  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.formBox}>
          <Text
            as="p"
            sx={{
              color: "black",
              fontSize: "2rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Login
          </Text>
          {loading && <Loader />}
          {message && <Alert variant='danger'>{message}</Alert>}
          <form onSubmit={handleSubmit} sx={styles.form}>
            <InputContact label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <InputContact label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" sx={{ marginTop: "1rem" }}>
              Login
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
    display: "grid",
    placeItems: "center",
    height: "100vh",
  },
  formBox: {
    padding: "2rem",
    width: ["90%", "50%"],
    backgroundColor: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};
