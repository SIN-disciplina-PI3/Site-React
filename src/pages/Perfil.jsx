import '../Styles/App.css';
import miguel from '../assets/Miguel.jpg';
import GaleriaC from '../components/galeria-contatos';
import Navbar from '../components/NavBar';
import Galeria from '../components/Galeria';
function Perfil() {

  return (
    
      <>
      <Navbar/>
      <Galeria/>
        <div className='perfil-imagem'>
        <img  className='miguel-image' src={miguel} alt="João Miguel" width={300} height={300} /> 
        </div>
        <div className='Nome-Perfil'>
          <h3> João Miguel Carlos</h3>
        </div>
        <div className='descrição'>
          <p>
          Olá, meu nome é João Miguel e sou um entusiasta da tecnologia atualmente cursando Sistema para Internet pelo Embarque Digital. tenho 19 anos, estou empolgado em iniciar minha carreira profissional e intelectual na área de tecnologia.

Atualmente, estou matriculado na Universidade Católica de Pernambuco (UNICAP), onde estou adquirindo conhecimentos sólidos para minha jornada como profissional de TI. 

Recentemente, tive a honra de conquistar o primeiro lugar no projeto Kako, um aplicativo que desenvolvi. Essa conquista na RESIDÊNCIA ONBOARD do Porto Digital me mostrou o potencial do meu trabalho e me motivou ainda mais a buscar oportunidades para expandir meus horizontes.

Resido em Recife, Pernambuco, uma cidade que respira inovação e tecnologia, e estou ansioso para me conectar com profissionais experientes e empresas da região. Estou em busca de minha primeira experiência profissional e estágios para aprimorar minhas habilidades práticas e aprender com os melhores do mercado.

Tenho um espírito empreendedor e estou sempre disposto a enfrentar desafios e aprender novas tecnologias. Estou comprometido em contribuir para o avanço da indústria de tecnologia e em trazer soluções eficientes para o mundo digital.

Se você está em busca de um profissional dedicado, apaixonado pela área de tecnologia e com sede de conhecimento, não hesite em entrar em contato comigo. Estou ansioso para fazer parte de projetos inovadores e agregar valor a qualquer equipe em que eu faça parte.

Vamos conectar e impulsionar o futuro da tecnologia juntos!
          </p>
        </div>
        <div className='Contatos'>
        <h4>Contatos</h4>
        </div>
        
        <GaleriaC/>
        
      </>

    
  )
}

export default Perfil
