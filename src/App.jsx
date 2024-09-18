
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Archives from './pages/archives';
import About from './pages/about';
 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Archives />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
