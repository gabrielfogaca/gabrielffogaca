import React from 'react';

function Experiencia({ lang }) {
  const textos = {
    pt: {
      experiencias: [
        {
          empresa: 'Mecânica Fogaça',
          cargo: 'Desenvolvedor Web - Freelancer',
          duracao: 'nov de 2024 - fev de 2025',
          link: 'https://www.mecanicafogaca.com.br/',
          logo: 'imgs/logo.png',
          alt: 'mecanica logo',
          itens: [
            'Desenvolvimento completo de um sistema web personalizado para uma oficina mecânica localizada em Ijuí, RS.',
            'O sistema permite operações completas de CRUD para: Clientes, Peças, Despesas.',
            'Funcionalidade para geração de orçamentos e pedidos, com cálculo automático de valores.',
            'Criação de uma homepage exclusiva, apresentando informações da empresa de forma profissional e acessível online.',
            'Interface responsiva e amigável, pensada para facilitar o uso em diferentes dispositivos.',
          ],
        },
        {
          empresa: 'Sabrina Schreiber Engenharia',
          cargo: 'Desenvolvedor Web - Freelancer',
          duracao: 'jul de 2024 - set de 2024',
          link: 'https://www.sabrinaschreiberengenharia.com.br/',
          logo: 'imgs/logo1.jpeg',
          alt: 'SS Engenharia logo',
          itens: [
            'Criação de uma homepage profissional para uma empresa de engenharia localizada em Ijuí, RS.',
            'A empresa é especializada em regularizações de imóveis e construções.',
            'O site apresenta de forma clara e objetiva: Serviços oferecidos, Missão da empresa, Informações de contato',
            'Layout responsivo, com design pensado para atender o público local e transmitir credibilidade.',
          ],
        },
        {
          empresa: 'Unijuí',
          cargo: 'Programador de Tecnologia da Informação Junior',
          duracao: 'Jul. de 2022 - Abr. de 2024',
          link: 'https://www.unijui.edu.br/',
          logo: 'imgs/unijui.png',
          alt: 'unijui logo',
          itens: [
            'Organização e coordenação de demandas',
            'Atendimento e Suporte ao usuario',
            'Desenvolvimento de modulos',
          ],
        },
        {
          empresa: 'Unijuí',
          cargo: 'Jovem Aprendiz',
          duracao: 'Out. de 2020 - Jun. de 2022',
          link: 'https://www.unijui.edu.br/',
          logo: 'imgs/unijui.png',
          alt: 'unijui logo',
          itens: [
            'Atendimento ao usuario',
            'Organização e ajustes de demandas',
          ],
        },
      ],
      certificados: [
        {
          titulo: 'React Completo',
          organizacao: 'Origammid',
          linkOrg: 'https://www.origamid.com/',
          linkCert: 'https://www.origamid.com/certificate/780056e5',
        },
        {
          titulo: 'Redux com React',
          organizacao: 'Origammid',
          linkOrg: 'https://www.origamid.com/',
          linkCert: 'https://www.origamid.com/certificate/05f5dc0d',
        },
        {
          titulo: 'UI Design para Iniciantes',
          organizacao: 'Origammid',
          linkOrg: 'https://www.origamid.com/',
          linkCert: 'https://www.origamid.com/certificate/e6e82d26',
        },
        {
          titulo: 'HTML e CSS para Iniciantes',
          organizacao: 'Origammid',
          linkOrg: 'https://www.origamid.com/',
          linkCert: 'https://www.origamid.com/certificate/bedcdce4/',
        },
      ],
      visualizar: 'Visualizar',
      exp: 'Experiências',
      certific: 'Certificados',
      conhecimento: 'Conhecimento e Habilidades',
    },
    en: {
      experiencias: [
        {
          empresa: 'Mecânica Fogaça',
          cargo: 'Web Developer - Freelancer',
          duracao: 'Nov 2024 - Feb 2025',
          link: 'https://www.mecanicafogaca.com.br/',
          logo: 'imgs/logo.png',
          alt: 'mecanica logo',
          itens: [
            'Full development of a custom web system for a mechanical workshop located in Ijuí, RS.',
            'The system allows complete CRUD operations for: Clients, Parts, Expenses.',
            'Feature for generating quotes and orders, with automatic value calculation.',
            'Creation of an exclusive homepage, presenting company information professionally and accessibly online.',
            'Responsive and user-friendly interface, designed for use on different devices.',
          ],
        },
        {
          empresa: 'Sabrina Schreiber Engenharia',
          cargo: 'Web Developer - Freelancer',
          duracao: 'Jul 2024 - Sep 2024',
          link: 'https://www.sabrinaschreiberengenharia.com.br/',
          logo: 'imgs/logo1.jpeg',
          alt: 'SS Engenharia logo',
          itens: [
            'Creation of a professional homepage for an engineering company located in Ijuí, RS.',
            'The company specializes in property and construction regularizations.',
            'The site clearly presents: Services offered, Company mission, Contact information',
            'Responsive layout, designed to serve the local audience and convey credibility.',
          ],
        },
        {
          empresa: 'Unijuí',
          cargo: 'Junior IT Programmer',
          duracao: 'Jul 2022 - Apr 2024',
          link: 'https://www.unijui.edu.br/',
          logo: 'imgs/unijui.png',
          alt: 'unijui logo',
          itens: [
            'Organization and coordination of demands',
            'User support and assistance',
            'Module development',
          ],
        },
        {
          empresa: 'Unijuí',
          cargo: 'Young Apprentice',
          duracao: 'Oct 2020 - Jun 2022',
          link: 'https://www.unijui.edu.br/',
          logo: 'imgs/unijui.png',
          alt: 'unijui logo',
          itens: ['User support', 'Organization and adjustment of demands'],
        },
      ],
      certificados: [
        {
          titulo: 'Complete React',
          organizacao: 'Origammid',
          linkOrg: 'https://www.origamid.com/',
          linkCert: 'https://www.origamid.com/certificate/780056e5',
        },
        {
          titulo: 'Redux with React',
          organizacao: 'Origammid',
          linkOrg: 'https://www.origamid.com/',
          linkCert: 'https://www.origamid.com/certificate/05f5dc0d',
        },
        {
          titulo: 'UI Design for Beginners',
          organizacao: 'Origammid',
          linkOrg: 'https://www.origamid.com/',
          linkCert: 'https://www.origamid.com/certificate/e6e82d26',
        },
        {
          titulo: 'HTML and CSS for Beginners',
          organizacao: 'Origammid',
          linkOrg: 'https://www.origamid.com/',
          linkCert: 'https://www.origamid.com/certificate/bedcdce4/',
        },
      ],
      visualizar: 'View',
      exp: 'Experiences',
      certific: 'Certificates',
      conhecimento: 'Knowledge and Skills',
    },
  };

  return (
    <div className="container experiencia overflowEx">
      <h4 className="text-center">{textos[lang].exp}</h4>

      {textos[lang].experiencias.map((exp, idx) => (
        <div className="expin" key={idx}>
          <div>
            <a href={exp.link}>
              <img className="unijuiLogo" src={exp.logo} alt={exp.alt} />
              <h3>{exp.cargo}</h3>
            </a>
          </div>
          <span>{exp.duracao}</span>
          {exp.itens.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </div>
      ))}

      <div className="expin certificates">
        <h4 className="text-center">{textos[lang].certific}</h4>
        <div className="row row-cols-1 row-cols-sm-2">
          {textos[lang].certificados.map((cert, idx) => (
            <div className="col" key={idx}>
              <h4>{cert.titulo}</h4>
              <a href={cert.linkOrg} target="_blank" rel="noopener noreferrer">
                <span>Organização: {cert.organizacao}</span>
              </a>
              <a href={cert.linkCert} target="_blank" rel="noopener noreferrer">
                <button>{textos[lang].visualizar}</button>
              </a>
            </div>
          ))}
        </div>
        <div className="row row-cols-1">
          <h4 className="text-center">{textos[lang].conhecimento}</h4>
        </div>
        <div className="infinite-scroll">
          <div className="row">
            <div className="col">
              <img src="imgs/HTML-CSS.png" alt="" />
              <span>HTML & CSS</span>
            </div>
            <div className="col">
              <img src="imgs/js.png" alt="" />
              <span>JavaScript</span>
            </div>
            <div className="col">
              <img src="imgs/uiux.png" alt="" />
              <span>UI/UX</span>
            </div>
            <div className="col">
              <img src="imgs/github.png" alt="" />
              <span>GitHub</span>
            </div>
            <div className="col">
              <img src="imgs/php.png" alt="" />
              <span>PHP</span>
            </div>
            <div className="col">
              <img src="imgs/HTML-CSS.png" alt="" />
              <span>HTML & CSS</span>
            </div>
            <div className="col">
              <img src="imgs/js.png" alt="" />
              <span>JavaScript</span>
            </div>
            <div className="col">
              <img src="imgs/uiux.png" alt="" />
              <span>UI/UX</span>
            </div>
            <div className="col">
              <img src="imgs/github.png" alt="" />
              <span>GitHub</span>
            </div>
            <div className="col">
              <img src="imgs/php.png" alt="" />
              <span>PHP</span>
            </div>
          </div>
        </div>

        <div className="infinite-scroll">
          <div className="row">
            <div className="col">
              <img src="imgs/react.png" alt="" />
              <span>React</span>
            </div>
            <div className="col">
              <img src="imgs/redux.png" alt="" />
              <span>Redux</span>
            </div>
            <div className="col">
              <img src="imgs/db2-logo.png" alt="" />
              <span>DB2</span>
            </div>
            <div className="col">
              <img src="imgs/firebase.png" alt="" />
              <span>Firebase</span>
            </div>
            <div className="col">
              <img src="imgs/react.png" alt="" />
              <span>React</span>
            </div>
            <div className="col">
              <img src="imgs/redux.png" alt="" />
              <span>Redux</span>
            </div>
            <div className="col">
              <img src="imgs/db2-logo.png" alt="" />
              <span>DB2</span>
            </div>
            <div className="col">
              <img src="imgs/firebase.png" alt="" />
              <span>Firebase</span>
            </div>
            <div className="col">
              <img src="imgs/react.png" alt="" />
              <span>React</span>
            </div>
            <div className="col">
              <img src="imgs/redux.png" alt="" />
              <span>Redux</span>
            </div>
            <div className="col">
              <img src="imgs/db2-logo.png" alt="" />
              <span>DB2</span>
            </div>
            <div className="col">
              <img src="imgs/firebase.png" alt="" />
              <span>Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
