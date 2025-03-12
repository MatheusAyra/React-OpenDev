import './App.css';

function App() {
  return (
    <div className='container'>
      <header>
        <p>OpenDev</p>
      </header>
      <main>
        <section className='box-titulo'>
          <h1>OpenDev</h1>
          <p>Trabalhando ReactJS, é uma biblioteca Java para criar SPAs</p>
          < a href="https://reactjs.org/" target="_blank">Site Oficial</a>
        </section>
        <section className='box-requisitos'>
          <h2>Requisitos</h2>
          <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>
          <div className='box-cards'>
            <div className='card'>
              <h3>HTML</h3>
              <p>Aprender a estrutura dos elementos da página com HTML</p>
            </div>
            <div className='card'>
              <h3>CSS</h3>
              <p>Aprender a estilizar os elementos da página com CSS</p>
            </div>
            <div className='card'>
              <h3>Javascript</h3>
              <p>Aprender a linguagem utilizada pelo REACT JS, o Javascript os elementosda página com CSS</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p className='autor'>Curso de Introdução ao REACT JS - OpenDev</p>
      </footer>
    </div>

  );
}

export default App;
