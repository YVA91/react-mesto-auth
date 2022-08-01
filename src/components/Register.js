import { useState} from 'react';
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';

function Register(props) {
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(email, password);
  } 

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

return (
  <>
    <AuthForm
      title={props.title}
      buttonText={props.buttonText}
      onSubmit={handleSubmit}
      onChangeEmail={handleChangeEmail}
      onChangePassword={handleChangePassword}
      emailValue={email}
      passwordValue={password}
    />
    <div className='formregister'>
      <p className='formregister__item'>Уже зарегистрированы?&nbsp;
        <Link to="/sign-in" className='formregister__item formregister__item_link'>
          Войти
        </Link>
      </p>
    </div>
  </>
);
}

export default Register;