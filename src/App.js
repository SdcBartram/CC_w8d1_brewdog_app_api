import './App.css';
import BrewdogContainer from './containers/BrewdogContainer';

function App() {
  return (
    <div className="App">
    <header>
      <h3>GREAT BEER THAT'S GREAT FOR THE PLANET</h3>
      <a href="https://www.brewdog.com/uk/online-beer-shop">BREWDOG - online shop</a>
    </header>
    <hr></hr>
    <h1>BREWDOG BEER APP</h1>
    
    <BrewdogContainer/>

    <hr></hr>
    <footer>
    <p><strong> Brewdog App &copy; 2023 Bartram & Ofori </strong></p>
    </footer>
  
    </div>
  );
}

export default App;
