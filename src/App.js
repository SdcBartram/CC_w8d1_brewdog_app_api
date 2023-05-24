import './App.css';
import BrewdogContainer from './containers/BrewdogContainer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Contact from './components/Contact';


function App() {
  return (
   
    <div className="App">
    <header>
      <a href="https://www.brewdog.com/uk/online-beer-shop">BREWDOG - online shop</a>
      <h3>Planet Positive Beer</h3>
      </header>
      <Router>
        < NavBar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/brewdog" element={< BrewdogContainer />} />     
        </Routes>
      </Router>
    
    {/* <hr></hr>
    <h1>BREWDOG BEER APP</h1> */}
    
    {/* <BrewdogContainer/> */}

    <hr></hr>
    <footer>
    <p><strong> Brewdog App &copy; 2023 Bartram & Ofori </strong></p>
    </footer>
  
    </div>
    
  );
}

export default App;
