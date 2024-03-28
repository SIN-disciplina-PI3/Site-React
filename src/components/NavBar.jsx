// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import image from '../assets/SDG-8.svg'; // Corrigido: importar a imagem corretamente

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu entre aberto e fechado
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para fechar o menu quando a página voltar ao tamanho normal
  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);

    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);

  return (
    <nav>
      <img  className='imagem' src={image} alt="ODS : Trabalho decente e crescimento econômico" width={100} height={100} /> {/* Corrigido: usar {image} para referenciar a variável */}
      <label className='Logo'>DesignX
      </label>

      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={menuOpen ? 'menu-open' : ''}>

      </ul>
    </nav>
  );
}

export default App;
