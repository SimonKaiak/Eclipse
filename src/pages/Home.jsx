import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/selector.css";
import "../styles/mangaFlipCard.css";

import MangaFlipCard from "../components/MangaFlipCard";

import gutsImg from "../assets/img/PP/gutspp.webp";
import griffithImg from "../assets/img/PP/griffithpp.webp";

// Img de los mangas.
import tomo1 from "../assets/img/mangas/tomo-01.webp";
import tomo2 from "../assets/img/mangas/tomo-02.webp";
import tomo3 from "../assets/img/mangas/tomo-03.webp";

// Colección de arcos y mangas.
// ✅ Ahora cada tomo trae chapters (cuadrados por cap) con URL por capítulo.
// ✅ Además: showLabelFront = true (muestra "Tomo X" al frente)
// ✅ y showLabelBack = false (no muestra el tomo atrás).
const ARCOS = [
  {
    id: "espada-negra",
    titulo: "Arco: Espadachín Negro",
    tomos: [
      {
        id: 1,
        titulo: "Tomo 1",
        img: tomo1,
        showLabelFront: true,
        showLabelBack: false,
        chapters: [
          { number: 1, url: "https://inmanga.com/ver/manga/Berserk/01/f873305c-1123-4269-ba51-0c9203aed015" },
          { number: 2, url: "https://inmanga.com/ver/manga/Berserk/02/2c7d0d4f-41c8-4840-9dc1-bbe0c7b47a57" },
          { number: 3, url: "https://inmanga.com/ver/manga/Berserk/03/7188c81e-9019-4d19-9e9b-684da7613f89" },
        ],
      },
      {
        id: 2,
        titulo: "Tomo 2",
        img: tomo2,
        showLabelFront: true,
        showLabelBack: false,
        chapters: [
          { number: 4, url: "https://inmanga.com/ver/manga/Berserk/04/6f1284cb-7e92-420a-8386-c92b0fe3513c" },
          { number: 5, url: "https://inmanga.com/ver/manga/Berserk/05/b383b5b5-edda-478c-8868-b700405694ea" },
        ],
      },
      {
        id: 3,
        titulo: "Tomo 3",
        img: tomo3,
        showLabelFront: true,
        showLabelBack: false,
        chapters: [
          { number: 6, url: "https://inmanga.com/ver/manga/Berserk/06/a0ca1960-2abd-4e4f-b69b-2c0aad12e6a0" },
          { number: 7, url: "https://inmanga.com/ver/manga/Berserk/07/03696e21-c73a-457d-b172-00ced7378f84" },
          { number: 8, url: "https://inmanga.com/ver/manga/Berserk/08/8929aed5-8f20-42f5-8503-c953dc83b663" },
        ],
      },
    ],
  },
];

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    document.activeElement?.blur?.();

    const el = document.getElementById(target);
    if (!el) return;

    const offset = 110;
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: Math.max(0, y - offset), behavior: "auto" });

    navigate(".", { replace: true, state: null });
  }, [location.state, navigate]);

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
                role="button"
                tabIndex={0}
                onClick={() => navigate("/guts")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") navigate("/guts");
                }}
              >
                <img className="selector-img" src={gutsImg} alt="Guts" />
                <div className="selector-overlay" />
                <div className="selector-badge guts">Guts • Espadachín Negro</div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={5}>
              <div
                className="selector-card griffith-theme"
                role="button"
                tabIndex={0}
                onClick={() => navigate("/griffith")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") navigate("/griffith");
                }}
              >
                <img className="selector-img" src={griffithImg} alt="Griffith" />
                <div className="selector-overlay" />
                <div className="selector-badge griffith">
                  Griffith • Halcón Blanco
                </div>
              </div>
            </Col>
          </Row>

          {/* ✅ ANCLA: SINOPSIS */}
          <div id="sinopsis-anchor" className="scroll-anchor" />

          <div className="selector-synopsis" id="sinopsis">
            <h2 className="synopsis-title">Sinopsis</h2>
            <p className="synopsis-text">
              <br />
              En un mundo donde la guerra define el valor de los hombres y los
              sueños se levantan sobre la sangre de otros, Guts avanza como un
              guerrero condenado a sobrevivir. Marcado por un pasado de violencia y
              abandono, lucha no solo contra enemigos visibles, sino contra la idea
              de que su vida ya ha sido decidida por fuerzas que escapan a su
              comprensión.
              <br />
              <br />
              Su encuentro con Griffith, carismático líder de la Banda del Halcón,
              altera el rumbo de su existencia. Mientras Griffith persigue un sueño
              capaz de justificar cualquier sacrificio, Guts comienza a cuestionar
              qué significa realmente vivir para uno mismo y si un hombre puede
              escapar del camino que le ha sido impuesto.
              <br />
              <br />
              Entre admiración y distancia, ambos encarnan caminos opuestos: el
              hombre que busca una razón propia para existir y el hombre dispuesto a
              trascender su humanidad para alcanzar su destino.
              <br />
              <br />
              A medida que la ambición, el deseo y la fragilidad humana se
              entrelazan con una oscuridad que supera la voluntad individual, la
              historia deja una pregunta inevitable:
              <br />
              <br />
              ¿son los hombres libres de elegir su camino, o solo avanzan siguiendo
              un destino ya escrito?
              <br />
              <br />
              Berserk es una reflexión sobre el dolor, la soledad y la persistencia
              de la voluntad humana frente a un mundo indiferente, donde seguir
              adelante puede convertirse en el único acto de verdadera rebelión.
            </p>
          </div>

          {/* ✅ ANCLA: MANGAS */}
          <div id="mangas-anchor" className="scroll-anchor" />

          <div className="selector-mangas" id="mangas">
            <h2 className="mangas-title">Mangas</h2>

            {ARCOS.map((arco) => (
              <div key={arco.id} className="mangas-arc-section">
                <h3 className="mangas-arc-title">{arco.titulo}</h3>

                <div className="mangas-rail mangas-rail--flip">
                  {arco.tomos.map((m) => (
                    <MangaFlipCard
                      key={m.id}
                      coverUrl={m.img}
                      tomoLabel={m.titulo}
                      showLabelFront={m.showLabelFront}
                      showLabelBack={m.showLabelBack}
                      chapters={m.chapters}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}