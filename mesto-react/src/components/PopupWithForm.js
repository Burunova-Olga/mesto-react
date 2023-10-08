import React from 'react';

function PopupWithForm(props)
{   
  const [isOpen, setOpen] = React.useState(0);

  /*
  handleLike = () => {
    this.setState({ rating: 1 });
  };

  handleDislike = () => {
    this.setState({ rating: -1 });
  };

   ${isOpen && "popup_opened"}
   */

    return (
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <div className="close">
            <button type="button" className="button close__button" aria-label="Закрыть без сохранения"></button>
          </div>
          <h3 className="popup__title">{props.title}</h3>
          <form className={`form-popup form-popup_type_${props.name}`} name={`form-popup_type_${props.name}`} novalidate>
            <props.children />
          </form>
        </div>
      </div>
    );
}

export default PopupWithForm;