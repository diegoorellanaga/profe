import React from 'react';
import { Button } from 'react-bootstrap';

const WhatsAppFloat = () => {
  const phoneNumber = "+56995157498"; // Tu número sin espacios ni símbolos
  const message = "Hola! Me interesan tus clases particulares, ¿podrías darme más información?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="position-fixed bottom-0 end-0 m-3" style={{ zIndex: 1030 }}>
      <Button
        variant="success"
        size="lg"
        className="rounded-circle shadow"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderColor: '#25D366'
        }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span style={{ fontSize: '28px' }}>💬</span>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;