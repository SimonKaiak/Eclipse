import { useState } from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../styles/griffith.css";

export default function GriffithNavbar() {
  const [show, setShow] = useState(false);

  return (
    <Navbar
      variant="light"
      sticky="top"
      className="griffith-nav"
    >
      <Container fluid className="position-relative">
        {/* ☰ Hamburguesa */}
        <button
          className="bp-burger griffith-burger"
          aria-label="Abrir menú"
          onClick={() => setShow(true)}
        >
          ☰
        </button>

        {/* Brand centrado: Eclipse */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          end
          className="bp-brand griffith-brand position-absolute start-50 translate-middle-x fw-bold"
        >
          °-_ Eclipse _-°
        </Navbar.Brand>

        {/* Offcanvas (vacío por ahora) */}
        <Offcanvas
          show={show}
          onHide={() => setShow(false)}
          placement="start"
          className="griffith-offcanvas"
          transition={false}
          restoreFocus={false}
          autoFocus={false}
          enforceFocus={false}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="griffith-offcanvas-title">
              {/* vacío por ahora */}
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            {/* vacío intencionalmente */}
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}