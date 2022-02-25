import Header from "./components/Header/Header";
import Intro from './components/Intro/Intro';
import MessageBlock from "./components/MessageBlock/MessageBlock"
import About from "./components/About/About";


import './styles/Sections.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <div id='top' >
        <Intro />
        <main id="main">
          <MessageBlock h1='Frase Motivadora' h2='Siempre se puede estar más motivado' />
          <About />
        </main>

      </div>
    </div>
  );
}

export default App;
