import React from 'react';

function PopupWithForm(props)
{   
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ''}` }>
      <div className="popup__container">
        <div className="close">
          <button type="button" className="button close__button" aria-label="Закрыть без сохранения" onClick={props.onClose} ></button>
        </div>
        <h3 className="popup__title">{props.title}</h3>
        <form className={`form-popup form-popup_type_${props.name}`} name={`form-popup_type_${props.name}`} noValidate>
          <props.children />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;