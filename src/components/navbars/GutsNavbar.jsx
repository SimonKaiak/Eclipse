import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../styles/guts.css";

export default function GutsNavbar() {
  return (
    <Navbar
        className="guts-nav"
        expand="lg"
        variant="dark"
        style={{
            backgroundColor: "#0a0a0a",
            borderBottom: "3px solid #8b0000",
            boxShadow: "0 0 15px rgba(139, 0, 0, 0.7)",
        }}
        >
      <Container>
        <Navbar.Brand style={{ color: "#b30000", fontWeight: "bold" }}>
          Guts ⚔️
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="guts-navbar" />
        <Navbar.Collapse id="guts-navbar">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/guts"
            >
              Inicio
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/guts/golden-age"
              style={{ color: "#ccc" }}
            >
              Golden Age
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/guts/eclipse"
              style={{ color: "#ccc" }}
            >
              Eclipse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}