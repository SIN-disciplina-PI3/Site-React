import '../Styles/App.css'
import ODS8 from '../assets/image.png'
import Navbar from '../components/NavBar';
import Galeria from '../components/Galeria';

function Onu() {

  return (
  <>   
<Navbar />
<Galeria /> 
<div className='textos-ODS'>
    <div className='T-nome'>
          <h1>ODS 8: Trabalho decente e crescimento econômico</h1>  
          </div>
    <div className='T-subtitulo' >
          <h4>Promover o crescimento econômico inclusivo e sustentável, o emprego pleno e produtivo e o trabalho digno para todos</h4>
          </div>

<div className='Img-ODs'>
<img  className='imagem-ODS' src={ODS8} alt="ODS : Trabalho decente e crescimento econômico"  />
</div>

    <div className='conteudo-ODS'>
<h3>Objetivo 8. Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todas e todos</h3>
<p>
<strong>8.1 </strong>Sustentar o crescimento econômico per capita de acordo com as circunstâncias nacionais e, em particular, um crescimento anual de pelo menos 7% do produto interno bruto [PIB] nos países menos desenvolvidos
</p>
<p>
<strong>8.2 </strong>Atingir níveis mais elevados de produtividade das economias por meio da diversificação, modernização tecnológica e inovação, inclusive por meio de um foco em setores de alto valor agregado e dos setores intensivos em mão de obra
</p>
<p>
<strong>8.3 </strong>Promover políticas orientadas para o desenvolvimento que apoiem as atividades produtivas, geração de emprego decente, empreendedorismo, criatividade e inovação, e incentivar a formalização e o crescimento das micro, pequenas e médias empresas, inclusive por meio do acesso a serviços financeiros
</p>
<p>
<strong>8.4 </strong>Melhorar progressivamente, até 2030, a eficiência dos recursos globais no consumo e na produção, e empenhar-se para dissociar o crescimento econômico da degradação ambiental, de acordo com o Plano Decenal de Programas sobre Produção e Consumo Sustentáveis, com os países desenvolvidos assumindo a liderança
</p>
<p>
<strong>8.5 </strong>Até 2030, alcançar o emprego pleno e produtivo e trabalho decente para todas as mulheres e homens, inclusive para os jovens e as pessoas com deficiência, e remuneração igual para trabalho de igual valor
</p>

    </div>






</div>
</>

    
  )
}

export default Onu
