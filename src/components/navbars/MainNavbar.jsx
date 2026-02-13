import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      style={{ backgroundColor: "#111", borderBottom: "1px solid #222" }}
    >
      <Container fluid className="position-relative">

        {/* Centro absoluto */}
        <Navbar.Brand
            as={NavLink}
            to="/"
            end
            className="bp-brand position-absolute start-50 translate-middle-x fw-bold"
            >
            _-° Eclipse °-_
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/mangas">
              Mangas (PDF)
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}