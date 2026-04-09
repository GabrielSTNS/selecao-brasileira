import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.scss";
import logoCBF from "../../assets/icons/logoCBF.png";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerLogo}>
        <Link to="/" className={s.logoLink}>
          <img
            src={logoCBF}
            alt="Escudo da Confederação Brasileira de Futebol"
          />
          <h1>SELEÇÃO BRASILEIRA</h1>
        </Link>
      </div>

      <nav className={s.navbar}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? s.linkAtivo : s.link)}
        >
          INÍCIO
        </NavLink>
        <NavLink
          to="/historia"
          className={({ isActive }) => (isActive ? s.linkAtivo : s.link)}
        >
          HISTÓRIA
        </NavLink>
        <NavLink
          to="/elenco"
          className={({ isActive }) => (isActive ? s.linkAtivo : s.link)}
        >
          ELENCO
        </NavLink>
        <NavLink
          to="/jogos"
          className={({ isActive }) => (isActive ? s.linkAtivo : s.link)}
        >
          JOGOS
        </NavLink>
        <NavLink
          to="/galeria"
          className={({ isActive }) => (isActive ? s.linkAtivo : s.link)}
        >
          GALERIA
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
