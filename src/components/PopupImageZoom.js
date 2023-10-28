import React from 'react';

function PopupImageZoom({isOpen, onClose, card})
{  
  return (
    <div className={`popup popup_type_zoom ${isOpen ? "popup_opened" : ''}`} id="popup-zoom">
      <div className="popup__container photo">
        <div className="close">
          <button type="button" className="button close__button" aria-label="Закрыть без сохранения"  onClick={onClose} />
        </div>
        <img className ="photo__image"
          src={card.link}
          alt= {card.name} />
        <p className="photo__text">{(card.name != " ") ? card.name : ''}</p>
      </div>
    </div>
  ); 
}

export default PopupImageZoom;