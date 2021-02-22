import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./routes";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
