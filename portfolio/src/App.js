import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
  <div className = "App" >
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/projects" element = {<Projects />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
