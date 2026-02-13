import { Container } from "react-bootstrap";
import "../../styles/footers.css";

export default function MainFooter() {
  return (
    <footer className="bp-footer bp-footer--main">
      <Container fluid className="bp-footer__inner">
        
        <div className="bp-footer__col">
          <div className="bp-footer__title">Eclipse</div>
          <div className="bp-footer__sub">
            Proyecto visual inspirado en la obra de Kentaro Miura.
          </div>
        </div>

        <div className="bp-footer__col">
          <div className="bp-footer__section-title">Contacto</div>
          <div className="bp-footer__contact">
            📱 +56 9 5968 7211
          </div>
          <div className="bp-footer__contact">
            ✉ christiantroncoso17@gmail.com
          </div>
        </div>

        <div className="bp-footer__col">
          <div className="bp-footer__section-title">Información</div>
          <div className="bp-footer__meta">
            Fan project • NoLimits
          </div>
          <div className="bp-footer__meta">
            © {new Date().getFullYear()}
          </div>
        </div>

      </Container>
    </footer>
  );
}
