import '../Styles/App.css';
import Navbar from '../components/NavBar';
import Galeria from '../components/Galeria';
import { BrowserRouter as Router } from 'react-router-dom';
import ODS from '../assets/ODS.png';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='Atividade-texto' style={{ textAlign: 'center', margin: '150px auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
            Conheça um pouco sobre ODS
            <br/> sobre o Criador desse site 
          </h1>
        </div>
        <Galeria /> {/* Moveu Galeria para depois do conteúdo principal */}
      </div>
    </Router>
  );
}

export default App;
