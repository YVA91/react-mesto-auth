import { useEffect, useState, useContext } from 'react';
import AuthForm from './AuthForm';

function Login(props) {
  
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')

  function handleSubmit(e) {
    e.preventDefault();
    props.onAuthorize(email, password);
  } 

  function handleChangeEmail(evt) {
      setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
}


  return (
    <AuthForm
      title={props.title}
      buttonText={props.buttonText}
      onSubmit={handleSubmit}
        onChangeEmail={handleChangeEmail}
        onChangePassword={handleChangePassword}
        emailValue={email}
        passwordValue={password}/>
  );
}

export default Login;