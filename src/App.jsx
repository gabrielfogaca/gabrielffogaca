import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import $ from 'jquery';
import './index.css'; // Comentado porque o arquivo index.css não foi encontrado. Verifique o caminho ou crie o arquivo.
import Inicio from './assets/components/gf.jsx';
import Experiencia from './assets/components/experiencia.jsx';
import Projetos from './assets/components/projetos.jsx';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [resolvedText, setResolvedText] = useState('');

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
          Experiência
        </button>
        <button
          className="accordion"
          onClick={() => setActiveSection('projects')}
        >
          Projetos
        </button>
      </nav>

      {activeSection === 'home' && <Inicio />}

      {activeSection === 'experience' && <Experiencia />}

      {activeSection === 'projects' && <Projetos />}
    </section>
  );
};

export default App;
