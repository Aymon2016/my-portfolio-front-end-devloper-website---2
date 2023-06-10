
import './App.css';
import Homepage from '../src/pages/homepage';
import Aboutpage from '../src/pages/aboutpage';
import Projectpage from '../src/pages/projectpage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/project" element={<Projectpage />} />
      </Routes>
    </Router>
  );
}

export default App;
