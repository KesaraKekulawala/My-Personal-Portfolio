import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/linkedin-round-svgrepo-com.svg';
import navIcon2 from '../assets/img/facebook-svgrepo-com.svg';
import navIcon3 from '../assets/img/github-142-svgrepo-com.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                     <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                                <a href='https://www.linkedin.com/in/kesara-kekulawala-392077230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={navIcon1} alt='LinkedIn' /></a>
                                <a href='https://www.facebook.com/kesara.kekulawala.1?mibextid=ZbWKwL'><img src={navIcon2} alt='Facebook' /></a>
                                <a href='https://github.com/KesaraKekulawala'><img src={navIcon3} alt='Github' /></a>
                    </div>
                    <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}