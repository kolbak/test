import './App.scss';

import Navbar from './components/navbar/navbar'
import Aside from './components/aside/aside'
import Main from './components/main/main'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <header>
          <Navbar />
        </header>
        <div className="main-content">
          <aside>
            <Aside />
          </aside>
          <main>
            <Main />
          </main>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
