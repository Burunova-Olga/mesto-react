import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupAddPlace({ isOpen, onClose, onAddPlace })
{
  const linkRef = React.useRef();
  const descriptionRef = React.useRef();

  React.useEffect(() =>
  {
    descriptionRef.current.value = '';
    linkRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e)
  {
    e.preventDefault();
    onAddPlace(descriptionRef.current.value, linkRef.current.value);
  }

  return (
    <PopupWithForm 
      name="places" 
      title="Новое место" 
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      {
        <>
          <input type="text" className="form-popup__input form-popup__input_type_title" name="input-place" id="input-place"
            placeholder="Название" required minLength="2" maxLength="30" ref={descriptionRef} />
          <span className="form-popup__input-error input-place-error" />

          <input type="url" className="form-popup__input form-popup__input_type_subtitle" name="input-link" id="input-link"
            placeholder='Ссылка на картинку' required ref={linkRef} />
          <span className="form-popup__input-error input-link-error" />
        </>
      }
    </PopupWithForm>
  )
}

export default PopupAddPlace;