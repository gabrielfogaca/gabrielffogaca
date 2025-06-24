import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TypewriterHeading from './TypewriterHeading';
import Contato from './contato.jsx';

function Inicio({ lang }) {
  const textos = {
    pt: {
      descricao:
        'Desenvolvedor web com experiencia em React, Node.js, MySQL, Firebase e Tailwind CSS. Foco em interfaces responsivas, integração com APIs e bancos de dados.',
      contato: 'Contato',
      altFoto: 'Foto de Perfil',
    },
    en: {
      descricao:
        'Web developer with experience in React, Node.js, MySQL, Firebase, and Tailwind CSS. Focused on responsive interfaces, API integration, and database management.',
      contato: 'Contact',
      altFoto: 'Profile Photo',
    },
  };

  return (
    <div id="home" className="content active">
      <div className="row">
        <div className="col home-leftSide">
          <TypewriterHeading lang={lang} />
          <span>{textos[lang].descricao}</span>
          <div>
            <a
              href="https://github.com/gabrielfogaca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-furlan-foga%C3%A7a-125a49218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/gabrielfog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            {textos[lang].contato}
          </button>
          <Contato lang={lang} />
        </div>
        <div className="col home-rightSide">
          <img
            className="profilePhoto"
            src="imgs/eu.jpeg"
            alt={textos[lang].altFoto}
          />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
