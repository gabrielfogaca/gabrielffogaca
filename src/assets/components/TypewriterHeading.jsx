// Substitua o resolvedText pelo componente abaixo

import React, { useState, useEffect } from 'react';

function TypewriterHeading({ lang }) {
  const texts = lang === 'pt'
    ? ['Bem-vindo', 'Gabriel Furlan Fogaça']
    : ['Welcome', 'Gabriel Furlan Fogaça'];
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentText = texts[textIndex];

    if (!deleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!deleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  return <h1 className="heading">{displayed}</h1>;
}

export default TypewriterHeading;
