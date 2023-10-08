import React from 'react';

class ImagePopup extends React.Component
{  
  // JSX-структура компонента
  render()
  {
    return (
      <div className="popup popup_type_zoom" id="popup-zoom">
        <div className="popup__container photo">
          <div className="close">
            <button type="button" className="button close__button" aria-label="Закрыть без сохранения"></button>
          </div>
          <img className="photo__image" src="#" alt="..." />
          <p className="photo__text"></p>
        </div>
      </div>
    );
  }
}

export default ImagePopup;