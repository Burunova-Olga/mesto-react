import React from 'react';
import PopupWithForm from './PopupWithForm';

function children()
{
  return (
    <>
      <input type="url" className="form-popup__input form-popup__input_type_title" name="input-avatar" id="input-avatar"
        placeholder='Ссылка на картинку' required />
      <span className="form-popup__input-error input-avatar-error"></span>

      <input type="submit" className="form-popup__submit" value="Сохранить" />
    </>
  );
}

function FormAvatar(props)
{
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" children= {children} isOpen = {props.isOpen} onClose={props.onClose}/>
  )
}

export default FormAvatar;