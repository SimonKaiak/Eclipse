import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

export default function MainNavbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const smoothScrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = window.matchMedia("(max-width: 768px)").matches ? 60 : 110;
    const y = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: Math.max(0, y - offset),
      behavior: "auto",
    });
  };

  const goToSection = (id) => {
    // por si quedó algo enfocado adentro
    document.activeElement?.blur?.();

    if (window.location.pathname === "/") {
      setShow(false);

      // ✅ scrollea después del cierre (sin que el foco te empuje arriba)
      setTimeout(() => smoothScrollToId(id), 0);
      return;
    }

    setShow(false);
    navigate("/", { state: { scrollTo: id } });
  };

  return (
    <Navbar
      variant="dark"
      sticky="top"
      style={{ backgroundColor: "#111", borderBottom: "1px solid #222" }}
    >
      <Container fluid className="position-relative">
        <button
          className="bp-burger"
          aria-label="Abrir menú"
          onClick={() => setShow(true)}
        >
          ☰
        </button>

        <Navbar.Brand
          as={NavLink}
          to="/"
          end
          className="bp-brand position-absolute start-50 translate-middle-x fw-bold"
        >
          _-° Eclipse °-_
        </Navbar.Brand>

        <Offcanvas
          show={show}
          onHide={() => setShow(false)}
          placement="start"
          className="bp-offcanvas"
          transition={false}
            /* ✅ EVITA EL “SALTO HACIA ARRIBA” */
          restoreFocus={false}
          autoFocus={false}
          enforceFocus={false}
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title className="bp-offcanvas-title">
              Explorar
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="flex-column gap-2">
              <button className="bp-off-link" onClick={() => goToSection("sinopsis")}>
                Sinopsis
              </button>
              <button className="bp-off-link" onClick={() => goToSection("mangas")}>
                Mangas
              </button>
              <button className="bp-off-link" onClick={() => goToSection("footer")}>
                Información y Contacto
              </button>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}