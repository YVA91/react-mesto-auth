import { useForm } from '../hooks/useForm.js'
import AuthForm from './AuthForm';

function Login(props) {
  const { values, handleChange } = useForm({});

  function handleSubmit(e) {
    e.preventDefault();
    props.onAuthorize(values.email, values.password);
  } 
  
return (
  <AuthForm
    nameEmail="email"
    namePassword="password"
    title={props.title}
    buttonText={props.buttonText}
    onSubmit={handleSubmit}
    onChange={handleChange}
    emailValue={values.email}
    passwordValue={values.password}/>
);
}

export default Login;