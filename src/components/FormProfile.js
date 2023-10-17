import React from 'react';
import PopupWithForm from './PopupWithForm';

function FormProfile(props)
{
  function children()
  {
    return (
      <>
        <input type="text" className="form-popup__input form-popup__input_type_title" name="input-name" id="input-name"
          placeholder="Ваше имя" required minLength="2" maxLength="40" />
        <span className="form-popup__input-error input-name-error"></span>
  
        <input type="text" className="form-popup__input form-popup__input_type_subtitle" name="input-description"
          id="input-description" placeholder='Краткая информация' required minLength="2"
          maxLength="200" />
        <span className="form-popup__input-error input-description-error"></span>
  
        <input type="submit" className="form-popup__submit" value="Сохранить" />
      </>
    );
  }

  return (
    <PopupWithForm name="profile" title="Редактировать профиль" children= {children} isOpen = {props.isOpen} onClose={props.onClose}/>
  )
}

export default FormProfile;