import { Container } from "react-bootstrap";
import "../../styles/footers.css";

export default function GriffithFooter() {
  return (
    <footer className="bp-footer bp-footer--griffith">
      <Container fluid className="bp-footer__inner">
        <div>
          <div className="bp-footer__title">Griffith • Halcón Blanco</div>
          <div className="bp-footer__sub">Tonalidad: Blanco / Gris</div>
        </div>

        <div className="bp-footer__right">
          <span>Modo Griffith</span>
        </div>
      </Container>
    </footer>
  );
}