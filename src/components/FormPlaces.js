import React from 'react';
import PopupWithForm from './PopupWithForm';

function FormPlaces({isOpen, onClose})
{
  return (
    <PopupWithForm name="places" title="Новое место" buttonText="Создать" isOpen = {isOpen} onClose={onClose} >
      {<>
        <input type="text" className="form-popup__input form-popup__input_type_title" name="input-place" id="input-place"
          placeholder="Название" required minLength="2" maxLength="30" />
        <span className="form-popup__input-error input-place-error" />

        <input type="url" className="form-popup__input form-popup__input_type_subtitle" name="input-link" id="input-link"
          placeholder='Ссылка на картинку' required />
        <span className="form-popup__input-error input-link-error" />
      </>}
    </PopupWithForm>
  )
}

export default FormPlaces;