import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import $ from 'jquery';
import './index.css';
import Inicio from './assets/components/gf.jsx';
import Experiencia from './assets/components/experiencia.jsx';
import Projetos from './assets/components/projetos.jsx';
import Contato from './assets/components/contato';

const textos = {
  pt: {
    experiencia: "Experiência",
    projetos: "Projetos",
  },
  en: {
    experiencia: "Experience",
    projetos: "Projects",
  }
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [resolvedText, setResolvedText] = useState('');
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    let isCancelled = false;
    const stringToResolve = 'Gabriel Furlan Fogaça';

    const randomChar = () => ['.', '|'][Math.floor(Math.random() * 2)];

    const resolveText = (text, index = 0) => {
      if (isCancelled || index > text.length) return;

      const partial = text.substring(0, index);
      setResolvedText(index < text.length ? partial + randomChar() : partial);
      setTimeout(() => resolveText(text, index + 1), 40);
    };

    resolveText(stringToResolve);
    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const Utils = {
      isElementInView: function (element, fullyInView) {
        const pageTop = $(window).scrollTop();
        const pageBottom = pageTop + $(window).height();
        const elementTop = $(element).offset().top;
        const elementBottom = elementTop + $(element).height();

        return fullyInView
          ? pageTop < elementTop && pageBottom > elementBottom
          : elementTop <= pageBottom && elementBottom >= pageTop;
      },
    };

    function addFadeIn(repeat = false) {
      const classToFadeIn = '.will-fadeIn';
      $(classToFadeIn).each(function (index) {
        const isInView = Utils.isElementInView($(this), false);
        if (isInView) {
          if (
            !$(this).hasClass('fadeInRight') &&
            !$(this).hasClass('fadeInLeft')
          ) {
            $(this).addClass(index % 2 === 0 ? 'fadeInRight' : 'fadeInLeft');
          }
        } else if (repeat) {
          $(this).removeClass('fadeInRight fadeInLeft');
        }
      });
    }

    $(window).on('load', () => addFadeIn());
    $(window).on('scroll', () => addFadeIn(true));

    return () => {
      $(window).off('load');
      $(window).off('scroll');
    };
  }, []);

  return (
    <section className="center">
      <nav className="navbar">
        <button
          className="accordion stylenavbar"
          onClick={() => setActiveSection('home')}
        >
          GF
        </button>
        <button
          className="accordion"
          onClick={() => setActiveSection('experience')}
        >
          {textos[lang].experiencia}
        </button>
        <button
          className="accordion"
          onClick={() => setActiveSection('projects')}
        >
          {textos[lang].projetos}
        </button>
      </nav>

      <button
        onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 1000,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '2rem',
        }}
        aria-label={
          lang === 'pt' ? 'Switch to English' : 'Mudar para Português'
        }
      >
        {lang === 'pt' ? (
          <img
            src="https://flagcdn.com/w40/br.png"
            alt="Brasil"
            style={{ width: 32, height: 24 }}
          />
        ) : (
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="EUA"
            style={{ width: 32, height: 24 }}
          />
        )}
      </button>

      {activeSection === 'home' && <Inicio lang={lang} />}

      {activeSection === 'experience' && <Experiencia lang={lang} />}

      {activeSection === 'projects' && <Projetos lang={lang} />}

      <Contato lang={lang} />
    </section>
  );
};

export default App;
