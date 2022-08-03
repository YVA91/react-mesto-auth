import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm.js';

function Register(props) {
  const { values, handleChange} = useForm({});

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(values.email, values.password);
  }

return (
  <>
    <AuthForm
      nameEmail="email"
      namePassword="password"
      title={props.title}
      buttonText={props.buttonText}
      onSubmit={handleSubmit}
      onChange={handleChange}
      emailValue={values.email}
      passwordValue={values.password}
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