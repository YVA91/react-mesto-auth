function InfoTooltip(props) {
return (
  <section className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
    <div className="popup__container infotooltip">
      <button className="popup__close" type="reset" aria-label="закрыть" onClick={props.onClose}></button>
      <img className="infotooltip__img" 
        src={props.isStatus ? props.ImgOk : props.ImgBad }
        alt={props.isStatus ? props.AltOk : props.AltBad }
      />
      <h2 className="infotooltip__title">{props.isStatus ? props.textOk : props.textBad }</h2>
    </div>
  </section>
);
}

export default InfoTooltip;