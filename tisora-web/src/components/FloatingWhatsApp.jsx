import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/916359956385"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}
      aria-label="Chat with us on WhatsApp"
    >
      <img 
        src="/whatsapp-icon.png" 
        alt="WhatsApp" 
        className="floating-whatsapp__icon" 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </a>
  );
}
