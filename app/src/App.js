import Header from "./components/Header/Header";
import Intro from './components/Intro/Intro';
import MessageBlock from "./components/MessageBlock/MessageBlock"

import './styles/Sections.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <div id='top' >
        <Intro />
        <MessageBlock h1='Frase Motivadora' h2='Siempre se puede estar más motivado' />
        <MessageBlock h1='Frase Motivadora' h2='Siempre se puede estar más motivado' />
        <MessageBlock h1='Frase Motivadora' h2='Siempre se puede estar más motivado' />
        <MessageBlock h1='Frase Motivadora' h2='Siempre se puede estar más motivado' />

      </div>
    </div>
  );
}

export default App;
