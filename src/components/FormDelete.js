import React from 'react';
import PopupWithForm from './PopupWithForm';

function FormDelete({isOpen, onClose})
{
  return (
    <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" isOpen = {isOpen} onClose={onClose} />
  )
}

export default FormDelete;