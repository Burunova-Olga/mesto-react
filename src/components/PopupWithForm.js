import React from 'react';

function PopupWithForm({name, isOpen, title, buttonText, onClose, children})
{   
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ''}` }>
      <div className="popup__container">
        <div className="close">
          <button type="button" className="button close__button" aria-label="Закрыть без сохранения" onClick={onClose} />
        </div>
        <h3 className="popup__title">{title}</h3>
        <form className={`form-popup form-popup_type_${name}`} name={`form-popup_type_${name}`}>
          {children}          
          <input type="submit" className="form-popup__submit" value={buttonText} />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;