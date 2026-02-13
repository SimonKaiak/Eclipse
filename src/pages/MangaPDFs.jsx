import { Container, Row, Col, Card, Button } from "react-bootstrap";

const MANGAS = [
  { id: 1, titulo: "Tomo 1", archivo: "" },
  { id: 2, titulo: "Tomo 2", archivo: "" },
];

export default function MangaPDFs() {
  return (
    <Container className="py-4">
      <h2>Mangas en PDF</h2>
      <p className="text-muted">Aquí aparecerán los tomos que adjuntes.</p>

      <Row className="g-3">
        {MANGAS.map((m) => (
          <Col key={m.id} xs={12} sm={6} md={4} lg={3}>
            <Card bg="dark" text="light" className="h-100">
              <Card.Body>
                <Card.Title>{m.titulo}</Card.Title>
                <Card.Text className="text-secondary">
                  PDF aún no asignado
                </Card.Text>
                <Button variant="secondary" disabled>
                  Abrir
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}