import {Link } from 'react-router-dom';
import Onu from '../assets/interrogacao.png';
import Ods from'../assets/Onu.png';
import perfil from'../assets/perfil.png';
import Home from '../assets/home.png';


function Galeria() {
    return (
        <div className='Container-Galeria'>
            <div className='Galeria'>
                <Link to="/">
                    <img
                        src={Home}
                        alt='Imagem ONU'
                        style={{ cursor: 'pointer', margin: '5px', width: '100px', height: '100px' }}
                        className="ItemGaleria"
                    />
                </Link>
                <Link to="/Perfil">
                    <img
                        src={perfil}
                        alt='Imagem Perfil'
                        style={{ cursor: 'pointer', margin: '5px', width: '100px', height: '100px' }}
                        className="ItemGaleria"
                    />
                </Link>
                <Link to="/Ods">
                    <img
                        src={Ods}
                        alt='Imagem Ods'
                        style={{ cursor: 'pointer', margin: '5px', width: '100px', height: '100px' }}
                        className="ItemGaleria"
                    />
                </Link>
                <Link to="/Onu">
                    <img
                        src={Onu}
                        alt='Imagem ONU'
                        style={{ cursor: 'pointer', margin: '5px', width: '100px', height: '100px' }}
                        className="ItemGaleria"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Galeria;