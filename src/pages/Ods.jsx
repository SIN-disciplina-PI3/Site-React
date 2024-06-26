import '../Styles/App.css';
import ODS from '../assets/ODS.png';
import Navbar from '../components/NavBar';
import Galeria from '../components/Galeria';

function Ods() {
  return (
      <>
<Navbar />
<Galeria />
        <div className='titulo-home'><h2>Objetivos de Desenvolvimento Sustentável</h2></div>
        
        <div className='conteudo-home'>
         
          <img src={ODS} alt="imagem das ODS" />
          
         
          <div className='conteudo-ODS'>
<h2>Como as Nações Unidas apoiam os Objetivos de Desenvolvimento Sustentável no Brasil</h2>
<p>
A ONU e seus parceiros no Brasil estão trabalhando para atingir os Objetivos de Desenvolvimento Sustentável. São 17 objetivos ambiciosos e interconectados que abordam os principais desafios de desenvolvimento enfrentados por pessoas no Brasil e no mundo.</p>
<h2>Os Objetivos de Desenvolvimento Sustentável no Brasil</h2>
<p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.
</p>
            </div>
          </div>
        </>

        

  );
}

export default Ods;
