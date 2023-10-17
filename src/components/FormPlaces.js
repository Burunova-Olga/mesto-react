import React from 'react';
import PopupWithForm from './PopupWithForm';

function children()
{
  return (
    <>
      <input type="text" className="form-popup__input form-popup__input_type_title" name="input-place" id="input-place"
        placeholder="Название" required minLength="2" maxLength="30" />
      <span className="form-popup__input-error input-place-error"></span>

      <input type="url" className="form-popup__input form-popup__input_type_subtitle" name="input-link" id="input-link"
        placeholder='Ссылка на картинку' required />
      <span className="form-popup__input-error input-link-error"></span>

      <input type="submit" className="form-popup__submit" value="Создать" />
    </>
  );
}

function FormPlaces(props)
{
  return (
    <PopupWithForm name="places" title="Новое место" children= {children} isOpen = {props.isOpen} onClose={props.onClose} />
  )
}

export default FormPlaces;