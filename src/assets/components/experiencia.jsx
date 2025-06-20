import React from 'react';

function Experiencia({ resolvedText, setActiveSection }) {
  return (
    <div class="container experiencia overflowEx">
      <div class="expin">
        <div>
          <a href="https://www.mecanicafogaca.com.br/">
            <img
              class="unijuiLogo"
              src="imgs/logo.png"
              alt="mecanica logo"
            ></img>
            <h3>Desenvolvedor Web - Freelancer</h3>
          </a>
        </div>
        <span>Duração: nov de 2024 - fev de 2025</span>
        <li>
          Desenvolvimento completo de um sistema web personalizado para uma
          oficina mecânica localizada em Ijuí, RS.
        </li>
        <li>
          O sistema permite operações completas de CRUD para: Clientes, Peças,
          Despesas.
        </li>
        <li>
          Funcionalidade para geração de orçamentos e pedidos, com cálculo
          automático de valores.
        </li>
        <li>
          Criação de uma homepage exclusiva, apresentando informações da empresa
          de forma profissional e acessível online.
        </li>
        <li>
          Interface responsiva e amigável, pensada para facilitar o uso em
          diferentes dispositivos.
        </li>
      </div>
      <div class="expin">
        <div>
          <a href="https://www.sabrinaschreiberengenharia.com.br/">
            <img
              class="unijuiLogo"
              src="imgs/logo1.jpeg"
              alt="SS Engenharia logo"
            ></img>
            <h3>Desenvolvedor Web - Freelancer</h3>
          </a>
        </div>
        <span>Duração: jul de 2024 - set de 2024</span>
        <li>
          Criação de uma homepage profissional para uma empresa de engenharia
          localizada em Ijuí, RS.
        </li>
        <li>
          A empresa é especializada em regularizações de imóveis e construções.
        </li>
        <li>
          O site apresenta de forma clara e objetiva: Serviços oferecidos,
          Missão da empresa, Informações de contato
        </li>
        <li>
          Layout responsivo, com design pensado para atender o público local e
          transmitir credibilidade.
        </li>
      </div>
      <div class="expin">
        <div>
          <a href="https://www.unijui.edu.br/">
            <img
              class="unijuiLogo"
              src="imgs/unijui.png"
              alt="unijui logo"
            ></img>
            <h3>Programador de Tecnologia da Informação Junior</h3>
          </a>
        </div>
        <span>Duração: Jul. de 2022 - Abr. de 2024</span>
        <li>Organização e coordenação de demandas</li>
        <li>Atendimento e Suporte ao usuario</li>
        <li>Desenvolvimento de modulos</li>
      </div>
      <div class="expin">
        <a href="https://www.unijui.edu.br/">
          <img class="unijuiLogo" src="imgs/unijui.png" alt="unijui logo"></img>
          <h3>Jovem Aprendiz</h3>
        </a>
        <span>Duração: Out. de 2020 - Jun. de 2022</span>
        <li>Atendimento ao usuario</li>
        <li>Organização e ajustes de demandas</li>
      </div>
      <div class="expin certificates">
        <div class="row row-cols-1 row-cols-sm-2">
          <div class="col">
            <h4>React Completo</h4>
            <a href="https://www.origamid.com/" target="_blank">
              <span>Organização: Origammid</span>
            </a>
            <a
              href="https://www.origamid.com/certificate/780056e5"
              target="_blank"
            >
              <button>Visualizar</button>
            </a>
          </div>
          <div class="col">
            <h4>Redux com React</h4>
            <a href="https://www.origamid.com/" target="_blank">
              <span>Organização: Origammid</span>
            </a>
            <a
              href="https://www.origamid.com/certificate/05f5dc0d"
              target="_blank"
            >
              <button>Visualizar</button>
            </a>
          </div>
          <div class="col">
            <h4>UI Design para Iniciantes</h4>
            <a href="https://www.origamid.com/" target="_blank">
              <span>Organização: Origammid</span>
            </a>
            <a
              href="https://www.origamid.com/certificate/e6e82d26"
              target="_blank"
            >
              <button>Visualizar</button>
            </a>
          </div>
          <div class="col">
            <h4>HTML e CSS para Iniciantes</h4>
            <a href="https://www.origamid.com/" target="_blank">
              <span>Organização: Origammid</span>
            </a>
            <a
              href="https://www.origamid.com/certificate/bedcdce4/"
              target="_blank"
            >
              <button>Visualizar</button>
            </a>
          </div>
        </div>
        <div class="row">
          <h4>Conhecimento e Habilidades</h4>
        </div>
        <div class="infinite-scroll">
          <div class="row">
            <div class="col">
              <img src="imgs/HTML-CSS.png" alt=""></img>
              <span>HTML & CSS</span>
            </div>
            <div class="col">
              <img src="imgs/js.png" alt=""></img>
              <span>JavaScript</span>
            </div>
            <div class="col">
              <img src="imgs/uiux.png" alt=""></img>
              <span>UI/UX</span>
            </div>
            <div class="col">
              <img src="imgs/github.png" alt=""></img>
              <span>GitHub</span>
            </div>
            <div class="col">
              <img src="imgs/php.png" alt=""></img>
              <span>PHP</span>
            </div>
            <div class="col">
              <img src="imgs/HTML-CSS.png" alt=""></img>
              <span>HTML & CSS</span>
            </div>
            <div class="col">
              <img src="imgs/js.png" alt=""></img>
              <span>JavaScript</span>
            </div>
            <div class="col">
              <img src="imgs/uiux.png" alt=""></img>
              <span>UI/UX</span>
            </div>
            <div class="col">
              <img src="imgs/github.png" alt=""></img>
              <span>GitHub</span>
            </div>
            <div class="col">
              <img src="imgs/php.png" alt=""></img>
              <span>PHP</span>
            </div>
          </div>
        </div>

        <div class="infinite-scroll">
          <div class="row">
            <div class="col">
              <img src="imgs/react.png" alt=""></img>
              <span>React</span>
            </div>
            <div class="col">
              <img src="imgs/redux.png" alt=""></img>
              <span>Redux</span>
            </div>
            <div class="col">
              <img src="imgs/db2-logo.png" alt=""></img>
              <span>DB2</span>
            </div>
            <div class="col">
              <img src="imgs/firebase.png" alt=""></img>
              <span>Firebase</span>
            </div>
            <div class="col">
              <img src="imgs/react.png" alt=""></img>
              <span>React</span>
            </div>
            <div class="col">
              <img src="imgs/redux.png" alt=""></img>
              <span>Redux</span>
            </div>
            <div class="col">
              <img src="imgs/db2-logo.png" alt=""></img>
              <span>DB2</span>
            </div>
            <div class="col">
              <img src="imgs/firebase.png" alt=""></img>
              <span>Firebase</span>
            </div>
            <div class="col">
              <img src="imgs/react.png" alt=""></img>
              <span>React</span>
            </div>
            <div class="col">
              <img src="imgs/redux.png" alt=""></img>
              <span>Redux</span>
            </div>
            <div class="col">
              <img src="imgs/db2-logo.png" alt=""></img>
              <span>DB2</span>
            </div>
            <div class="col">
              <img src="imgs/firebase.png" alt=""></img>
              <span>Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
