import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ImagePreloader from './components/ImagePreloader';
import Home from './pages/Home';
import About from './pages/Sobre';
import OurSheep from './pages/AsNossasOvelhas';
import Services from './pages/Servicos';
import Contact from './pages/Contacto';
import VendaDeBorregos from './pages/VendaDeBorregos';
import Privacy from './pages/Privacidade';
import Terms from './pages/Termos';
import './App.css';

function App() {
  return (
    <Router>
      <ImagePreloader />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/as-nossas-ovelhas" element={<OurSheep />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/venda-de-borregos" element={<VendaDeBorregos />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
