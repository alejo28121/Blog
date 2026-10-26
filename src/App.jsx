import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Origins from './components/Origins.jsx'
import './components/Union.jsx'
import Union from './components/Union.jsx'
import Generations from './components/Generations.jsx'
import Familiogram from './components/Familiogram';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <Home />
        <Origins />
        <Union />
        <Generations />
        <Familiogram />
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default App