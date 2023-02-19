import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../../assets/img/logo.png";
import "./style.css";
import linkIcon from "../../assets/img/linkedin.svg";
import faceIcon from "../../assets/img/facebook.svg";
import instIcon from "../../assets/img/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col className="d-flex text-left mb-5">
            <img src={logo} alt="Logo" className="imgLogo"/>
            <a href="#" className="logo"> LOGO </a>
          </Col>
          <Col className="text-right text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/raghda-alshaikh-ali/"><img src={linkIcon} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100011194064681">
                <img src={faceIcon} alt="Icon" />
              </a>
              <a href=""><img src={instIcon} alt="Icon" /></a>
            </div>
            <p> Creadet By <span className="spanfoot">Raghda Alshaikh Ali </span>| All Rights Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}