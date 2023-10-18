import React from 'react';

function Card(props)
{  
  const handleClick = () => props.onCardClick(props.card)

  return (
    <div className="element">
      <button type="button" className="element__zoom" aria-label="Открыть оригинал фото" onClick={handleClick}>
        <div style={{ backgroundImage: `url(${props.card.link})` }} className="element__image"/>
      </button>
      <button type="button" className="button element__delete element__delete_invisible" aria-label="Удалить место" />
      <div className="element__caption">
        <h3 className="block element__text">{props.card.name}</h3>
        <div className="like">
          <button type="button" className="like__button" aria-label="Поставить лайк" />
          <p className="like__count">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;