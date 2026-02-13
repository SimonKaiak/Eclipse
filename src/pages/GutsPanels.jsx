import { Container } from "react-bootstrap";

export default function GutsPanels() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#ccc",
        padding: "36px 0",
        width: "100%",
      }}
    >
      <Container>
        <h2 style={{ color: "#b30000", letterSpacing: "0.5px" }}>
          Paneles de Guts
        </h2>
        <p style={{ maxWidth: 680, color: "#bfbfbf" }}>
          Aquí irán los momentos más brutales del Espadachín Negro.
        </p>
      </Container>
    </div>
  );
}