
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Approuter from './routing/Approuter';
import Navigation from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navigation/>
       <Approuter />
       <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
