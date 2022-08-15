import Container from "react-bootstrap/Container";
import fire from "./images/fire.svg";

function Header() {
    return (
        <div className="header">
            <Container>
                <div className="d-flex pt-4">
                    <img src={fire} alt="" />
                    <div className="logo-text align-self-end">Sweepstakes Delight</div>
                </div>
            </Container>
        </div>
    );
}

export default Header;