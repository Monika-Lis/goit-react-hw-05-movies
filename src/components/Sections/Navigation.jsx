import { NavLink } from 'react-router-dom';
import css from '../Styles/Navigation.module.css';

export const Navigation = () => {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" end>
          <p className={css.navTitle}>Home</p>
        </NavLink>
        <NavLink to="/movies">
          <p className={css.navTitle}>Movies</p>
        </NavLink>
      </nav>
    </header>
  );
};
