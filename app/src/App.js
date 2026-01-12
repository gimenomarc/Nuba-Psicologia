import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Inicio from './pages/Inicio';
import QuienSoy from './pages/QuienSoy';
import ComoTrabajo from './pages/ComoTrabajo';
import Servicios from './pages/Servicios';
import ClubHipic from './pages/ClubHipic';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import AvisoLegal from './pages/AvisoLegal';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quien-soy" element={<QuienSoy />} />
          <Route path="/como-trabajo" element={<ComoTrabajo />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/club-hipic" element={<ClubHipic />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
