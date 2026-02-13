import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/selector.css";

import gutsImg from "../assets/img/PP/gutspp.webp";
import griffithImg from "../assets/img/PP/griffithpp.webp";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="selector-wrap">
      <Container fluid>
        <div className="selector-inner text-center">
          <h1 className="selector-title">- Berserk -</h1>
          <p className="selector-sub">Elige el enfoque visual.</p>

          <Row className="g-4 justify-content-center">
            <Col xs={12} md={6} lg={5}>
              <div
                className="selector-card guts-theme"
                onClick={() => navigate("/guts")}
              >
                <img className="selector-img" src={gutsImg} alt="Guts" />
                <div className="selector-overlay" />
                <div className="selector-badge guts">
                  Guts • Espadachín Negro
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={5}>
              <div
                className="selector-card griffith-theme"
                onClick={() => navigate("/griffith")}
              >
                <img className="selector-img" src={griffithImg} alt="Griffith" />
                <div className="selector-overlay" />
                <div className="selector-badge griffith">
                  Griffith • Halcón Blanco
                </div>
              </div>
            </Col>
          </Row>

          <div className="selector-synopsis">
            <h2 className="synopsis-title">Sinopsis</h2>
            <p className="synopsis-text">
                <br></br>
                En un mundo donde la guerra define el valor de los hombres y los sueños se levantan sobre la sangre de otros, Guts avanza como un guerrero condenado a sobrevivir. Marcado por un pasado de violencia y abandono, lucha no solo contra enemigos visibles, sino contra la idea de que su vida ya ha sido decidida por fuerzas que escapan a su comprensión.
                <br></br><br></br>

                Su encuentro con Griffith, carismático líder de la Banda del Halcón, altera el rumbo de su existencia. Mientras Griffith persigue un sueño capaz de justificar cualquier sacrificio, Guts comienza a cuestionar qué significa realmente vivir para uno mismo y si un hombre puede escapar del camino que le ha sido impuesto.
                <br></br><br></br>

                Entre admiración y distancia, ambos encarnan caminos opuestos: el hombre que busca una razón propia para existir y el hombre dispuesto a trascender su humanidad para alcanzar su destino.
                <br></br><br></br>

                A medida que la ambición, el deseo y la fragilidad humana se entrelazan con una oscuridad que supera la voluntad individual, la historia deja una pregunta inevitable:
                <br></br><br></br>

                ¿son los hombres libres de elegir su camino, o solo avanzan siguiendo un destino ya escrito?
                <br></br><br></br>

                Berserk es una reflexión sobre el dolor, la soledad y la persistencia de la voluntad humana frente a un mundo indiferente, donde seguir adelante puede convertirse en el único acto de verdadera rebelión.
                </p>
            </div>
        </div>
      </Container>
    </div>
  );
}