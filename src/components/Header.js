import logo from '../images/logo.svg';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
          <Route path="/sign-in">
            <Link to="/sign-up" className="header__nav">
              Регистрация
            </Link>
          </Route>
          <Route path="/sign-up">
            <Link to="/sign-in" className="header__nav">
              Войти
            </Link>
          </Route>
        
    </header>
  );
} 

export default Header;