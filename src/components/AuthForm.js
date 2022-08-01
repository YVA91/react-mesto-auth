function AuthForm(props) {
  return (
    <form className='authform' onSubmit={props.onSubmit}>
      <h2 className='authform__title'>{props.title}</h2> 
      <label className="authform__field">
        <input 
          className="authform__field-item" 
          id="email"
          name='email'
          type="email"  
          placeholder="Email"  
          required
          minLength="2"
          value={props.emailValue}
          onChange={props.onChangeEmail}
        />
      <span className="popup__field-item-error" id="title-error"></span>
        </label>
      <label className="authform__field">
        <input 
          className="authform__field-item" 
          id="password"
          name='password'
          type="password" 
          placeholder="Пароль"
          required
          minLength="2"
          value={props.passwordValue}
          onChange={props.onChangePassword} 
        />
        <span className="popup__field-item-error" id="link-error"></span>
      </label>
      <button className="authform__button" type="submit" aria-label={props.buttonText}>{props.buttonText}</button>
      <p></p>
    </form>
  );
}

export default AuthForm;