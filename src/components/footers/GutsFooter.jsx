import { Container } from "react-bootstrap";
import "../../styles/footers.css";

export default function GutsFooter() {
  return (
    <footer className="bp-footer bp-footer--guts">
      <Container fluid className="bp-footer__inner">
        <div>
          <div className="bp-footer__title">Guts • Espadachín Negro</div>
          <div className="bp-footer__sub">Tonalidad: Rojo / Negro</div>
        </div>

        <div className="bp-footer__right">
          <span>Modo Guts</span>
        </div>
      </Container>
    </footer>
  );
}