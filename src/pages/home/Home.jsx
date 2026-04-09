import s from "./Home.module.scss";
import logoCBF from "../../assets/icons/logoCBF.png";

const Home = () => {
  return (
    <main className={s.main}>
      <section className={s.hero}>
        <div className={s.boxText}>
          <h3>PENTACAMPEÃ MUNDIAL</h3>
          <h1>
            <span>A MAIOR</span> <span>DO MUNDO</span>
          </h1>
          <p>SELEÇÃO MASCULINA · FUTEBOL</p>

          <div className={s.records}>
            <div className={s.record}>
              <h2>5</h2>
              <p>COPAS DO MUNDO</p>
            </div>
            <div className={s.record}>
              <h2>9</h2>
              <p>COPA AMÉRICA</p>
            </div>
            <div className={s.record}>
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
    </main>
  );
};

export default Home;
