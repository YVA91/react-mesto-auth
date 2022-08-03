import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { useForm } from '../hooks/useForm.js';

function AddPlacePopup(props) {
  const { values, handleChange, setValues } = useForm({ });

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(values);
  }

  React.useEffect(() => {
    setValues({ name:'', link:''});
  }, [props.isOpen]);

  return (
    <PopupWithForm
      nameForm="place"
      name = "new-photo"
      isOpen = {props.isOpen}
      onClose = {props.onClose}
      title = "Новое место"
      buttonText={props.isLoading ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}>
    
      <fieldset className="popup__form-item">
        <label className="popup__field">
          <input 
            name='name'
            className="popup__field-item" 
            id="title" 
            type="text"  
            placeholder="Название"  
            required
            minLength="2"
            maxLength="60"
            value={values.name || ''}
            onChange={handleChange}
          />
          <span className="popup__field-item-error" id="title-error"></span>
          </label>
          <label className="popup__field">
          <input 
            name='link'
            className="popup__field-item" 
            id="link" 
            type="url" 
            placeholder="Ссылка на картинку"
            required
            minLength="2"
            value={values.link || ''}
            onChange={handleChange}
          />
          <span className="popup__field-item-error" id="link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;