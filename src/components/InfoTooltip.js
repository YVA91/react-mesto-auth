
import PopupWithForm from './PopupWithForm.js';

function InfoTooltip(props) {
  

  return (
    <section className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__close" type="reset" aria-label="закрыть" onClick={props.onClose}></button>
        <img></img>
        <h2></h2>
      </div>
    </section>
  );
}

export default InfoTooltip;