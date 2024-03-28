import React from 'react';
import Instagram from'../assets/instagram.png'
import  Linkedin  from '../assets/linkedin.png'; // Importe os componentes corretamente
import  GitHub from '../assets/github.png';

function Galeria() {
    return (
        <div className='Container-Galeria-Contatos'>
            <div className='Galeria-Contatos'>
            <a href="https://www.instagram.com/jjj_miguel" target="_blank" rel="noopener noreferrer">
                    <img
                        src={Instagram}
                        alt='Instagram'
                        style={{ cursor: 'pointer', margin: '5px', width: '50px', height: '50px' }}
                        className="ItemGaleria-Contatos"
                    />
                </a>
                <a href="https://www.linkedin.com/in/joao-miguel-carlos-061270260/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={Linkedin}
                        alt='Linkedin'
                        style={{ cursor: 'pointer', margin: '5px', width: '50px', height: '50px' }}
                        className="ItemGaleria-Contatos"
                    />
                </a>
                <a href="https://github.com/jjj-miguel" target="_blank" rel="noopener noreferrer">
                    <img
                        src={GitHub}
                        alt='Imagem GitHub'
                        style={{ cursor: 'pointer', margin: '5px', width: '50px', height: '50px' }}
                        className="ItemGaleria-Contatos"
                    />
                </a>
            </div>
            </div>
                
    );
}

export default Galeria;
