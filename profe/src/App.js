import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalendlyScheduler from './components/CalendlyScheduler';
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
import { subjectsData } from './data/subjectsData';
import { contactInfo } from './data/contactInfo';
import { heroData } from './data/heroData';
import { procedureData } from './data/procedureData';
import WhatsAppFloat from './components/WhatsAppFloat';
import miFoto from './data/images/meia.png';

// En tu App.js - versión con la paleta profesional
function App() {
  const isMobile = window.innerWidth < 768;

  const sectionBackgrounds = [
    'bg-white',                    // Hero
    'custom-light-bg',            // Materias  
    'custom-primary-light',       // Procedimiento
    'bg-white',                   // Contacto
  ];

  return (
    <div className="min-vh-100">
      {/* Navbar - Azul profesional */}
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow" style={{backgroundColor: '#2563eb'}}>
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            🎓 Clases Particulares
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>📞 {contactInfo.phone}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className={sectionBackgrounds[0]}>
        <Container className="py-5">
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4">
              <div className="bg-white rounded-circle p-2 shadow" style={{ width: '200px', height: '200px', margin: '0 auto', overflow: 'hidden' }}>
                <img src={miFoto} alt="Profesor Diego Orellana" className="w-100 h-100 object-fit-cover rounded-circle" />
              </div>
            </Col>
            <Col md={8}>
              <h1 className="display-5 fw-bold" style={{color: '#2563eb'}}>{heroData.title}</h1>
              <p className="lead text-muted">{heroData.subtitle}</p>
              <div className="d-flex gap-2 flex-wrap">
                {heroData.badges.map((badge, index) => (
                  <Badge key={index} style={{backgroundColor: '#059669'}} className="fs-6">{badge.text}</Badge>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Subjects Section - Gris muy claro */}
      <section style={{backgroundColor: '#f8fafc'}}>
        <Container className="py-5">
          <h2 className="text-center mb-5 fw-bold" style={{color: '#1e293b'}}>📖 Materias que Enseño</h2>
          <Row>
            {subjectsData.map((subject, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card className="h-100 shadow-sm border-0">
                  <Card.Header className="text-white fw-bold" style={{backgroundColor: '#2563eb'}}>
                    {subject.category}
                  </Card.Header>
                  {!isMobile && (
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
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Procedure Section - Azul muy claro */}
      <section style={{backgroundColor: '#eff6ff'}}>
        <Container className="py-5">
          <h2 className="text-center mb-5 fw-bold" style={{color: '#1e293b'}}>{procedureData.title}</h2>
          <Row>
            {procedureData.steps.map((step, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="h-100 shadow-sm border-0 text-center">
                  <Card.Body className="p-4">
                    <Badge 
                      className="fs-4 rounded-circle mb-3" 
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        margin: '0 auto',
                        backgroundColor: '#7c3aed'
                      }}
                    >
                      {step.number}
                    </Badge>
                    <div className="fs-1 mb-3">{step.icon}</div>
                    <Card.Title style={{color: '#1e293b'}}>{step.title}</Card.Title>
                    <Card.Text className="text-muted">{step.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="bg-white">
        <Container className="py-5">
          <Row className="gy-4">
            <Col lg={6}>
              <Card className="shadow-lg border-0 text-center h-100">
                <Card.Header className="text-white py-4" style={{backgroundColor: '#059669'}}>
                  <h3 className="mb-0">📞 ¡Contáctame!</h3>
                  <p className="mb-0 mt-2 opacity-75">Escríbeme para coordinar tu clase</p>
                </Card.Header>
                <Card.Body className="p-5">
                  <Row className="text-center mb-4">
                    <Col>
                      <div className="fs-1 mb-2">📱</div>
                      <p className="fw-bold mb-1">Teléfono</p>
                      <p className="text-muted">{contactInfo.phone}</p>
                    </Col>
                    <Col>
                      <div className="fs-1 mb-2">✉️</div>
                      <p className="fw-bold mb-1">Email</p>
                      <p className="text-muted">{contactInfo.email}</p>
                    </Col>
                  </Row>
                  <Button
                    href={contactInfo.whatsapp}
                    target="_blank"
                    style={{backgroundColor: '#059669', borderColor: '#059669'}}
                    size="lg"
                    className="w-100 fw-bold py-3"
                  >
                    💬 Enviar mensaje por WhatsApp
                  </Button>
                </Card.Body>
                <Card.Footer className="text-center bg-light">
                  <small className="text-muted">📌 Respuesta rápida garantizada</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={6}>
              <CalendlyScheduler />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#1e293b'}} className="text-white py-4 text-center">
        <p className="mb-0">© {new Date().getFullYear()} Clases Particulares - {contactInfo.name}</p>
        <small className="text-muted">Educación personalizada para tu éxito académico</small>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}

export default App;