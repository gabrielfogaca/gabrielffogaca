import React, { useState } from 'react';

function Contato() {
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = (e) => {
    setShowMsg(true);
    // O formulário ainda será enviado normalmente
    setTimeout(() => setShowMsg(false), 2500);
  };

  return (
    <>
      {showMsg && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
          }}
        >
          <div
            style={{
              background: '#fff',
              color: '#222',
              padding: '32px 48px',
              borderRadius: '18px',
              fontSize: '1.3rem',
              boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
            }}
          >
            Mensagem enviada com sucesso!
          </div>
        </div>
      )}

      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">
                Entre em Contato!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                action="https://submit-form.com/xaKfeiSD7"
                className="contact-form"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="_redirect"
                  value="https://gabrielfogaca.github.io/gabrielffogaca/"
                />
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome"
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Assunto"
                  required
                ></textarea>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contato;
