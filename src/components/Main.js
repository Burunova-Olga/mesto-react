import React from 'react';
import Card from './Card';
import { CurrentUserContext } from './CurrentUserContext';

function Main(props)
{
  const currentUser = React.useContext(CurrentUserContext);
    
  return (
    <main>
      <section className="profile">
        <div className="avatar">
          <div style={{ backgroundImage: `url(${currentUser.avatar})` }} className="avatar__image"/>
          <button type="button" className="button avatar__button" aria-label="Редактировать аватар" onClick={props.onEditAvatar}>
            <div className="avatar__pen" />
          </button>
        </div>
        <div className="profile__info">
          <h1 className="block profile__name">{currentUser.name}</h1>
          <button type="button" className="button profile__edit" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
          <p className="block profile__description">{currentUser.about}</p>
        </div>
        <button type="button" className="button profile__add" aria-label="Добавить место" onClick={props.onAddPlace} />
      </section>
      
      <section className="elements" aria-label="Место для фотографий">
        {
          props.cards.map((item) =>
          {
            return <Card 
              card={item} 
              key={item._id} 
              onCardClick={props.onCardClick} 
              onCardLike={props.onCardLike} 
              onCardDelete={props.onCardDelete}
            /> 
          })
        }
      </section>

    </main>
  );
}

export default Main;