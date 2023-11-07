import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Homepage/Homepage';
import CardsSection from './Homepage/CardSection/CardSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <CardsSection/>
    </div>
  );
}

export default App;
