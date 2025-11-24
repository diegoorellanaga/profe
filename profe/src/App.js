import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Badge,
  Navbar,
  ListGroup
} from 'react-bootstrap';

// Importar datos desde archivos separados
import { subjectsData } from './data/subjectsData';
import { contactInfo } from './data/contactInfo';
import { heroData } from './data/heroData';
import { procedureData } from './data/procedureData';
import WhatsAppFloat from './components/WhatsAppFloat';
import miFoto from './data/images/meia.png'; // Ajusta la ruta según donde esté tu imagen
function App() {
  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            🎓 Clases Particulares
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              📞 {contactInfo.phone}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
                      {/* <img 
                src={miFoto}
                alt="Profesor Diego Orellana"
                className="rounded-circle"

              /> */}
      {/* Hero Section */}
      <Container className="py-5">

        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4">
            <div className="bg-white rounded-circle p-2 shadow" style={{width: '200px', height: '200px', margin: '0 auto', overflow: 'hidden'}}>
    <img 
      src={miFoto}
      alt="Profesor Diego Orellana"
      className="w-100 h-100 object-fit-cover rounded-circle"
    />
              {/* Fallback si la imagen no carga */}

            </div>
          </Col>
          <Col md={8}>
            <h1 className="display-5 fw-bold text-primary">
              {heroData.title}
            </h1>
            <p className="lead text-muted">
              {heroData.subtitle}
            </p>
            <div className="d-flex gap-2 flex-wrap">
              {heroData.badges.map((badge, index) => (
                <Badge key={index} bg={badge.variant} className="fs-6">
                  {badge.text}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Procedure Section - NUEVA SECCIÓN */}
      <Container className="py-5 bg-white">
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2 className="text-center mb-5 fw-bold">{procedureData.title}</h2>
            <Row>
              {procedureData.steps.map((step, index) => (
                <Col md={6} lg={3} key={index} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm text-center">
                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <Badge 
                          bg="primary" 
                          className="fs-4 rounded-circle"
                          style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}
                        >
                          {step.number}
                        </Badge>
                      </div>
                      <div className="fs-1 mb-3">{step.icon}</div>
                      <Card.Title className="h5">{step.title}</Card.Title>
                      <Card.Text className="text-muted">
                        {step.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            
            {/* Nota adicional */}
            <Card className="mt-4 border-warning">
              <Card.Body className="text-center">
                <p className="mb-0">
                  <strong>💡 Importante:</strong> Las clases son 100% personalizadas. 
                  Envíame con anticipación los ejercicios y temas específicos que quieres repasar.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Subjects Section */}
      <Container className="py-5">
        <Row>
          <Col>
            <h2 className="text-center mb-5 fw-bold">📖 Materias que Enseño</h2>
            <Row>
              {subjectsData.map((subject, index) => (
                <Col lg={6} key={index} className="mb-4">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Header className="bg-white border-0">
                      <h5 className="fw-bold mb-0">{subject.category}</h5>
                    </Card.Header>
                    <Card.Body>
                      <ListGroup variant="flush">
                        {subject.items.map((item, itemIndex) => (
                          <ListGroup.Item key={itemIndex} className="border-0 px-0 py-2">
                            <span className="text-success me-2">✓</span>
                            {item}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <Card className="border-0 shadow">
              <Card.Body className="p-5">
                <h3 className="fw-bold text-primary mb-4">📞 ¡Contáctame para tus Clases!</h3>
                
                <div className="mb-4">
                  <p className="lead">
                    ¿Tienes ejercicios específicos o temas que necesitas repasar? 
                    ¡Envíamelos y preparo una clase personalizada para ti!
                  </p>
                </div>
                
                <Row className="text-center">
                  <Col md={4} className="mb-3">
                    <div className="p-3">
                      <div className="fs-1 mb-2">📱</div>
                      <h6>Teléfono/WhatsApp</h6>
                      <p className="text-muted mb-0">{contactInfo.phone}</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="p-3">
                      <div className="fs-1 mb-2">✉️</div>
                      <h6>Email</h6>
                      <p className="text-muted mb-0">{contactInfo.email}</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="p-3">
                      <div className="fs-1 mb-2">📍</div>
                      <h6>Modalidad</h6>
                      <p className="text-muted mb-0">{contactInfo.location}</p>
                    </div>
                  </Col>
                </Row>
                
                <Button 
                  variant="success" 
                  size="lg" 
                  className="mt-3 px-4 py-2 fw-bold"
                  href={contactInfo.whatsapp}
                  target="_blank"
                >
                  💬 Enviar Material por WhatsApp
                </Button>
                
                <div className="mt-2">
                  <small className="text-muted">
                    Incluye los temas/ejercicios que quieres repasar
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0">
                © {new Date().getFullYear()} Clases Particulares - {contactInfo.name}
              </p>
              <small className="text-muted">
                Educación personalizada para tu éxito académico
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
          <WhatsAppFloat />
    </div>
  );
}

export default App;