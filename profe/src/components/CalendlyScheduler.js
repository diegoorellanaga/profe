import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { calendlyConfig } from '../data/calendlyConfig';

const CalendlyScheduler = () => {
  const openCalendly = () => {
    const url = `${calendlyConfig.baseUrl}/${calendlyConfig.user}/${calendlyConfig.eventType}`;
    window.Calendly.initPopupWidget({ url });
  };


  const isMobile = window.innerWidth < 768;

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
    {isMobile ? (
      <Button 
        variant="success"
        size="lg"
        onClick={openCalendly}
        className="w-100 fw-bold py-3"
      >
        📅 Agendar Clase
      </Button>
    ) : (
      <Card className="shadow-lg border-0 text-center h-100">
        <Card.Header className="bg-success text-white py-4">
          <h3 className="mb-0">🎓 Agenda tu Clase Particular</h3>
          <p className="mb-0 mt-2 opacity-75">
            Sesión personalizada de 60 minutos
          </p>
        </Card.Header>
        
        <Card.Body className="p-5">
          <div className="mb-4">
            <p className="lead">
              Reserva tu clase de Matemáticas, Física,  Programación o Inglés
            </p>
          </div>
          
          <Button 
            variant="success" 
            size="lg"
            onClick={openCalendly}
            className="px-5 py-3"
          >
            📅 Agendar Clase - 60 Minutos
          </Button>
        </Card.Body>
        
        <Card.Footer className="text-center bg-light">
          <small className="text-muted">
            ✅ Integrado con Google Calendar & Google Meet
          </small>
        </Card.Footer>
      </Card>
    )}
  </>
  );
};

export default CalendlyScheduler;