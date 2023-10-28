import React from 'react';
import PopupWithForm from './PopupWithForm';

function FormAvatar({isOpen, onClose, onUpdateAvatar})
{
  const avatarRef = React.useRef(); 

  function handleSubmit(e)
  {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  } 

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" 
    isOpen = {isOpen} 
    onClose={onClose}
    onSubmit={handleSubmit}
    >      
      {<>
        <input type="url" className="form-popup__input form-popup__input_type_title" name="input-avatar" id="input-avatar"
          placeholder='Ссылка на картинку' required ref={avatarRef} />
        <span className="form-popup__input-error input-avatar-error" />
      </>}   
    </PopupWithForm>
  )
}

export default FormAvatar;