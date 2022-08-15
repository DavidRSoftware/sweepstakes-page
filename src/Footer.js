import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
        <div className="footer">
            <Container className="footer-text">
                <Row>
                    <Col className="d-md-flex flex-wrap mt-5 justify-content-center">
                        <div className="footer-item">Privacy Policy</div>
                        <div className="footer-item">Terms of Use</div>
                        <div className="footer-item">CA Residents Only - Do Not Sell My Info</div>
                        <div className="footer-item">California Privacy</div>
                        <div className="footer-item">Unsubscribe</div>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-3 mb-md-1 mt-5">
                        <div>
                            <div className="footer-text-small">
                                &copy; 2022 SweepsJunkie.com All Rights Reserved
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;