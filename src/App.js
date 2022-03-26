import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import Portofolia from './components/portofolia/portofolia';
import Testemonia from './components/testemonia/testemonia';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import About from './components/about/about';
function App() {
  return (
    <div className="App">

      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portofolia/>
  
      <Contact/>
    
      <Footer/>
    </div>
  );
}

export default App;
