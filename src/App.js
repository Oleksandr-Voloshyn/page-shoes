import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Collectios from './pages/Collectios';
import Contact from './pages/Contact';
import Men from './pages/Men';
import WomenHoc from './pages/women/womenHoc';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='collections' element={<Collectios />} />
        <Route path='men' element={<Men />} />
        <Route path='women' element={<WomenHoc />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />


      </Route>
    </Routes>
  );
}

export default App;
