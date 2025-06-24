// src/components/Projects.jsx
import React from 'react';

function Projects({ lang }) {
  const textos = {
    pt: {
      titulo: 'Projetos',
      botao: 'Visualizar',
      descricao: [
        'Foi desenvolvido um portfólio para a Sabrina Schreiber Engenharia, visando aumentar a visibilidade da empresa no mercado, destacando seus serviços de engenharia com um layout moderno, responsivo e otimizado para dispositivos móveis.',
        'Foi criado um sistema web para a Mecânica Fogaça com funcionalidades como cadastro de clientes, peças, despesas, geração de orçamentos e controle financeiro mensal, facilitando a gestão completa da empresa e otimizando o fechamento do mês.',
        'Meu Porquinho foi desenvolvido como trabalho de conclusão de curso, sendo um website voltado ao controle financeiro pessoal. Ele permite aos usuários registrar suas despesas, gerenciar orçamentos e traçar metas de economia de forma prática e acessível.',
      ],
    },
    en: {
      titulo: 'Projects',
      botao: 'View',
      descricao: [
        'A portfolio was developed for Sabrina Schreiber Engenharia to increase the company’s market visibility, highlighting its engineering services with a modern, responsive layout optimized for mobile devices.',
        'A web system was created for Mecânica Fogaça with features such as client, parts, and expense registration, budget generation, and monthly financial control, enabling complete company management and optimizing month-end closing.',
        'Meu Porquinho was developed as a final course project, being a website focused on personal financial control. It allows users to record expenses, manage budgets, and set savings goals in a practical and accessible way.',
      ],
    },
  };

  const projetos = [
    {
      titulo: 'Sabrina Schreiber Engenharia',
      imagem: 'imgs/sseng.gif',
      tecnologias: 'React, TailWind CSS & EmailJS',
      descricao:
        'Foi desenvolvido um portfólio para a Sabrina Schreiber Engenharia, visando aumentar a visibilidade da empresa no mercado, destacando seus serviços de engenharia com um layout moderno, responsivo e otimizado para dispositivos móveis.',
      link: 'https://sabrinaschreiberengenharia.com.br/',
      ativo: true,
    },
    {
      titulo: 'Mecânica Fogaça',
      imagem: 'imgs/mecfogaca.gif',
      tecnologias: 'React, TailWind CSS, Material UI & Firebase',
      descricao:
        'Foi criado um sistema web para a Mecânica Fogaça com funcionalidades como cadastro de clientes, peças, despesas, geração de orçamentos e controle financeiro mensal, facilitando a gestão completa da empresa e otimizando o fechamento do mês.',
      link: 'https://mecanicafogaca.com.br/',
      ativo: true,
    },
    {
      titulo: 'Meu Porquinho',
      imagem: 'imgs/Mporquin.gif',
      tecnologias: 'HTML, CSS, JavaScript & Firebase',
      descricao:
        'Meu Porquinho foi desenvolvido como trabalho de conclusão de curso, sendo um website voltado ao controle financeiro pessoal. Ele permite aos usuários registrar suas despesas, gerenciar orçamentos e traçar metas de economia de forma prática e acessível.',
      link: 'https://controlededinheiro-gff.netlify.app/',
      ativo: true,
    },
  ];

  return (
    <div className="container projetos overflow-projetos">
      <div className="row flex-column align-items-center">
        <h2 className="my-4 text-center">{textos[lang].titulo}</h2>
        {projetos.map((projeto, index) => (
          <div className="col-12 mb-4 mt-2" key={index}>
            <div className="card text-center">
              <img
                src={projeto.imagem}
                className="card-img-top img-fluid"
                alt={projeto.titulo}
              />
              <div className="card-body">
                <h5 className="card-title">{projeto.titulo}</h5>
                <p>
                  <strong>
                    {lang === 'pt' ? 'Tecnologias' : 'Technologies'}:
                  </strong>{' '}
                  {projeto.tecnologias}
                </p>
                <p className="card-text">{textos[lang].descricao[index]}</p>
                {projeto.ativo ? (
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {textos[lang].botao}
                  </a>
                ) : (
                  <button className="btn btn-secondary" disabled>
                    {lang === 'pt' ? 'Em breve' : 'Coming soon'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
