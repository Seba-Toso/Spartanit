import Header from "./components/Header/Header";
import Intro from './components/Intro/Intro';
import MessageBlock from "./components/MessageBlock/MessageBlock"
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
