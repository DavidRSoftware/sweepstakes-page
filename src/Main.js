import bills from './images/dollars-falling-with-background.png';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Main() {
    return (
        <>
            <div className='main-one'>
                <Container fluid="sm">
                    <Row>
                        <Col md={5} className='d-none d-md-block'>
                            <div className="d-flex flex-column main-section-left mt-5">
                                <div className="win-big-text align-self-center">Win Big!</div>
                                <img src={bills} alt="" className='img-fluid' />

                                <div className="details-text mt-5 d-none d-lg-block">
                                    Many different sweepstakes and games brought right to you!
                                </div>
                                <div className="details-text d-none d-lg-block">
                                    You can enter to win as many sweepstakes as you like.
                                </div>
                            </div>
                        </Col>
                        <Col sm={{ span: 9, offset: 2 }} md={{ span: 6, offset: 1 }} lg={{ span: 5, offset: 1 }}>
                            <Form className='form-background form-text p-4 mt-5' autoComplete="off">

                                <div className="h2 mb-3">Fill out this form for your chance to win!</div>

                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="" autoComplete="new-password" />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="" autoComplete="new-password" />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="" autoComplete="new-password" />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="text" placeholder="" autoComplete="new-password" />
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="orange" type="button" size="lg">
                                        Submit!
                                    </Button>
                                </div>
                                <div className="mt-4">By clicking the “Submit” button, you certify that you have provided your legal name and your own phone number, you agree to the Terms and Conditions and Privacy Policy and authorize Sweeps Junkie and its partners to contact you by email or at the phone number you entered using automated technology including recurring auto-dialers, pre-recorded messages, and text messages, even if your phone is a mobile number or is currently listed on any state, federal, or corporate “Do Not Call” list. You understand that your telephone company may impose charges on you for these contacts, and that you can revoke this consent at any time. For SMS campaigns Text STOP to cancel and HELP for help. Message and data rates may apply. You are not required to give your consent as a condition of service. By clicking the “Submit” button and submitting this form, I affirm that I have read and agree to this Site’s Terms and Conditions (including the arbitration provision and the E-SIGN consent) and Privacy Policy.</div>

                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 9, offset: 2 }}>
                            <div className='details-text d-lg-none mt-4'>
                                <div className="">
                                    Many different sweepstakes and games brought right to you!
                                </div>
                                <div className="mt-3">
                                    You can enter to win as many sweepstakes as you like.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="main-two">

            </div>
        </>
    );
}

export default Main;