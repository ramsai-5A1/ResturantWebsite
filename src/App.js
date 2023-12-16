import './App.css';
import Landingpage from './Components/Landingpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Notfound from './Components/Notfound';
import Home from './Components/Home';
import Signup from './Components/Signup';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Landingpage/>} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
      </Router>
  );
}

export default App;
