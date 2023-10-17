import React from 'react';

function ImagePopup(props)
{  
  return (
    <div className={`popup popup_type_zoom ${props.isOpen ? "popup_opened" : ''}`} id="popup-zoom">
      <div className="popup__container photo">
        <div className="close">
          <button type="button" className="button close__button" aria-label="Закрыть без сохранения"  onClick={props.onClose}></button>
        </div>
        <img className ="photo__image" src={`${props.isOpen ? props.card.link : '#'} `} alt="Фотография"></img>
        <p className="photo__text">{props.isOpen ? props.card.name : ''}</p>
      </div>
    </div>
  ); 
}

export default ImagePopup;