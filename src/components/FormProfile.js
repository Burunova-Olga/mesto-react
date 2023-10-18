import React from 'react';
import PopupWithForm from './PopupWithForm';

function FormProfile({isOpen, onClose})
{
  return (
    <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen = {isOpen} onClose={onClose}>
      {<>
        <input type="text" className="form-popup__input form-popup__input_type_title" name="input-name" id="input-name"
          placeholder="Ваше имя" required minLength="2" maxLength="40" />
        <span className="form-popup__input-error input-name-error" />
  
        <input type="text" className="form-popup__input form-popup__input_type_subtitle" name="input-description"
          id="input-description" placeholder='Краткая информация' required minLength="2"
          maxLength="200" />
        <span className="form-popup__input-error input-description-error" />
      </>}
    </PopupWithForm>
  )
}

export default FormProfile;