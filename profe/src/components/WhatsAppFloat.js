import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

const WhatsAppFloat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const phoneNumber = "+56995157498";
  const message = "Hola! Me interesan tus clases particulares, ¿podrías darme más información?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    setIsLoading(true);
    
    // Simular un pequeño delay para que se vea el loading
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsLoading(false);
    }, 500);
  };

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
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <Spinner
            animation="border"
            size="sm"
            role="status"
            style={{
              width: '20px',
              height: '20px'
            }}
          />
        ) : (
          <span style={{ fontSize: '28px' }}>💬</span>
        )}
      </Button>
    </div>
  );
};

export default WhatsAppFloat;