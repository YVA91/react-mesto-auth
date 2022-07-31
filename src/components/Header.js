import logo from '../images/logo.svg';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';


function Header(props) {
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
      
      <Route exact path="/">
        <div className='header__container'>
          <p className='header__userinfo'>{props.userEmail}</p>
          <Link to="/sign-in" className="header__nav header__nav_colorexit" onClick={props.onReoveToken}>
          Выйти
        </Link>
      </div>
      </Route>
        
    </header>
  );
} 

export default Header;