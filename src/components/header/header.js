/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
import { Link } from "react-scroll";
import Logo from "../logo";
import LogoDark from "../../assets/logo.png";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import { useColorMode } from "theme-ui";
import { useEffect } from "react";
import { Link as Link2 } from 'react-router-dom'

export default function Header({ className, history }) {
  // eslint-disable-next-line
  const [_, setColorMode] = useColorMode();

  useEffect(() => {
    setColorMode("dark");
  }, [setColorMode]);

  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, index) => (
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
            >
              {menuItem.label}
            </Link>
          ))}
          <Link2
          to='/contact'
          sx={{textDecoration: 'none', color: '#fff', '&:hover': {color: '#00ccff'}}}
          >
              Contact
          </Link2>
          <Link2
          to='/careers'
          sx={{textDecoration: 'none', color: '#fff', '&:hover': {color: '#00ccff'}}}
          >
              Careers
          </Link2>
        </Flex>
          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Talk To Us"
            onClick={() => history.push('/contact')}
          >
            Talk To Us
          </Button>
        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
};
