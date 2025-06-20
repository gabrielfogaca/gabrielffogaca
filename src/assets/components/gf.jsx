import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TypewriterHeading from './TypewriterHeading';
import Contato from './contato.jsx';

function Inicio({ resolvedText, setActiveSection }) {
  return (
    <div id="home" className="content active">
      <div className="row">
        <div className="col home-leftSide">
          {/* <h1 className="heading">{resolvedText}</h1> */}
          <TypewriterHeading />
          <span>
            Desenvolvedor web com experiência em aplicações full stack. Domínio
            de React, Node.js, MySQL, Firebase e Tailwind CSS. Foco em
            interfaces responsivas, integração com APIs RESTful e bancos de
            dados relacionais.{' '}
          </span>
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
            Contato
          </button>
          <Contato />
        </div>
        <div className="col home-rightSide">
          <img
            className="profilePhoto"
            src="imgs/eu.jpeg"
            alt="Foto de Perfil"
          />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
