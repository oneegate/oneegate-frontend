/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Text } from "theme-ui";
import "./footer.css";
import LogoDark from "../../assets/logo.png";
import Logo from "../logo";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiFillWechat } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <div className="left">
          <Logo src={LogoDark} />
          <Text as="p" sx={styles.copyright} className="footer-copyright">
            Copyright: {new Date().getFullYear()} The One Egate Project. All
            Rights Reserved
          </Text>
          <div className="linkList">
            <IconContext.Provider
              value={{
                size: "45",
                style: {
                  border: "1px solid #00ccff",
                  padding: "7px",
                  borderRadius: 50,
                  cursor: "pointer",
                },
                className: "linkIcons",
              }}
            >
              <FaTelegramPlane />
              <AiOutlineTwitter />
              <AiFillWechat />
              <SiDiscord />
              <FaLinkedinIn />
              <MdEmail />
            </IconContext.Provider>
          </div>
        </div>
        <div className="right">
          <h6>DISCLAIMER</h6>
          <p>
            All the information on this website or other official channels is
            published for information purposes only. Any services to be provided
            in the future will be subject to the terms of the legal agreements
            relating thereto.
          </p>
        </div>
      </Container>
    </footer>
  );
}

const styles = {
  copyright: {
    opacity: 0.56,
    marginTop: "1rem",
    fontSize: "0.8rem",
  },
};
