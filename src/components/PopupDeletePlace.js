import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupDeletePlace({isOpen, onClose})
// Обязательно! И esc тоже. Но пока нужно нагнать темы(( 
{

  function handleSubmit(e)
    {
      e.preventDefault();
    }

  return (
    <PopupWithForm 
      name="delete" 
      title="Вы уверены?"
      buttonText="Да"
      isOpen = {isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  )
}

export default PopupDeletePlace;