import style from './Sobre.module.scss';
import styleTema from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';

export default function Sobre() {
  return (
    <section>
      <h3 className={styleTema.titulo}> Sobre </h3>
      <div className={style.sobreNos}>
        <div className={style.sobreNos__texto}>
          <img src={casa} alt="casa" />
          <p>
            Seu momento Café na EuCoffe fica ainda mais especial a 
            qualquer momento do seu dia! Confira os horários de 
            funcionamento das nossas unidades e venha nos visitar 
            para uma experiência única.
          </p>
          <p>
            Uma sexta-feira pede um drink especial! 🍸✨ 
            No EuCoffe, temos opções refrescantes e cheias 
            de sabor para dar o tom perfeito ao seu final de semana. 
            Venha curtir um ambiente acolhedor com drinks incríveis 
            e boa companhia.
          </p>
          <p>
            Uma xícara de café ou uma xicara de café com um toque 
            especial de Nutella para adoçar seu dia! ☕🍫 
            No EuCoffe, cada detalhe é pensado para transformar 
            sua pausa em um momento de puro prazer. Venha experimentar 
            essa delícia!
          </p>
        </div>
      </div>
    </section>
  );
}