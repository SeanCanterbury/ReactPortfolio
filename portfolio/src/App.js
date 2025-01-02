import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './Pages/ProjectDisplay';
import ExperienceDisplay from './Pages/ExperienceDisplay';
import Resume from './Pages/Resume';
import { Analytics } from "@vercel/analytics/react"
import Experience from './Pages/Experience';

function App() {
  return (
  <div className = "App" >
    <Router>
      <Navbar />
      <Analytics />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/project/:id" element={<ProjectDisplay />} />
        <Route path = "/experience" element={<Experience />} />
        <Route path = "/experience/:id" element={<ExperienceDisplay />} />
        <Route path = "resume" element = <Resume /> />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
