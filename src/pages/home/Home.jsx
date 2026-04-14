import s from "./Home.module.scss";
import logoCBF from "../../assets/icons/logoCBF.png";
import trofeuCopa from "../../assets/img/trofeuCopa.png";
import medalhaCA from "../../assets/img/medalhaCA.png";
import medalhaCC from "../../assets/img/medalhaCC.png";
import medalhaOlimpiadas from "../../assets/img/medalhaOlimpiadas.png";
import estrelaPan from "../../assets/img/estrelaPan.png";
import pele from "../../assets/img/pele.jpg";
import ronaldo from "../../assets/img/ronaldo.jpg";
import garrincha from "../../assets/img/garrincha.jpg";
import zico from "../../assets/img/zico.jpg";

const Home = () => {
  const conquistas = [
    {
      src: trofeuCopa,
      competicao: "COPA DO MUNDO",
      titulo: 5,
      anos: "58·62·70·94·02",
    },
    {
      src: medalhaCA,
      competicao: "COPA AMÉRICA",
      titulo: 9,
      anos: "Recorde histórico",
    },
    {
      src: medalhaCC,
      competicao: "COPA DAS CONFEDERAÇÕES",
      titulo: 4,
      anos: "97·05·09·13",
    },
    {
      src: medalhaOlimpiadas,
      competicao: "OURO OLÍMPICO",
      titulo: 2,
      anos: "Rio · Tóquio",
    },
    {
      src: estrelaPan,
      competicao: "PAN-AMERICANO",
      titulo: 3,
      anos: "Múltiplas edições",
    },
  ];

  const lendas = [
    { jogador: pele, nome: "Pelé", posicao: "ATACANTE" },
    { jogador: garrincha, nome: "Garrincha", posicao: "PONTA-DIREITA" },
    { jogador: ronaldo, nome: "Ronaldo", posicao: "ATACANTE" },
    { jogador: zico, nome: "Zico", posicao: "MEIA" },
  ];
  return (
    <main className={s.main}>
      <section className={s.hero}>
        <div className={s.textosHome}>
          <h3>PENTACAMPEÃ MUNDIAL</h3>
          <h1>
            <span>A MAIOR</span> <span>DO MUNDO</span>
          </h1>
          <p>SELEÇÃO MASCULINA · FUTEBOL</p>

          <div className={s.recordes}>
            <div className={s.recorde}>
              <h2>5</h2>
              <p>COPAS DO MUNDO</p>
            </div>
            <div className={s.recorde}>
              <h2>9</h2>
              <p>COPA AMÉRICA</p>
            </div>
            <div className={s.recorde}>
              <h2>83+</h2>
              <p>ANOS DE HISTÓRIA</p>
            </div>
          </div>
        </div>
        <div className={s.boxImage}>
          <img
            src={logoCBF}
            alt="Escudo da Confederação Brasileira de Futebol."
          />
        </div>
      </section>
      <section className={s.titulos}>
        <div className={s.tituloSection}>
          <h2>TÍTULOS & CONQUISTAS</h2>
        </div>
        <div className={s.cardsConquistas}>
          {conquistas.map((item, index) => (
            <div key={index} className={s.cardConquista}>
              <img
                src={item.src}
                alt={item.competicao}
                className={s.iconeConquista}
              />
              <p className={s.competicao}>{item.competicao}</p>
              <h3>{item.titulo}</h3>
              <p className={s.anoConquista}>{item.anos}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={s.lendas}>
        <div className={s.tituloSection}>
          <h2>LENDAS DA SELEÇÃO</h2>
        </div>
        <div className={s.cardsLendas}>
          {lendas.map((item, index) => (
            <div key={index} className={s.cardLenda}>
              <img
                src={item.jogador}
                alt={item.nome}
                className={s.imgJogador}
              />
              <div className={s.infoJogador}>
                <h3>{item.nome}</h3>
                <p>{item.posicao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
